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
   const directions = useMemo(() => {
      return ['left', 'right'];
   }, []);
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

   const getJobDescription = useCallback((description = '', direction = '') => {
      allow.aString(description, is.not.empty).oneOf(direction, directions);
      const columnStyle = direction === 'left' ? style.jobDescription.columnLeft : style.jobDescription.columnRight;
      return <>
         <Column
            xs={8}
            style={columnStyle}
         >
            {description}
         </Column>
      </>;
   }, [directions, style]);

   const getTechnologiesUsed = useCallback((technologies = '', direction = '') => {
      allow.aString(technologies, is.not.empty).oneOf(direction, directions);
      const columnStyle = direction === 'left' ? style.textAlignLeft : style.textAlignRight;
      const divStyle = direction === 'left' ? style.technologiesUsed.div2Left : style.technologiesUsed.div3Right;
      return <>
         <Row
            justify={'space-evenly'}
            style={style.marginTop16}
         >
            <Column
               xs={11}
               style={columnStyle}
            >
               <div style={style.technologiesUsed.div1}>
                  Technologies Used:
               </div>
               <div style={divStyle}>
                  {technologies}
               </div>
            </Column>
         </Row>
      </>;
   }, [directions, style]);

   const getTimeframe = useCallback((timeframe = '', direction = '') => {
      allow.aString(timeframe, is.not.empty).oneOf(direction, directions);
      const h3Style = direction === 'right' ? style.timeframe.columnRight : style.timeframe.columnLeft;
      return <>
         <Row>
            <Column xs={12}>
               <h3 style={h3Style}>
                  {timeframe}
               </h3>
            </Column>
         </Row>
      </>;
   }, [directions, style]);

   const getTitleAndEmployer = useCallback((title = '', employer = '', direction = '') => {
      allow.aString(title, is.not.empty).aString(employer, is.not.empty).oneOf(direction, directions);
      const columnStyle = direction === 'right' ? style.titleAndEmployer.columnRight : style.titleAndEmployer.columnLeft;
      return <>
         <Column
            xs={4}
            style={columnStyle}
         >
            <div style={style.textTransformUppercase}>
               {title}
            </div>
            <div style={style.titleAndEmployer.div}>
               {employer}
            </div>
         </Column>
      </>;
   }, [directions, style]);

   const getTrailSpacer = useCallback((direction = '') => {
      allow.oneOf(direction, directions);
      return <>
         <Row justify={'space-evenly'}>
            <Column xs={11}>
               <Row>
                  <Column
                     xs={direction === 'left' ? 2 : 10}
                     style={style.trailSpacer.column}
                  />
               </Row>
            </Column>
         </Row>
      </>;
   }, [directions, style]);

   const getCssTransition = useCallback(match => {
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
                        {getTrailSpacer('right')}
                        <div style={style.jobCard}>
                           {getTimeframe('2020 - 2022', 'left')}
                           <Row style={style.paddingTop8}>
                              {getTitleAndEmployer('Senior Software Engineer', 'SemanticBits', 'left')}
                              {getJobDescription('Technical lead on a team developing user interfaces for Medicare.gov and HealthCare.gov', 'left')}
                           </Row>
                           {getTechnologiesUsed('JavaScript, TypeScript, React, Node, Express, REST, HTML/CSS, Electron, Jenkins, GitHub', 'left')}
                        </div>
                        {getTrailSpacer('left')}
                        <div style={style.jobCard}>
                           {getTimeframe('2019', 'right')}
                           <Row style={style.paddingTop8}>
                              {getJobDescription('Site-based development and installation of custom solutions for video monitoring and physical security (site access) systems', 'right')}
                              {getTitleAndEmployer('Lead Software Engineer', 'Duos Technologies', 'right')}
                           </Row>
                           {getTechnologiesUsed('PHP, JavaScript, React, jQuery, MySQL, PostgreSQL, REST, HTML/CSS, TFS', 'right')}
                        </div>
                        {getTrailSpacer('right')}
                        <div style={style.jobCard}>
                           {getTimeframe('2017 - 2019', 'left')}
                           <Row style={style.paddingTop8}>
                              {getTitleAndEmployer('Developer III', 'Availity', 'left')}
                              {getJobDescription('Full-stack developer responsible for building backend web services, and the SaaS frontend portals that consumed those services; High-volume environment coordinating sensitive data between major health insurance providers;', 'left')}
                           </Row>
                           {getTechnologiesUsed('Java, Oracle, JavaScript, Angular, React, jQuery, REST, HTML/CSS, Jenkins, Git', 'left')}
                        </div>
                        {getTrailSpacer('left')}
                        <div style={style.jobCard}>
                           {getTimeframe('2015 - 2017', 'right')}
                           <Row style={style.paddingTop8}>
                              {getJobDescription('Maintaining a large, legacy, SaaS Applicant Tracking System, while converting its backend to a series of REST services', 'right')}
                              {getTitleAndEmployer('Senior Software Engineer', 'SilkRoad', 'right')}
                           </Row>
                           {getTechnologiesUsed('ColdFusion, C#, JavaScript, jQuery, REST, MS-SQL, HTML/CSS, Perforce', 'right')}
                        </div>
                        {getTrailSpacer('right')}
                        <div style={style.jobCard}>
                           {getTimeframe('2012 - 2015', 'left')}
                           <Row style={style.paddingTop8}>
                              {getTitleAndEmployer('IT Manager', 'EverBank', 'left')}
                              {getJobDescription('Leading a team of developers initially focused on the implementation of a new content management system, and eventually tasked with supporting all functions on the public-facing website', 'left')}
                           </Row>
                           {getTechnologiesUsed('C#, MS-SQL, JavaScript, jQuery, Knockout, Sitecore, Node, HTML/CSS, TFS', 'left')}
                        </div>
                        {getTrailSpacer('left')}
                        <div style={style.jobCard}>
                           {getTimeframe('2010 - 2012', 'right')}
                           <Row style={style.paddingTop8}>
                              {getJobDescription('Creating a US-based business for an international outsourcing firm specializing in application development, design/graphics, business analysis, staffing, and quality assurance testing', 'right')}
                              {getTitleAndEmployer('Managing Partner', 'Insoft USA', 'right')}
                           </Row>
                           {getTechnologiesUsed('PHP, JavaScript, jQuery, C#, MS-SQL, MySQL, HTML/CSS', 'right')}
                        </div>
                        {getTrailSpacer('right')}
                        <div style={style.jobCard}>
                           {getTimeframe('2007 - 2010', 'left')}
                           <Row style={style.paddingTop8}>
                              {getTitleAndEmployer('Director of Technology', 'MECLABS', 'left')}
                              {getJobDescription('Building an IT department from scratch to support an $18M marketing company, including extensive budgeting and analysis of staffing and infrastructure', 'left')}
                           </Row>
                           {getTechnologiesUsed('PHP, MySQL, Google Analytics, JavaScript, jQuery, HTML/CSS', 'left')}
                        </div>
                        {getTrailSpacer('left')}
                        <div style={style.jobCard}>
                           {getTimeframe('2004 - 2007', 'right')}
                           <Row style={style.paddingTop8}>
                              {getJobDescription('Leading the transition from delivering customized, ad hoc software to a SaaS model based on formalized release management, including the implementation of new source control tools and the reorganization of development resources', 'right')}
                              {getTitleAndEmployer('Director of Application Delivery', 'Vurv Technology', 'right')}
                           </Row>
                           {getTechnologiesUsed('ColdFusion, MS-SQL, JavaScript, HTML/CSS', 'right')}
                        </div>
                        {getTrailSpacer('right')}
                        <div style={style.jobCard}>
                           {getTimeframe('2001 - 2004', 'left')}
                           <Row style={style.paddingTop8}>
                              {getTitleAndEmployer('Application Developer', 'Nemours', 'left')}
                              {getJobDescription('Developing custom applications to support the public website and internal/clinical objectives', 'left')}
                           </Row>
                           {getTechnologiesUsed('ColdFusion, PHP, MS-SQL, HTML/CSS', 'left')}
                        </div>
                        {getTrailSpacer('left')}
                        <div style={style.jobCard}>
                           {getTimeframe('1997 - 2001', 'right')}
                           <Row style={style.paddingTop8}>
                              {getJobDescription('I built numerous websites for clients.  I created a web-based, publicly-playable game for trading "shares" of athletes in real-time.  I built a boxing simulation.  I wrote automated currency-trading software.  I got my fingers into all sorts of exotically-flavored pies.', 'right')}
                              {getTitleAndEmployer('Owner', 'Self-Employed', 'right')}
                           </Row>
                           {getTechnologiesUsed('PHP, MySQL, HTML/CSS', 'right')}
                        </div>
                        {getTrailSpacer('right')}
                        <div style={style.jobCard}>
                           {getTimeframe('1992 - 1997', 'left')}
                           <Row style={style.paddingTop8}>
                              {getTitleAndEmployer('Air Traffic Control Radar Technician', 'U.S. Air Force', 'left')}
                              {getJobDescription('I was a certified electronic technician, maintaining most of the same radars used at civilian airports.', 'left')}
                           </Row>
                        </div>
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
                        <div style={style.jobCard}>
                           {getTimeframe('1985 - Present', 'left')}
                           <Row style={style.paddingTop8}>
                              {getTitleAndEmployer('Programming', 'Self-Taught', 'left')}
                              {getJobDescription(`I've never taken a programming course of any sort.  I never went to school to learn anything related to application development.  Every technology I've used, every software skill I've acquired, every language I've learned, has been completely self-taught.`, 'left')}
                           </Row>
                        </div>
                        {getTrailSpacer('left')}
                        <div style={style.jobCard}>
                           {getTimeframe('1997', 'right')}
                           <Row style={style.paddingTop8}>
                              {getJobDescription('San Antonio, Texas', 'right')}
                              {getTitleAndEmployer('Associate of Electronics', 'Community College of the Air Force', 'right')}
                           </Row>
                        </div>
                        {getTrailSpacer('right')}
                        <div style={style.jobCard}>
                           {getTimeframe('1990', 'left')}
                           <Row style={style.paddingTop8}>
                              {getTitleAndEmployer('Diploma', 'Creston High School', 'left')}
                              {getJobDescription('Grand Rapids, Michigan (Nothing makes you feel older than realizing that your high school doesn\'t even exist anymore...)', 'left')}
                           </Row>
                        </div>
                     </Column>
                  </Row>
               </div>
               <Footer/>
            </div>
         </CSSTransition>
      </>;
   }, [getJobDescription, getTechnologiesUsed, getTimeframe, getTitleAndEmployer, getTrailSpacer, style]);

   return <>
      <Route
         children={({match}) => getCssTransition(match)}
         exact={true}
         path={'/resume'}
      />
   </>;
});
