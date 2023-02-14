import { Route, Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import React, { useRef, memo, useMemo, useCallback } from 'react';
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
import { logGooglePageHit } from '../../common/functions/logGooglePageHit';
import { Header } from '../../Header';

export const Home = memo(() => {
   const history = useHistory();
   const nodeRef = useRef(null);
   const viewport = useViewport(materialUiBreakpoints);

   const style = useMemo(() => {
      const isMobile = ['xs', 'sm'].includes(viewport.size);

      const getBackgroundImageWidth = () => {
         if (isMobile)
            return '100%';
         const half = Math.round(viewport.width * 0.4);
         return half > 400 ? half : 400;
      };

      return {
         mainText: {
            div2: {
               marginTop: 16,
               textAlign: css3.textAlign.justify,
            },
            div3: {
               marginBottom: 16,
               marginTop: 16,
               textAlign: css3.textAlign.justify,
            },
         },
         transition: {
            column3: {
               height: 525,
               overflowY: css3.overflowY.auto,
               paddingLeft: getResponsiveSpacing(viewport.size, 8, 48),
               paddingRight: getResponsiveSpacing(viewport.size, 8, 48),
            },
            div1: {
               boxShadow: 'rgba(0, 0, 0, 0.50) -11.31px 11.31px 17px 0px',
            },
            div2: {
               backgroundColor: the.color.sand,
               height: 355,
               textAlign: css3.textAlign.center,
            },
            div3: {
               fontSize: '1.4em',
               fontWeight: css3.fontWeight._600,
               marginTop: 20,
            },
            div4: {
               backgroundColor: the.color.purple,
               height: 2,
               marginBottom: 20,
               marginLeft: css3.marginLeft.auto,
               marginRight: css3.marginRight.auto,
               marginTop: 20,
               width: '25%',
            },
            div6: {
               backgroundColor: the.color.white,
               boxShadow: 'rgba(0, 0, 0, 0.50) -11.31px 11.31px 17px 0px',
               height: 40,
               marginTop: 40,
            },
            div8: {
               backgroundColor: 'rgba(255, 255, 255, 0.8)',
               padding: 16,
            },
            div10: {
               backgroundColor: the.color.sand,
               height: 475,
               textAlign: css3.textAlign.center,
            },
            div11: {
               fontSize: '1.4em',
               fontWeight: css3.fontWeight._600,
               marginTop: 40,
            },
            div12: {
               backgroundColor: the.color.purple,
               height: 2,
               marginBottom: 40,
               marginLeft: css3.marginLeft.auto,
               marginRight: css3.marginRight.auto,
               marginTop: 40,
               width: '25%',
            },
            div14: {
               backgroundColor: the.color.white,
               height: 50,
               textAlign: css3.textAlign.center,
            },
            imageDiv: {
               backgroundImage: `url(${codeImage})`,
               minHeight: isMobile ? 1250 : 850,
               width: getBackgroundImageWidth(),
            },
            img1: {
               borderRadius: 60,
               height: 120,
               marginTop: 20,
               width: 120,
            },
            img2: {
               borderRadius: 102,
               height: 204,
               marginTop: 40,
               width: 204,
            },
         },
      };
   }, [viewport]);

   const getMainText = useCallback(() => {
      return <>
         <div className={'textAlignJustify'}>
            I wrote my first program in 1984, when I was 11 years old, in BASIC, on a Coleco Adam home computer that had... a <i>tape drive</i>. I've travelled through PHP, ColdFusion,
            SQL, Java, and C#. For the last decade or so, I've been been working my way through the many regions of JavaScript. I was heavily focused first on jQuery, then Angular, and
            now React.
         </div>
         <div style={style.mainText.div2}>
            I am a <b>remote</b> worker. I'm more than happy to travel. And I'm quite personable in an office setting. But I'm a coder, and there's nothing in your office
            that's going to make me a more <i>efficient</i> coder. I don't need a breakroom with free snacks. I don't need impromptu "breakout sessions". I don't need a ping-pong table. I
            need to concentrate - on many thousands of lines of code.
         </div>
         <div style={style.mainText.div3}>
            If you'd like <i>evidence</i> of what I can do, there's a good bit of that already online. You may want to browse over my <Link to={'/resume'}>Resume</Link>. But under{` `}
            <Link to={'/projects'}>Projects</Link> you'll find all of my{` `}
            <a
               href={'https://github.com/bytebodger'}
               rel={'noreferrer'}
               target={'_blank'}
            >
               GitHub repos
            </a>{` `}
            (including the React code{` `}
            <a
               href={'https://github.com/bytebodger/adam-davis-codes'}
               rel={'noreferrer'}
               target={'_blank'}
            >
               for <i>this</i> site
            </a>
            ), and all of my{` `}
            <a
               href={'https://www.npmjs.com/search?q=%40toolz'}
               rel={'noreferrer'}
               target={'_blank'}
            >
               NPM packages
            </a>,{` `}
            and all of my{` `}
            <a
               href={'https://dev.to/bytebodger'}
               rel={'noreferrer'}
               target={'_blank'}
            >
               Dev.to articles
            </a>
            . You'll probably learn more about me in those locations than you will in any traditional job interview.
         </div>
      </>;
   }, [style]);

   const goToResume = useCallback(() => history.push('/resume'), [history]);

   const goToProjects = useCallback(() => history.push('/projects'), [history]);

   const getCssTransition = useCallback(match => {
      if (match !== null)
         logGooglePageHit('home');
      return <>
         <CSSTransition
            classNames={'fade'}
            in={match !== null}
            nodeRef={nodeRef}
            timeout={2000}
            unmountOnExit={true}
         >
            <div
               className={'positionAbsolute width_100_percent'}
               key={'home'}
               ref={nodeRef}
            >
               <Header/>
               <div className={'positionAbsolute width_100_percent'}>
                  <Hidden mdUp={true}>
                     <Row>
                        <Column
                           xs={12}
                           className={'padding_16'}
                        >
                           <div style={style.transition.div1}>
                              <div style={style.transition.div2}>
                                 <img
                                    alt={'Adam Nathaniel Davis'}
                                    src={adam}
                                    style={style.transition.img1}
                                 />
                                 <div style={style.transition.div3}>
                                    Adam Nathaniel Davis
                                 </div>
                                 <div style={style.transition.div4}/>
                                 <div className={'marginTop_30'}>
                                    <Button onClick={goToResume}>
                                       Resume
                                    </Button>
                                    <Button
                                       className={'marginLeft_20'}
                                       onClick={goToProjects}
                                    >
                                       Projects
                                    </Button>
                                 </div>
                                 <div style={style.transition.div6}>
                                    <div className={'paddingTop_7'}>
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
                           className={'padding_0_16_16_16'}
                        >
                           <div style={style.transition.div8}>
                              <h1 className={'marginTop_0'}>A Coding Life</h1>
                              {getMainText()}
                           </div>
                        </Column>
                     </Row>
                     <Footer/>
                  </Hidden>
                  <Hidden smDown={true}>
                     <Row className={'paddingTop_150'}>
                        <Column md={2} lg={3} xl={4}/>
                        <Column xs={6} md={4} lg={3} xl={2}>
                           <div style={style.transition.div1}>
                              <div style={style.transition.div10}>
                                 <img
                                    alt={'Adam Nathaniel Davis'}
                                    src={adam}
                                    style={style.transition.img2}
                                 />
                                 <div style={style.transition.div11}>
                                    Adam Nathaniel Davis
                                 </div>
                                 <div style={style.transition.div12}/>
                                 <div className={'fontSize_1_2em'}>
                                    <ReactRotatingText items={titles}/>
                                 </div>
                              </div>
                              <div style={style.transition.div14}>
                                 <div className={'paddingTop_12'}>
                                    <FollowIcons dimension={25}/>
                                 </div>
                              </div>
                           </div>
                        </Column>
                        <Column
                           md={5} lg={4} xl={3}
                           style={style.transition.column3}
                        >
                           <h1>A Coding Life</h1>
                           {getMainText()}
                        </Column>
                        <Column md={1} lg={2} xl={3}/>
                     </Row>
                  </Hidden>
               </div>
               <Hidden mdUp={true}>
                  <div className={'height_250'}/>
               </Hidden>
               <div style={style.transition.imageDiv}/>
               <Hidden smDown={true}>
                  <Footer/>
               </Hidden>
            </div>
         </CSSTransition>
      </>;
   }, [getMainText, goToProjects, goToResume, style]);

   const triggerTransition = useCallback(({match}) => getCssTransition(match), [getCssTransition]);

   return <>
      <Route
         children={triggerTransition}
         exact={true}
         path={'/home'}
      />
   </>;
});
