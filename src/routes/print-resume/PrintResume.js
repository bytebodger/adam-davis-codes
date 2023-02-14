import { memo, useCallback, useMemo } from 'react';
import { Route } from 'react-router-dom';
import { Row } from '@toolz/material-ui/dist/Row';
import { Column } from '@toolz/material-ui/dist/Column';
import { Divider } from '@material-ui/core';
import { jobs } from '../../common/arrays/jobs';
import { useViewport } from '@toolz/use-viewport';
import { materialUiBreakpoints } from '../../common/arrays/materialUiBreakpoints';
import { education } from '../../common/arrays/education';
import '../../common/css/baseProperties.css';
import './css/printResume.css';

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
               <Row justify={'space-evenly'}>
                  <Column xs={6} sm={5} md={4} lg={3} xl={2}>
                     <div className={'fontWeightBold'}>
                        {card.employer}
                     </div>
                     <div className={'title'}>
                        {card.title}
                     </div>
                     <div className={'fontSize_0_9em'}>
                        {card.timeframe}
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

   const getJobCards = useCallback(() => {
      return jobs.map((job, index) => {
         let divider = null;
         if (index < jobs.length - 1)
            divider = <>
               <Row justify={'space-evenly'}>
                  <Column xs={6} sm={7} md={8} lg={9} xl={10}>
                     <Divider/>
                  </Column>
               </Row>
            </>;
         let technologies = null;
         if (job.technologies !== '')
            technologies = <>
               <Row className={'marginBottom_16'} justify={'space-evenly'}>
                  <Column xs={12}>
                     <div className={'technologiesUsed'}>
                        Technologies used:
                     </div>
                     <div className={'fontSize_0_8em'}>
                        {job.technologies}
                     </div>
                  </Column>
               </Row>
            </>;
         return (
            <div
               className={'marginBottom_16'}
               key={'job-' + index}
            >
               <Row justify={'space-evenly'}>
                  <Column xs={6} sm={5} md={4} lg={3} xl={2}>
                     <div className={'fontWeightBold'}>
                        {job.employer}
                     </div>
                     <div className={'title'}>
                        {job.title}
                     </div>
                     <div className={'fontSize_0_9em'}>
                        {job.timeframe}
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
   }, [isMobile]);

   return <>
      <Route
         exact={true}
         path={'/print-resume'}
      >
         <Row justify={'space-evenly'}>
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
                     EXPERIENCE: <span>a quarter century of industry expertise</span>
                  </div>
                  {getJobCards()}
               </div>
               <Divider/>
               <div className={'sectionContainer'}>
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
