import { Route } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import React, { useRef } from 'react';
import '../../common/css/fade.css';
import { css3 } from '@toolz/css3/src/css3';
import { useViewport } from '@toolz/use-viewport';
import codeImage from '../../common/images/code.png';
import { Footer } from '../../Footer';
import { Row } from '@toolz/material-ui/dist/Row';
import { Column } from '@toolz/material-ui/dist/Column';
import { materialUiBreakpoints } from '../../common/arrays/materialUiBreakpoints';
import { the } from '../../common/objects/the';
import { Hidden } from '@material-ui/core';
import adam from '../../common/images/adam.jpg';
import ReactRotatingText from 'react-rotating-text';
import { titles } from '../../common/arrays/titles';
import { FollowIcons } from '../../common/components/FollowIcons';

export const Home = () => {
   const nodeRef = useRef(null);
   const viewport = useViewport(materialUiBreakpoints);
   const isMobile = ['xs', 'sm'].includes(viewport.size);
   
   const getBackgroundImageWidth = () => {
      const half = Math.round(viewport.width * 0.4);
      return half > 400 ? half : 400;
   };
   
   const getCssTransition = match => {
      return <>
         <CSSTransition
            classNames={'fade'}
            in={match !== null}
            nodeRef={nodeRef}
            timeout={2000}
            unmountOnExit={true}
         >
            <div
               key={'home'}
               ref={nodeRef}
               style={{
                  position: css3.position.absolute,
                  width: '100%',
               }}
            >
               <div style={{
                  position: css3.position.absolute,
                  width: '100%',
               }}>
                  <Hidden smDown={true}>
                     <Row style={{paddingTop: 150}}>
                        <Column md={2} lg={3} xl={4}/>
                        <Column xs={6} md={4} lg={3} xl={2}>
                           <div style={{boxShadow: 'rgba(0, 0, 0, 0.50) -11.31px 11.31px 17px 0px'}}>
                              <div style={{
                                 backgroundColor: the.color.sand,
                                 height: 475,
                                 textAlign: css3.textAlign.center,
                              }}>
                                 <img
                                    alt={'Adam Nathaniel Davis'}
                                    src={adam}
                                    style={{
                                       borderRadius: 102,
                                       height: 204,
                                       marginTop: 40,
                                       width: 204,
                                    }}
                                 />
                                 <div style={{
                                    fontSize: '1.4em',
                                    fontWeight: css3.fontWeight._600,
                                    marginTop: 40,
                                 }}>
                                    Adam Nathaniel Davis
                                 </div>
                                 <div style={{
                                    backgroundColor: the.color.purple,
                                    height: 2,
                                    marginBottom: 40,
                                    marginLeft: 'auto',
                                    marginRight: 'auto',
                                    marginTop: 40,
                                    width: '25%',
                                 }}/>
                                 <div style={{fontSize: '1.2em'}}>
                                    <ReactRotatingText items={titles}/>
                                 </div>
                              </div>
                              <div style={{
                                 backgroundColor: the.color.white,
                                 height: 50,
                                 textAlign: css3.textAlign.center,
                              }}>
                                 <div style={{paddingTop: 12}}>
                                    <FollowIcons dimension={25}/>
                                 </div>
                              </div>
                           </div>
                        </Column>
                        <Column xs={6} md={4} lg={3} xl={2}>desc</Column>
                        <Column md={2} lg={3} xl={4}/>
                     </Row>
                  </Hidden>
               </div>
               <div style={{
                  backgroundImage: `url(${codeImage})`,
                  minHeight: isMobile ? 600 : 850,
                  width: getBackgroundImageWidth(),
               }}/>
               <Footer/>
            </div>
         </CSSTransition>
      </>;
   };
   
   return <>
      <Route
         children={({match}) => getCssTransition(match)}
         exact={true}
         path={'/home'}
      />
   </>;
};
