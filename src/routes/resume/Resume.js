import { Route } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { useRef, memo, useMemo, useCallback } from 'react';
import '../../common/css/fade.css';
import { css3 } from '@toolz/css3/src/css3';
import { Footer } from '../../Footer';
import { logGooglePageHit } from '../../common/functions/logGooglePageHit';
import { Row } from '@toolz/material-ui/dist/Row';
import { the } from '../../common/objects/the';
import { Column } from '@toolz/material-ui/dist/Column';
import { getResponsiveSpacing } from '../../common/functions/getResponsiveSpacing';
import { useViewport } from '@toolz/use-viewport';
import { allow } from '@toolz/allow-react';
import { is } from '../../common/objects/is';
import { materialUiBreakpoints } from '../../common/arrays/materialUiBreakpoints';
import { Header } from '../../Header';
import { jobs } from '../../common/arrays/jobs';
import { education } from '../../common/arrays/education';

export const Resume = memo(() => {
   const currentDirection = useRef('right');
   const jobCardCount = useRef(0);
   const nodeRef = useRef(null);
   const viewport = useViewport(materialUiBreakpoints);

   const style = useMemo(() => {
      const isMobile = ['xs', 'sm'].includes(viewport.size);
      return {
         jobCard: {
            border: '1px solid grey',
            backgroundColor: the.color.white,
            borderRadius: 10,
            boxShadow: 'rgba(0, 0, 0, 0.25) -11.31px 11.31px 17px 0px',
            padding: 16,
            pageBreakInside: css3.pageBreakInside.avoid,
         },
         jobDescription: {
            columnLeft: {
               borderLeft: '1px solid #cccccc',
               borderRight: css3.border.right.inherit,
               fontSize: '0.8em',
               paddingLeft: 8,
               paddingRight: 0,
               textAlign: css3.textAlign.left,
            },
            columnRight: {
               borderLeft: css3.border.left.inherit,
               borderRight: '1px solid #cccccc',
               fontSize: '0.8em',
               paddingLeft: 0,
               paddingRight: 8,
               textAlign: css3.textAlign.right,
            },
         },
         marginTop0OrInitial: {
            marginTop: isMobile ? 0 : 'initial',
         },
         marginTop16: {
            marginTop: 16,
         },
         marginTop48: {
            marginTop: 48,
         },
         paddingTop8: {
            paddingTop: 8,
         },
         printResumeLink1: {
            cursor: css3.cursor.pointer,
            marginBottom: 10,
            textAlign: css3.textAlign.center,
            textDecoration: css3.textDecoration.underline,
         },
         printResumeLink2: {
            cursor: css3.cursor.pointer,
            marginTop: 20,
            textAlign: css3.textAlign.center,
            textDecoration: css3.textDecoration.underline,
         },
         technologiesUsed: {
            div1: {
               fontWeight: css3.fontWeight._500,
               marginBottom: 12,
            },
            div2Left: {
               border: '1px solid #cccccc',
               borderRadius: 5,
               fontSize: '0.9em',
               padding: 8,
               textAlign: css3.textAlign.left,
            },
            div3Right: {
               border: '1px solid #cccccc',
               borderRadius: 5,
               fontSize: '0.9em',
               padding: 8,
               textAlign: css3.textAlign.right,
            },
         },
         textAlignLeft: {
            textAlign: css3.textAlign.left,
         },
         textAlignRight: {
            textAlign: css3.textAlign.right,
         },
         textTransformUppercase: {
            textTransform: css3.textTransform.uppercase,
         },
         timeframe: {
            columnLeft: {
               color: the.color.purple,
               margin: 0,
               textAlign: css3.textAlign.left,
            },
            columnRight: {
               color: the.color.purple,
               margin: 0,
               textAlign: css3.textAlign.right,
            },
         },
         titleAndEmployer: {
            columnLeft: {
               paddingLeft: css3.paddingLeft.inherit,
               paddingRight: 8,
               textAlign: css3.textAlign.right,
            },
            columnRight: {
               paddingLeft: 8,
               paddingRight: css3.paddingRight.inherit,
               textAlign: css3.textAlign.left,
            },
            div: {
               marginTop: isMobile ? 4 : 0,
               fontSize: '0.9em',
               fontStyle: css3.fontStyle.italic,
            },
         },
         trailSpacer: {
            column: {
               borderRight: '2px solid #551a8b',
               minHeight: 48,
            },
         },
         transition: {
            column: {
               paddingLeft: 8,
               paddingRight: 8,
            },
            div1: {
               position: css3.position.absolute,
               width: '100%',
            },
            div2: {
               backgroundColor: the.color.sand,
               paddingBottom: getResponsiveSpacing(viewport.size, 8, 48),
               paddingTop: getResponsiveSpacing(viewport.size, 8, 48),
            },
         },
      };
   }, [viewport.size]);

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
                        xs={currentDirection.current === 'left' ? 2 : 10}
                        style={style.trailSpacer.column}
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
         const column1Style = currentDirection.current === 'left' ? style.textAlignLeft : style.textAlignRight;
         const divStyle = currentDirection.current === 'left' ? style.technologiesUsed.div2Left : style.technologiesUsed.div3Right;
         technologiesUsed = <>
            <Row
               justify={'space-evenly'}
               style={style.marginTop16}
            >
               <Column
                  xs={11}
                  style={column1Style}
               >
                  <div style={style.technologiesUsed.div1}>
                     Technologies Used:
                  </div>
                  <div style={divStyle}>
                     {job.technologies}
                  </div>
               </Column>
            </Row>
         </>;
      }
      const h3Style = currentDirection.current === 'right' ? style.timeframe.columnRight : style.timeframe.columnLeft;
      const column2Style = currentDirection.current === 'right' ? style.titleAndEmployer.columnRight : style.titleAndEmployer.columnLeft;
      const column3Style = currentDirection.current === 'left' ? style.jobDescription.columnLeft : style.jobDescription.columnRight;
      const titleAndEmployerColumn = <>
         <Column
            xs={4}
            style={column2Style}
         >
            <div style={style.textTransformUppercase}>
               {job.title}
            </div>
            <div style={style.titleAndEmployer.div}>
               {job.employer}
            </div>
         </Column>
      </>;
      const descriptionColumn = <>
         <Column
            xs={8}
            style={column3Style}
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
         <div style={style.jobCard}>
            <Row>
               <Column xs={12}>
                  <h3 style={h3Style}>
                     {job.timeframe}
                  </h3>
               </Column>
            </Row>
            <Row style={style.paddingTop8}>
               {body}
            </Row>
            {technologiesUsed}
         </div>
      </>;
   }, [style]);

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
               key={'resume'}
               ref={nodeRef}
               style={style.transition.div1}
            >
               <Header/>
               <div style={style.transition.div2}>
                  <div
                     onClick={goToPrintResume}
                     style={style.printResumeLink1}
                  >
                     Click here for a printer-friendly version of this resume that can be saved in a PDF format
                  </div>
                  <Row justify={'space-evenly'}>
                     <Column
                        xs={12} sm={10} md={8} lg={7} xl={6}
                        style={style.transition.column}
                     >
                        <h1 style={style.marginTop0OrInitial}>Experience</h1>
                        {getJobCards()}
                     </Column>
                  </Row>
                  <Row
                     justify={'space-evenly'}
                     style={style.marginTop48}
                  >
                     <Column
                        xs={12} sm={10} md={8} lg={7} xl={6}
                        style={style.transition.column}
                     >
                        <h1>Education</h1>
                        {getEducationCards()}
                     </Column>
                  </Row>
                  <div
                     onClick={goToPrintResume}
                     style={style.printResumeLink2}
                  >
                     Click here for a printer-friendly version of this resume that can be saved in a PDF format
                  </div>
               </div>
               <Footer/>
            </div>
         </CSSTransition>
      </>;
   }, [getEducationCards, getJobCards, goToPrintResume, style]);

   const triggerTransition = useCallback(({match}) => getCssTransition(match), [getCssTransition]);

   return <>
      <Route
         children={triggerTransition}
         exact={true}
         path={'/resume'}
      />
   </>;
});
