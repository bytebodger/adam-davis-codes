import { Route } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { useRef, memo, useMemo, useCallback } from 'react';
import '../../common/css/fade.css';
import { css3 } from '@toolz/css3/src/css3';
import { Footer } from '../../Footer';
import { logGooglePageHit } from '../../common/functions/logGooglePageHit';
import { Row } from '@toolz/material-ui/dist/Row';
import { Column } from '@toolz/material-ui/dist/Column';
import { getResponsiveSpacing } from '../../common/functions/getResponsiveSpacing';
import { useViewport } from '@toolz/use-viewport';
import { allow } from '@toolz/allow-react';
import { is } from '../../common/objects/is';
import { materialUiBreakpoints } from '../../common/arrays/materialUiBreakpoints';
import { Header } from '../../Header';
import { jobs } from '../../common/arrays/jobs';
import { education } from '../../common/arrays/education';
import '../../common/css/baseProperties.css';
import './css/resume.css';

export const Resume = memo(() => {
   const currentDirection = useRef('right');
   const jobCardCount = useRef(0);
   const nodeRef = useRef(null);
   const viewport = useViewport(materialUiBreakpoints);

   const isMobile = useMemo(() => {
      return ['xs', 'sm'].includes(viewport.size);
   }, [viewport]);

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
      if (job.technologies === '')
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
                     {job.technologies}
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
                     {job.timeframe}
                  </h3>
               </Column>
            </Row>
            <Row className={'paddingTop_8'}>
               {body}
            </Row>
            {technologiesUsed}
         </div>
      </>;
   }, [isMobile]);

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
   }, [getEducationCards, getJobCards, goToPrintResume, isMobile, viewport]);

   const triggerTransition = useCallback(({match}) => getCssTransition(match), [getCssTransition]);

   return <>
      <Route
         children={triggerTransition}
         exact={true}
         path={'/resume'}
      />
   </>;
});
