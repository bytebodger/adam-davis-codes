import { Route, Link } from 'react-router-dom';
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
import { getResponsiveSpacing } from '../../common/functions/getResponsiveSpacing';
import { Button } from '../../common/components/Button';
import { useHistory } from 'react-router';

export const Home = () => {
   const history = useHistory();
   const nodeRef = useRef(null);
   const viewport = useViewport(materialUiBreakpoints);
   const isMobile = ['xs', 'sm'].includes(viewport.size);
   
   const getBackgroundImageWidth = () => {
      if (isMobile)
         return '100%';
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
                  <Hidden mdUp={true}>
                     <Row>
                        <Column
                           xs={12}
                           style={{padding: 16}}
                        >
                           <div style={{boxShadow: 'rgba(0, 0, 0, 0.50) -11.31px 11.31px 17px 0px'}}>
                              <div style={{
                                 backgroundColor: the.color.sand,
                                 height: 355,
                                 textAlign: css3.textAlign.center,
                              }}>
                                 <img
                                    alt={'Adam Nathaniel Davis'}
                                    src={adam}
                                    style={{
                                       borderRadius: 60,
                                       height: 120,
                                       marginTop: 20,
                                       width: 120,
                                    }}
                                 />
                                 <div style={{
                                    fontSize: '1.4em',
                                    fontWeight: css3.fontWeight._600,
                                    marginTop: 20,
                                 }}>
                                    Adam Nathaniel Davis
                                 </div>
                                 <div style={{
                                    backgroundColor: the.color.purple,
                                    height: 2,
                                    marginBottom: 20,
                                    marginLeft: 'auto',
                                    marginRight: 'auto',
                                    marginTop: 20,
                                    width: '25%',
                                 }}/>
                                 <div style={{marginTop: 30}}>
                                    <Button onClick={() => history.push('/resume')}>
                                       Resume
                                    </Button>
                                    <Button
                                       onClick={() => history.push('/projects')}
                                       style={{marginLeft: 20}}
                                    >
                                       Projects
                                    </Button>
                                 </div>
                                 <div style={{
                                    backgroundColor: the.color.white,
                                    boxShadow: 'rgba(0, 0, 0, 0.50) -11.31px 11.31px 17px 0px',
                                    height: 40,
                                    marginTop: 40,
                                 }}>
                                    <div style={{paddingTop: 7}}>
                                       <FollowIcons dimension={25}/>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </Column>
                     </Row>
                     <Row>
                        <Column
                           xs={12}
                           style={{padding: '0px 16px 16px 16px'}}
                        >
                           <div style={{
                              backgroundColor: 'rgba(255, 255, 255, 0.8)',
                              padding: 16,
                           }}>
                              <h1 style={{marginTop: 0}}>Who Am I?</h1>
                              <div style={{textAlign: css3.textAlign.justify}}>
                                 I'm a lifelong coder. I wrote my first programs in 1985, in BASIC, on a Coleco Adam home computer... that had a <i>tape drive</i>. I've "evolved" through PHP, ColdFusion,
                                 SQL, Java, and C#. For the last decade or so, I've been been working my way through many "flavors" of JavaScript. I was heavily focused first on jQuery, then Angular, and
                                 now React.
                              </div>
                              <div style={{
                                 marginTop: 16,
                                 textAlign: css3.textAlign.justify,
                              }}>
                                 Please know that I'm a <b>remote</b> worker. I'm more than happy to travel. And I'm quite personable in an office setting. But I'm a coder, and there's nothing in your office
                                 that's going to make me a more <i>efficient</i> coder. I don't need a breakroom with free snacks. I don't need impromptu "breakout sessions". I don't need a ping-pong table. I
                                 need to concentrate - on many thousands of lines of code.
                              </div>
                              <div style={{
                                 marginBottom: 16,
                                 marginTop: 16,
                                 textAlign: css3.textAlign.justify,
                              }}>
                                 If you'd like <i>evidence</i> of what I can do, there's a good bit of that already online. You may want to browse over my <Link to={'/resume'}>Resume</Link>. But under{` `}
                                 <Link to={'/projects'}>Projects</Link> you'll find all of my{` `}
                                 <a href={'https://github.com/bytebodger'}>
                                    GitHub repos
                                 </a>{` `}
                                 (including the code for this site), and all of my{` `}
                                 <a href={'https://www.npmjs.com/search?q=%40toolz'}>
                                    NPM packages
                                 </a>{` `}
                                 and all of my{` `}
                                 <a href={'https://dev.to/bytebodger'}>
                                    Dev.to articles
                                 </a>
                                 . You'll
                                 find more about me in those locations than you will in any traditional job interview.
                              </div>
                           </div>
                        </Column>
                     </Row>
                     <div style={{backgroundColor: the.color.white}}>
                        <Footer/>
                     </div>
                  </Hidden>
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
                        <Column
                           md={5} lg={4} xl={3}
                           style={{
                              height: 525,
                              overflowY: css3.overflowY.auto,
                              paddingLeft: getResponsiveSpacing(viewport.size, 8, 48),
                              paddingRight: getResponsiveSpacing(viewport.size, 8, 48),
                           }}
                        >
                           <h1>Who Am I?</h1>
                           <div style={{textAlign: css3.textAlign.justify}}>
                              I'm a lifelong coder. I wrote my first programs in 1985, in BASIC, on a Coleco Adam home computer... that had a <i>tape drive</i>. I've "evolved" through PHP, ColdFusion,
                              SQL, Java, and C#. For the last decade or so, I've been been working my way through many "flavors" of JavaScript. I was heavily focused first on jQuery, then Angular, and
                              now React.
                           </div>
                           <div style={{
                              marginTop: 16,
                              textAlign: css3.textAlign.justify,
                           }}>
                              Please know that I'm a <b>remote</b> worker. I'm more than happy to travel. And I'm quite personable in an office setting. But I'm a coder, and there's nothing in your office
                              that's going to make me a more <i>efficient</i> coder. I don't need a breakroom with free snacks. I don't need impromptu "breakout sessions". I don't need a ping-pong table. I
                              need to concentrate - on many thousands of lines of code.
                           </div>
                           <div style={{
                              marginBottom: 16,
                              marginTop: 16,
                              textAlign: css3.textAlign.justify,
                           }}>
                              If you'd like <i>evidence</i> of what I can do, there's a good bit of that already online. You may want to browse over my <Link to={'/resume'}>Resume</Link>. But under{` `}
                              <Link to={'/projects'}>Projects</Link> you'll find all of my{` `}
                              <a href={'https://github.com/bytebodger'}>
                                 GitHub repos
                              </a>{` `}
                              (including the code for this site), and all of my{` `}
                              <a href={'https://www.npmjs.com/search?q=%40toolz'}>
                                 NPM packages
                              </a>{` `}
                              and all of my{` `}
                              <a href={'https://dev.to/bytebodger'}>
                                 Dev.to articles
                              </a>
                              . You'll
                              find more about me in those locations than you will in any traditional job interview.
                           </div>
                        </Column>
                        <Column md={1} lg={2} xl={3}/>
                     </Row>
                  </Hidden>
               </div>
               <Hidden mdUp={true}>
                  <div style={{height: 250}}/>
               </Hidden>
               <div style={{
                  backgroundImage: `url(${codeImage})`,
                  backgroundRepeat: css3.backgroundRepeat.noRepeat,
                  minHeight: isMobile ? 1050 : 850,
                  width: getBackgroundImageWidth(),
               }}/>
               <Hidden smDown={true}>
                  <Footer/>
               </Hidden>
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
