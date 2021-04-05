import { Route } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { useRef } from 'react';
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

export const Resume = () => {
   const directions = ['left', 'right'];
   const nodeRef = useRef(null);
   const viewport = useViewport();
   const isMobile = ['xs', 'sm'].includes(viewport.size);
   
   const getCssTransition = match => {
      if (match !== null)
         logGooglePageHit('Resume');
      const styles = {
         jobCard: {
            backgroundColor: the.color.white,
            borderRadius: 10,
            boxShadow: 'rgba(0, 0, 0, 0.25) -11.31px 11.31px 17px 0px',
            padding: 16,
         },
      };
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
               style={{
                  position: css3.position.absolute,
                  width: '100%',
               }}
            >
               <div style={{
                  backgroundColor: the.color.sand,
                  paddingBottom: getResponsiveSpacing(viewport.size, 8, 48),
                  paddingTop: getResponsiveSpacing(viewport.size, 8, 48),
               }}>
                  <Row justify={'space-evenly'}>
                     <Column
                        xs={12} sm={10} md={8} lg={7} xl={6}
                        style={{
                           paddingLeft: 8,
                           paddingRight: 8,
                        }}
                     >
                        <h1>Experience</h1>
                        <div style={styles.jobCard}>
                           {getTimeframe('2020 - Present', 'left')}
                           <Row style={{paddingTop: 8}}>
                              {getTitleAndEmployer('Senior Software Engineer', 'SemanticBits', 'left')}
                              {getJobDescription('Technical lead on a team developing user interfaces for Medicare.gov and HealthCare.gov', 'left')}
                           </Row>
                           {getTechnologiesUsed('JavaScript, React, Node, Express, REST, HTML/CSS, Electron, Jenkins, GitHub', 'left')}
                        </div>
                        {getTrailSpacer('right')}
                        <div style={styles.jobCard}>
                           {getTimeframe('2019', 'right')}
                           <Row style={{paddingTop: 8}}>
                              {getJobDescription('Site-based development and installation of custom solutions for video monitoring and physical security (site access) systems', 'right')}
                              {getTitleAndEmployer('Lead Software Engineer', 'Duos Technologies', 'right')}
                           </Row>
                           {getTechnologiesUsed('PHP, JavaScript, React, jQuery, MySQL, PostgreSQL, REST, HTML/CSS, TFS', 'right')}
                        </div>
                        {getTrailSpacer('left')}
                        <div style={styles.jobCard}>
                           {getTimeframe('2017 - 2019', 'left')}
                           <Row style={{paddingTop: 8}}>
                              {getTitleAndEmployer('Developer III', 'Availity', 'left')}
                              {getJobDescription('Full-stack developer responsible for building backend web services, and the SaaS frontend portals that consumed those services; High-volume environment coordinating sensitive data between major health insurance providers;', 'left')}
                           </Row>
                           {getTechnologiesUsed('Java, Oracle, JavaScript, Angular, React, jQuery, REST, HTML/CSS, Jenkins, Git', 'left')}
                        </div>
                        {getTrailSpacer('right')}
                        <div style={styles.jobCard}>
                           {getTimeframe('2015 - 2017', 'right')}
                           <Row style={{paddingTop: 8}}>
                              {getJobDescription('Maintaining a large, legacy, SaaS Applicant Tracking System, while converting its backend to a series of REST services', 'right')}
                              {getTitleAndEmployer('Senior Software Engineer', 'SilkRoad', 'right')}
                           </Row>
                           {getTechnologiesUsed('ColdFusion, C#, JavaScript, jQuery, REST, MS-SQL, HTML/CSS, Perforce', 'right')}
                        </div>
                        {getTrailSpacer('left')}
                        <div style={styles.jobCard}>
                           {getTimeframe('2012-2015', 'left')}
                           <Row style={{paddingTop: 8}}>
                              {getTitleAndEmployer('IT Manager', 'EverBank', 'left')}
                              {getJobDescription('Leading a team of developers initially focused on the implementation of a new content management system, and eventually tasked with supporting all functions on the public-facing website', 'left')}
                           </Row>
                           {getTechnologiesUsed('C#, MS-SQL, JavaScript, jQuery, Knockout, Siteforce, Node, HTML/CSS, TFS', 'left')}
                        </div>
                     </Column>
                  </Row>
               </div>
               <Footer/>
            </div>
         </CSSTransition>
      </>;
   };
   
   const getJobDescription = (description = '', direction = '') => {
      allow.aString(description, is.not.empty).oneOf(direction, directions);
      return <>
         <Column
            xs={8}
            style={{
               borderLeft: direction === 'left' ? '1px solid #cccccc' : css3.borderLeft.inherit,
               borderRight: direction === 'right' ? '1px solid #cccccc' : css3.borderRight.inherit,
               fontSize: '0.8em',
               paddingLeft: direction === 'left' ? 8 : 0,
               paddingRight: direction === 'right' ? 8 : 0,
               textAlign: direction,
            }}
         >
            {description}
         </Column>
      </>;
   };
   
   const getTechnologiesUsed = (technologies = '', direction = '') => {
      allow.aString(technologies, is.not.empty).oneOf(direction, directions);
      return <>
         <Row
            justify={'space-evenly'}
            style={{marginTop: 16}}
         >
            <Column xs={11}>
               <div style={{
                  fontWeight: css3.fontWeight._500,
                  marginBottom: 4,
                  textAlign: direction,
               }}>
                  Technologies Used:
               </div>
               <div style={{
                  border: '1px solid #cccccc',
                  borderRadius: 5,
                  fontSize: '0.9em',
                  padding: 8,
                  textAlign: direction,
               }}>
                  {technologies}
               </div>
            </Column>
         </Row>
      </>;
   };
   
   const getTimeframe = (timeframe = '', direction = '') => {
      allow.aString(timeframe, is.not.empty).oneOf(direction, directions);
      return <>
         <Row>
            <Column xs={12}>
               <h3 style={{
                  color: the.color.purple,
                  margin: 0,
                  textAlign: direction,
               }}>
                  {timeframe}
               </h3>
            </Column>
         </Row>
      </>;
   };
   
   const getTitleAndEmployer = (title = '', employer = '', direction = '') => {
      allow.aString(title, is.not.empty).aString(employer, is.not.empty).oneOf(direction, directions);
      return <>
         <Column
            xs={4}
            style={{
               paddingLeft: direction === 'right' ? 8 : css3.paddingLeft.inherit,
               paddingRight: direction === 'left' ? 8 : css3.paddingRight.inherit,
               textAlign: direction === 'left' ? css3.textAlign.right : css3.textAlign.left,
            }}
         >
            <div style={{textTransform: css3.textTransform.uppercase}}>
               {title}
            </div>
            <div style={{
               marginTop: isMobile ? 4 : 0,
               fontSize: '0.9em',
               fontStyle: css3.fontStyle.italic,
            }}>
               {employer}
            </div>
         </Column>
      </>;
   };
   
   const getTrailSpacer = (direction = '') => {
      allow.oneOf(direction, directions);
      return <>
         <Row justify={'space-evenly'}>
            <Column xs={11}>
               <Row>
                  <Column
                     xs={direction === 'left' ? 2 : 10}
                     style={{
                        borderRight: '2px solid #551a8b',
                        minHeight: 48,
                     }}
                  />
               </Row>
            </Column>
         </Row>
      </>;
   };
   
   return <>
      <Route
         children={({match}) => getCssTransition(match)}
         exact={true}
         path={'/resume'}
      />
   </>;
};
