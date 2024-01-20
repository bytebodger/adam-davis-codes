import { Route } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { useRef, memo, useMemo, useCallback } from 'react';
import '../../common/css/fade.css';
import { css3 } from '@toolz/css3/src/css3';
import { Footer } from '../../common/components/Footer';
import { logGooglePageHit } from '../../common/functions/logGooglePageHit';
import { Row } from '@toolz/material-ui/dist/Row';
import { Column } from '@toolz/material-ui/dist/Column';
import { getResponsiveSpacing } from '../../common/functions/getResponsiveSpacing';
import { useViewport } from '@toolz/use-viewport';
import { allow } from '@toolz/allow-react';
import { is } from '../../common/objects/is';
import { materialUiBreakpoints } from '../../common/arrays/materialUiBreakpoints';
import { Header } from '../../common/components/Header';
import { jobs } from '../../common/arrays/jobs';
import { education } from '../../common/arrays/education';
import '../../common/css/baseProperties.css';
import './css/resume.css';
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';

export const Resume = memo(() => {
   const currentDirection = useRef('right');
   const jobCardCount = useRef(0);
   const nodeRef = useRef(null);
   const viewport = useViewport(materialUiBreakpoints);

   const isMobile = useMemo(() => {
      return ['xs', 'sm'].includes(viewport.size);
   }, [viewport]);

   const getTechnologies = useCallback((technologies = []) => {
      let technologyList = '';
      technologies.forEach((technology, index) => {
         if (index !== 0)
            technologyList += ', ';
         technologyList += technology;
      });
      return technologyList;
   }, []);

   const getJobCard = useCallback((job = {}) => {
      allow.anObject(job, is.not.empty);
      currentDirection.current = currentDirection.current === 'right' ? 'left' : 'right';
      jobCardCount.current = jobCardCount.current + 1;
      let trailSpacer;
      if (jobCardCount.current < 2)
         trailSpacer = null;
      else {
         trailSpacer = <>
            <Row justify={'space-evenly'}>
               <Column xs={11}>
                  <Row>
                     <Column
                        className={'trailspacerColumn'}
                        xs={currentDirection.current === 'left' ? 2 : 10}
                     />
                  </Row>
               </Column>
            </Row>
         </>;
      }
      let technologiesUsed;
      if (job.technologies.length === 0)
         technologiesUsed = null;
      else {
         technologiesUsed = <>
            <Row
               className={'marginTop_16'}
               justify={'space-evenly'}
            >
               <Column
                  className={currentDirection.current === 'left' ? 'textAlignLeft' : 'textAlignRight'}
                  xs={11}
               >
                  <div className={'technologiesUsedDiv'}>
                     Technologies Used:
                  </div>
                  <div
                     className={'jobTechnologies'}
                     style={{textAlign: currentDirection.current === 'left' ? css3.textAlign.left : css3.textAlign.right}}
                  >
                     {getTechnologies(job.technologies)}
                  </div>
               </Column>
            </Row>
         </>;
      }
      const titleAndEmployerColumn = <>
         <Column
            className={currentDirection.current === 'right' ? 'titleAndEmployerColumnRight' : 'titleAndEmployerColumnLeft'}
            xs={4}
         >
            <div className={'textTransformUppercase'}>
               {job.title}
            </div>
            <div
               className={'titleAndEmployerDiv'}
               style={{marginTop: isMobile ? 4 : 0}}
            >
               {job.employer}
            </div>
         </Column>
      </>;
      const descriptionColumn = <>
         <Column
            className={currentDirection.current === 'left' ? 'jobDescriptionColumnLeft' : 'jobDescriptionColumnRight'}
            xs={8}
         >
            {job.description}
         </Column>
      </>;
      let body;
      if (currentDirection.current === 'right') {
         body = <>
            {descriptionColumn}
            {titleAndEmployerColumn}
         </>;
      } else if (currentDirection.current === 'left') {
         body = <>
            {titleAndEmployerColumn}
            {descriptionColumn}
         </>;
      }
      return <>
         {trailSpacer}
         <div className={'jobCard'}>
            <Row>
               <Column xs={12}>
                  <h3
                     className={'timeframeH3'}
                     style={{textAlign: currentDirection.current === 'right' ? css3.textAlign.right : css3.textAlign.left}}
                  >
                     {job.beginYear} - {job.endYear}
                  </h3>
               </Column>
            </Row>
            <Row className={'paddingTop_8'}>
               {body}
            </Row>
            {technologiesUsed}
         </div>
      </>;
   }, [getTechnologies, isMobile]);

   const getEducationCards = useCallback(() => {
      jobCardCount.current = 0;
      return education.map(card => {
         return <div key={JSON.stringify(card)}>
            {getJobCard(card)}
         </div>;
      });
   }, [getJobCard]);

   const getJobCards = useCallback(() => {
      return jobs.map((job, index) => {
         return <div key={'job-' + index}>
            {getJobCard(job)}
         </div>;
      });
   }, [getJobCard]);

   const getSkills = useCallback(() => {
      const skills = {};
      jobs.forEach(job => {
         job.technologies.forEach(technology => {
            if (!skills[technology]) {
               skills[technology] = {
                  firstUsed: 5000,
                  lastUsed: 0,
                  yearsUsed: 0,
               };
            }
            if (job.beginYear < skills[technology].firstUsed)
               skills[technology].firstUsed = job.beginYear;
            if (job.endYear > skills[technology].lastUsed)
               skills[technology].lastUsed = job.endYear;
            skills[technology].yearsUsed += (job.endYear - job.beginYear);
         });
      });
      const keys = Object.keys(skills).sort();
      const rows = keys.map(technology => {
         const skill = skills[technology];
         return (
            <TableRow
               key={technology}
               sx={{'&:last-child td, &:last-child th': {border: 0}}}
            >
               <TableCell>{technology}</TableCell>
               <TableCell>{skill.yearsUsed}</TableCell>
               <TableCell>{skill.firstUsed}</TableCell>
               <TableCell>{skill.lastUsed}</TableCell>
            </TableRow>
         );
      });
      return (
         <TableContainer component={Paper}>
            <Table aria-label={'skills table'}>
               <TableHead>
                  <TableRow>
                     <TableCell>Technology</TableCell>
                     <TableCell>Years Used</TableCell>
                     <TableCell>First</TableCell>
                     <TableCell>Last</TableCell>
                  </TableRow>
               </TableHead>
               <TableBody>
                  {rows}
               </TableBody>
            </Table>
         </TableContainer>
      );
   }, []);

   const goToPrintResume = useCallback(() => window.open('/print-resume', '_blank'), []);

   const getCssTransition = useCallback(match => {
      jobCardCount.current = 0;
      if (match !== null)
         logGooglePageHit('resume');
      return <>
         <CSSTransition
            classNames={'fade'}
            in={match !== null}
            nodeRef={nodeRef}
            timeout={2000}
            unmountOnExit={true}
         >
            <div
               className={'transitionContainer'}
               key={'resume'}
               ref={nodeRef}
            >
               <Header/>
               <div
                  className={'backgroundColorSand'}
                  style={{
                     paddingBottom: getResponsiveSpacing(viewport.size, 8, 48),
                     paddingTop: getResponsiveSpacing(viewport.size, 8, 48),
                  }}
               >
                  <div
                     className={'topPrintResumeLink'}
                     onClick={goToPrintResume}
                  >
                     Click here for a printer-friendly version of this resume that can be saved in a PDF format
                  </div>
                  <Row justify={'space-evenly'}>
                     <Column
                        className={'transitionColumn'}
                        xs={12} sm={10} md={8} lg={7} xl={6}
                     >
                        <h1 style={{marginTop: isMobile ? 0 : 'initial'}}>Overview</h1>
                        <div className={'jobCard'}>
                           <Row className={'paddingTop_8'}>
                              <Column
                                 className={'fontSize_0_9em textAlignJustify'}
                                 xs={12}
                              >
                                 I'm a lifelong software engineering professional, having worked in this career field for a quarter-century. Over the years I progressed
                                 through static websites, to server-side scripting, to backend databases and compiled languages. In the last decade, I've focused
                                 progressively on <i>frontend</i> development, working with all manner of TypeScript/JavaScript technologies and frameworks including jQuery,
                                 Knockout, Angular, Svelte, Node, and React. Although I can work in many different codebases, my tech-stack-of-choice is React, Node,
                                 Express/REST, and any flavor of backend data storage.
                              </Column>
                           </Row>
                        </div>
                     </Column>
                  </Row>
                  <Row
                     className={'marginTop_48'}
                     justify={'space-evenly'}
                  >
                     <Column
                        className={'transitionColumn'}
                        xs={12} sm={10} md={8} lg={7} xl={6}
                     >
                        <h1 style={{marginTop: isMobile ? 0 : 'initial'}}>Experience</h1>
                        {getJobCards()}
                     </Column>
                  </Row>
                  <Row
                     className={'marginTop_48'}
                     justify={'space-evenly'}
                  >
                     <Column
                        className={'transitionColumn'}
                        xs={12} sm={10} md={8} lg={7} xl={6}
                     >
                        <h1 style={{marginTop: isMobile ? 0 : 'initial'}}>Skills</h1>
                        <div className={'jobCard'}>
                           <Row className={'paddingTop_8'}>
                              <Column
                                 className={'fontSize_0_9em textAlignJustify'}
                                 xs={12}
                              >
                                 {getSkills()}
                              </Column>
                           </Row>
                        </div>
                     </Column>
                  </Row>
                  <Row
                     className={'marginTop_48'}
                     justify={'space-evenly'}
                  >
                     <Column
                        className={'transitionColumn'}
                        xs={12} sm={10} md={8} lg={7} xl={6}
                     >
                        <h1>Education</h1>
                        {getEducationCards()}
                     </Column>
                  </Row>
                  <div
                     className={'bottomPrintResumeLink'}
                     onClick={goToPrintResume}
                  >
                     Click here for a printer-friendly version of this resume that can be saved in a PDF format
                  </div>
               </div>
               <Footer/>
            </div>
         </CSSTransition>
      </>;
   }, [getEducationCards, getJobCards, getSkills, goToPrintResume, isMobile, viewport]);

   const triggerTransition = useCallback(({match}) => getCssTransition(match), [getCssTransition]);

   return <>
      <Route
         children={triggerTransition}
         exact={true}
         path={'/resume'}
      />
   </>;
});
