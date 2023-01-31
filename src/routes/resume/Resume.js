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

export const Resume = memo(() => {
   const currentDirection = useRef('right');
   const jobCardCount = useRef(0);
   const nodeRef = useRef(null);
   const viewport = useViewport(materialUiBreakpoints);

   const education = useMemo(() => {
      return [
         {
            description: `I've never taken a programming course of any sort.  I never went to school to learn anything related to application development.  Every technology I've used, every software skill I've acquired, every language I've learned, has been completely self-taught.`,
            employer: 'Self-taught',
            technologies: '',
            timeframe: '1985 - Present',
            title: 'Programming',
         },
         {
            description: 'San Antonio, Texas',
            employer: 'Community College of the Air Force',
            technologies: '',
            timeframe: '1997',
            title: 'Associate in Electronics',
         },
         {
            description: 'Grand Rapids, Michigan (Nothing makes you feel older than realizing that your high school doesn\'t even exist anymore...)',
            employer: 'Creston High School',
            technologies: '',
            timeframe: '1990',
            title: 'Diploma',
         },
      ];
   }, []);

   const jobs = useMemo(() => {
      return [
         {
            description: 'Maintaing, extending, and re-architecting the in-house application that handled all outgoing marketing email communications',
            employer: 'Amazon',
            technologies: 'JavaScript, Angular, React, Backbone, Node, jQuery',
            timeframe: '2022 - 2023',
            title: 'Frontend Engineer',
         },
         {
            description: 'Technical lead on a team developing user interfaces for Medicare.gov and HealthCare.gov',
            employer: 'SemanticBits',
            technologies: 'JavaScript, TypeScript, React, Node, Express, REST, HTML/CSS, Electron, Jenkins, GitHub',
            timeframe: '2020 - 2022',
            title: 'Senior Software Engineer',
         },
         {
            description: 'Full-stack developer responsible for building backend web services, and the SaaS frontend portals that consumed those services; High-volume environment coordinating sensitive data between major health insurance providers;',
            employer: 'Availity',
            technologies: 'Java, Oracle, JavaScript, Angular, React, jQuery, REST, HTML/CSS, Jenkins, Git',
            timeframe: '2017 - 2020',
            title: 'Developer III',
         },
         {
            description: 'Maintaining a large, legacy, SaaS Applicant Tracking System, while converting its backend to a series of REST services',
            employer: 'SilkRoad',
            technologies: 'ColdFusion, C#, JavaScript, jQuery, REST, MS-SQL, HTML/CSS, Perforce',
            timeframe: '2015 - 2017',
            title: 'Senior Software Engineer',
         },
         {
            description: 'Leading a team of developers initially focused on the implementation of a new content management system, and eventually tasked with supporting all functions on the public-facing website',
            employer: 'EverBank',
            technologies: 'C#, MS-SQL, JavaScript, jQuery, Knockout, Sitecore, Node, HTML/CSS, TFS',
            timeframe: '2012 - 2015',
            title: 'IT Manager',
         },
         {
            description: 'Creating a US-based business for an international outsourcing firm specializing in application development, design/graphics, business analysis, staffing, and quality assurance testing',
            employer: 'Insoft USA',
            technologies: 'PHP, JavaScript, jQuery, C#, MS-SQL, MySQL, HTML/CSS',
            timeframe: '2010 - 2012',
            title: 'Managing Partner',
         },
         {
            description: 'Building an IT department from scratch to support an $18M marketing company, including extensive budgeting and analysis of staffing and infrastructure',
            employer: 'MECLABS',
            technologies: 'PHP, MySQL, Google Analytics, JavaScript, jQuery, HTML/CSS',
            timeframe: '2007 - 2010',
            title: 'Director of Technology',
         },
         {
            description: 'Leading the transition from delivering customized, ad hoc software to a SaaS model based on formalized release management, including the implementation of new source control tools and the reorganization of development resources',
            employer: 'Vurv Technology',
            technologies: 'ColdFusion, MS-SQL, JavaScript, HTML/CSS',
            timeframe: '2004 - 2007',
            title: 'Director of Application Delivery',
         },
         {
            description: 'Developing custom applications to support the public website and internal/clinical objectives',
            employer: 'Nemours',
            technologies: 'ColdFusion, PHP, MS-SQL, HTML/CSS',
            timeframe: '2001 - 2004',
            title: 'Application Developer',
         },
         {
            description: 'I built numerous websites for clients.  I created a web-based, publicly-playable game for trading "shares" of athletes in real-time.  I built a boxing simulation.  I wrote automated currency-trading software.  I got my fingers into all sorts of exotically-flavored pies.',
            employer: 'Self-Employed',
            technologies: 'PHP, MySQL, HTML/CSS',
            timeframe: '1997 - 2001',
            title: 'Owner',
         },
         {
            description: 'I was a certified electronic technician, maintaining many of the same radars used at civilian airports.',
            employer: 'U.S. Air Force',
            technologies: '',
            timeframe: '1992 - 1997',
            title: 'Air Traffic Control Radar Technician',
         },
      ];
   }, []);

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
   }, [getJobCard, education]);

   const getJobCards = useCallback(() => {
      return jobs.map(job => {
         return <div key={JSON.stringify(job)}>
            {getJobCard(job)}
         </div>;
      });
   }, [getJobCard, jobs]);

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
               <div style={style.transition.div2}>
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
               </div>
               <Footer/>
            </div>
         </CSSTransition>
      </>;
   }, [getEducationCards, getJobCards, style]);

   return <>
      <Route
         children={({match}) => getCssTransition(match)}
         exact={true}
         path={'/resume'}
      />
   </>;
});
