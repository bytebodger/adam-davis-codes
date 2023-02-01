import { memo, useCallback, useMemo } from 'react';
import { Route } from 'react-router-dom';
import { Row } from '@toolz/material-ui/dist/Row';
import { Column } from '@toolz/material-ui/dist/Column';
import { css3 } from '@toolz/css3/src/css3';
import { Divider } from '@material-ui/core';
import { jobs } from '../../common/arrays/jobs';
import { useViewport } from '@toolz/use-viewport';
import { materialUiBreakpoints } from '../../common/arrays/materialUiBreakpoints';
import { education } from '../../common/arrays/education';

export const PrintResume = memo(() => {
   const viewport = useViewport(materialUiBreakpoints);

   const style = useMemo(() => {
      const isMobile = ['xs', 'sm'].includes(viewport.size);
      return {
         div1: {
            fontSize: '0.7em',
            paddingBottom: 16,
            textAlign: css3.textAlign.right,
         },
         div2: {
            fontSize: '0.7em',
            textAlign: css3.textAlign.right,
         },
         div3: {
            fontSize: '0.9em',
            marginBottom: 24,
         },
         div4: {
            fontSize: '0.9em',
            marginTop: 24,
         },
         educationCard: {
            div: {
               fontSize: '0.9em',
               fontStyle: css3.fontStyle.italic,
            },
         },
         fontSize0_8Or0_9em: {
            fontSize: isMobile ? '0.8em' : '0.9em',
         },
         fontSize0_8em: {
            fontSize: '0.8em',
         },
         fontSize0_9em: {
            fontSize: '0.9em',
         },
         fontWeightBold: {
            fontWeight: css3.fontWeight.bold,
         },
         jobCards: {
            div1: {
               fontSize: '0.8em',
               marginTop: 8,
            },
         },
         marginBottom8: {
            marginBottom: 8,
         },
         marginBottom16: {
            marginBottom: 16,
         },
         marginTop16: {
            marginTop: 16,
         },
         padding8: {
            padding: 8,
         },
         span: {
            fontSize: '0.8em',
            fontStyle: css3.fontStyle.italic,
         },
         textAlignRight: {
            textAlign: css3.textAlign.right,
         },
      };
   }, [viewport.size]);

   const getEducationCards = useCallback(() => {
      return education.map((card, index) => {
         return (
            <div
               key={'education-' + index}
               style={style.marginBottom16}
            >
               <Row justify={'space-evenly'}>
                  <Column xs={6} sm={5} md={4} lg={3} xl={2}>
                     <div style={style.fontWeightBold}>
                        {card.employer}
                     </div>
                     <div style={style.educationCard.div}>
                        {card.title}
                     </div>
                     <div style={style.fontSize0_9em}>
                        {card.timeframe}
                     </div>
                  </Column>
                  <Column xs={6} sm={7} md={8} lg={9} xl={10}>
                     <div style={style.fontSize0_8Or0_9em}>
                        {card.description}
                     </div>
                  </Column>
               </Row>
            </div>
         );
      });
   }, [style]);

   const getJobCards = useCallback(() => {
      return jobs.map((job, index) => {
         let divider = null;
         if (index < jobs.length - 1)
            divider = <>
               <Row justify={'space-evenly'}>
                  <Column xs={6} sm={7} md={8} lg={9} xl={10}>
                     <Divider style={style.marginTop16}/>
                  </Column>
               </Row>
            </>;
         let technologies = null;
         if (job.technologies !== '')
            technologies = <>
               <Row justify={'space-evenly'}>
                  <Column xs={12}>
                     <div style={style.jobCards.div1}>
                        Technologies used:
                     </div>
                     <div style={style.fontSize0_8em}>
                        {job.technologies}
                     </div>
                  </Column>
               </Row>
            </>;
         return (
            <div
               key={'job-' + index}
               style={style.marginBottom16}
            >
               <Row justify={'space-evenly'}>
                  <Column xs={6} sm={5} md={4} lg={3} xl={2}>
                     <div style={style.fontWeightBold}>
                        {job.employer}
                     </div>
                     <div style={style.educationCard.div}>
                        {job.title}
                     </div>
                     <div style={style.fontSize0_9em}>
                        {job.timeframe}
                     </div>
                  </Column>
                  <Column xs={6} sm={7} md={8} lg={9} xl={10}>
                     <div style={style.fontSize0_8Or0_9em}>
                        {job.description}
                     </div>
                  </Column>
               </Row>
               {technologies}
               {divider}
            </div>
         );
      });
   }, [style]);

   return <>
      <Route
         exact={true}
         path={'/print-resume'}
      >
         <Row justify={'space-evenly'}>
            <Column
               xs={12} sm={11} md={10} lg={9} xl={8}
               style={style.padding8}
            >
               <div style={style.textAlignRight}>
                  ADAM NATHANIEL DAVIS
               </div>
               <div style={style.div1}>
                  Experienced Software Professional
               </div>
               <Divider/>
               <div style={style.div2}>
                  2512 Dellwood Avenue, Jacksonville, Florida 32204
                  <br/>
                  904-434-9210 / me@adamdavis{'\u2024'}codes
                  <br/>
                  https://adamdavis.codes
               </div>
               <div style={style.div3}>
                  <div style={style.marginBottom8}>
                     EXPERIENCE: <span style={style.span}>a quarter century of industry expertise</span>
                  </div>
                  {getJobCards()}
               </div>
               <Divider/>
               <div style={style.div4}>
                  <div style={style.marginBottom8}>
                     EDUCATION:
                  </div>
                  {getEducationCards()}
               </div>
            </Column>
         </Row>
      </Route>
   </>;
});
