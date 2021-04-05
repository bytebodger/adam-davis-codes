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

export const Resume = () => {
   const nodeRef = useRef(null);
   const viewport = useViewport();
   const isMobile = ['xs', 'sm'].includes(viewport.size);
   
   const getCssTransition = match => {
      if (match !== null)
         logGooglePageHit('Resume');
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
                        <div style={{
                           backgroundColor: the.color.white,
                           borderRadius: 10,
                           boxShadow: 'rgba(0, 0, 0, 0.25) -11.31px 11.31px 17px 0px',
                           padding: 16,
                        }}>
                           <Row>
                              <Column xs={12}>
                                 <h3 style={{
                                    color: the.color.purple,
                                    margin: 0,
                                 }}>
                                    2020 - Present
                                 </h3>
                              </Column>
                           </Row>
                           <Row style={{paddingTop: 8}}>
                              <Column xs={4}>
                                 <div style={{textTransform: css3.textTransform.uppercase}}>
                                    Senior Software Engineer
                                 </div>
                                 <div style={{
                                    marginTop: isMobile ? 4 : 0,
                                    fontStyle: css3.fontStyle.italic,
                                 }}>
                                    SemanticBits
                                 </div>
                              </Column>
                              <Column
                                 xs={8}
                                 style={{
                                    borderLeft: '1px solid #cccccc',
                                    paddingLeft: 8,
                                 }}
                              >
                                 Technical lead on a team developing user interfaces for Medicare.gov and HealthCare.gov
                              </Column>
                           </Row>
                           <Row
                              justify={'space-evenly'}
                              style={{marginTop: 16}}
                           >
                              <Column xs={11}>
                                 <div style={{
                                    fontWeight: css3.fontWeight._500,
                                    marginBottom: 4,
                                 }}>
                                    Technologies Used:
                                 </div>
                                 <div style={{
                                    border: '1px solid #cccccc',
                                    borderRadius: 5,
                                    padding: 8,
                                 }}>
                                    JavaScript, React, Node, Express, REST
                                 </div>
                              </Column>
                           </Row>
                        </div>
                     </Column>
                  </Row>
               </div>
               <Footer/>
            </div>
         </CSSTransition>
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
