import { memo, useCallback, useMemo } from 'react';
import { Route } from 'react-router-dom';
import { Column } from '@toolz/material-ui/dist/Column';
import { Divider, TableRow, TableCell, TableContainer, Paper, Table, TableHead, TableBody } from '@material-ui/core';
import { jobs } from '../../common/arrays/jobs';
import { useViewport } from '@toolz/use-viewport';
import { materialUiBreakpoints } from '../../common/arrays/materialUiBreakpoints';
import { education } from '../../common/arrays/education';
import '../../common/css/baseProperties.css';
import './css/printResume.css';
import { Row } from '../../common/components/Row';

export const PrintResume = memo(() => {
   const viewport = useViewport(materialUiBreakpoints);

   const isMobile = useMemo(() => {
      return ['xs', 'sm'].includes(viewport.size);
   }, [viewport]);

   const getEducationCards = useCallback(() => {
      return education.map((card, index) => {
         return (
            <div
               className={'marginBottom_16'}
               key={'education-' + index}
            >
               <Row className={'justifyContentEvenly'}>
                  <Column xs={6} sm={5} md={4} lg={3} xl={2}>
                     <div className={'fontWeightBold'}>
                        {card.employer}
                     </div>
                     <div className={'title'}>
                        {card.title}
                     </div>
                     <div className={'fontSize_0_9em'}>
                        {card.beginYear} - {card.endYear}
                     </div>
                  </Column>
                  <Column xs={6} sm={7} md={8} lg={9} xl={10}>
                     <div style={{fontSize: isMobile ? '0.8em' : '0.9em'}}>
                        {card.description}
                     </div>
                  </Column>
               </Row>
            </div>
         );
      });
   }, [isMobile]);

   const getTechnologies = useCallback((technologies = []) => {
      let technologyList = '';
      technologies.forEach((technology, index) => {
         if (index !== 0)
            technologyList += ', ';
         technologyList += technology;
      });
      return technologyList;
   }, []);

   const getJobCards = useCallback(() => {
      return jobs.map((job, index) => {
         let divider = null;
         if (index < jobs.length - 1)
            divider = <>
               <Row className={'justifyContentEvenly'}>
                  <Column xs={6} sm={7} md={8} lg={9} xl={10}>
                     <Divider/>
                  </Column>
               </Row>
            </>;
         let technologies = null;
         if (job.technologies.length !== 0)
            technologies = <>
               <Row className={'justifyContentEvenly marginBottom_16'}>
                  <Column xs={12}>
                     <div className={'technologiesUsed'}>
                        Technologies used:
                     </div>
                     <div className={'fontSize_0_8em'}>
                        {getTechnologies(job.technologies)}
                     </div>
                  </Column>
               </Row>
            </>;
         return (
            <div
               className={'marginBottom_16'}
               key={'job-' + index}
            >
               <Row className={'justifyContentEvenly'}>
                  <Column xs={6} sm={5} md={4} lg={3} xl={2}>
                     <div className={'fontWeightBold'}>
                        {job.employer}
                     </div>
                     <div className={'title'}>
                        {job.title}
                     </div>
                     <div className={'fontSize_0_9em'}>
                        {job.beginYear} - {job.endYear}
                     </div>
                  </Column>
                  <Column xs={6} sm={7} md={8} lg={9} xl={10}>
                     <div style={{fontSize: isMobile ? '0.8em' : '0.9em'}}>
                        {job.description}
                     </div>
                  </Column>
               </Row>
               {technologies}
               {divider}
            </div>
         );
      });
   }, [getTechnologies, isMobile]);

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
               <TableCell><span className={'fontSize_0_8em fontStyleNormal'}>{technology}</span></TableCell>
               <TableCell><span className={'fontSize_0_8em fontStyleNormal'}>{skill.yearsUsed}</span></TableCell>
               <TableCell><span className={'fontSize_0_8em fontStyleNormal'}>{skill.firstUsed}</span></TableCell>
               <TableCell><span className={'fontSize_0_8em fontStyleNormal'}>{skill.lastUsed}</span></TableCell>
            </TableRow>
         );
      });
      return (
         <TableContainer component={Paper}>
            <Table
               aria-label={'skills table'}
               size={'small'}
            >
               <TableHead>
                  <TableRow>
                     <TableCell><span className={'fontSize_0_9em fontStyleNormal'}>Technology</span></TableCell>
                     <TableCell><span className={'fontSize_0_9em fontStyleNormal'}>Years Used</span></TableCell>
                     <TableCell><span className={'fontSize_0_9em fontStyleNormal'}>First</span></TableCell>
                     <TableCell><span className={'fontSize_0_9em fontStyleNormal'}>Last</span></TableCell>
                  </TableRow>
               </TableHead>
               <TableBody>
                  {rows}
               </TableBody>
            </Table>
         </TableContainer>
      );
   }, []);

   return <>
      <Route
         exact={true}
         path={'/print-resume'}
      >
         <Row className={'justifyContentEvenly'}>
            <Column
               className={'padding_8'}
               xs={12} sm={11} md={10} lg={9} xl={8}
            >
               <div className={'textAlignRight'}>
                  ADAM NATHANIEL DAVIS
               </div>
               <div className={'tagline'}>
                  Experienced Software Professional
               </div>
               <Divider/>
               <div className={'contactInfo'}>
                  2512 Dellwood Avenue, Jacksonville, Florida 32204
                  <br/>
                  904-434-9210 / me@adamdavis{'\u2024'}codes
                  <br/>
                  https://adamdavis.codes
               </div>
               <div className={'sectionContainer'}>
                  <div className={'marginBottom_8'}>
                     OVERVIEW:
                     <div className={'textAlignJustify marginTop_8 fontSize_0_9em'}>
                        I'm a lifelong software engineering professional, having worked in this career field for a quarter-century. Over the years I progressed
                        through static websites, to server-side scripting, to backend databases and compiled languages. In the last decade, I've focused
                        progressively on <i>frontend</i> development, working with all manner of TypeScript/JavaScript technologies and frameworks including jQuery,
                        Knockout, Angular, Svelte, Node, and React. Although I can work in many different codebases, my tech-stack-of-choice is React, Node,
                        Express/REST, and any flavor of backend data storage.
                        <br/><br/>
                        <b>NOTE:</b> If you're viewing this in a printed/file format, you're missing the vast majority of the information that's available about me on my
                        CV site. Please check that out at: <b>https://adamdavis.codes</b>. There you'll find links to my many blogs about software engineering, my GitHub
                        repos, my NPM packages, the live sites I have on the web, and much more. (Also, the site itself is a React application.)
                     </div>
                  </div>
               </div>
               <Divider/>
               <div className={'sectionContainer marginTop_16'}>
                  <div className={'marginBottom_8'}>
                     EXPERIENCE: <span>a quarter-century of industry expertise</span>
                  </div>
                  {getJobCards()}
               </div>
               <Divider/>
               <div className={'sectionContainer marginTop_16'}>
                  <div className={'marginBottom_8'}>
                     SKILLS:
                  </div>
                  {getSkills()}
               </div>
               <Divider/>
               <div className={'sectionContainer marginTop_16'}>
                  <div className={'marginBottom_8'}>
                     EDUCATION:
                  </div>
                  {getEducationCards()}
               </div>
            </Column>
         </Row>
      </Route>
   </>;
});
