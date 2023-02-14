import { Route, Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import React, { useRef, memo, useMemo, useCallback } from 'react';
import '../../common/css/fade.css';
import { useViewport } from '@toolz/use-viewport';
import codeImage from '../../common/images/code.png';
import { Footer } from '../../common/components/Footer';
import { Row } from '@toolz/material-ui/dist/Row';
import { Column } from '@toolz/material-ui/dist/Column';
import { materialUiBreakpoints } from '../../common/arrays/materialUiBreakpoints';
import { Hidden } from '@material-ui/core';
import adam from '../../common/images/adam.jpg';
import ReactRotatingText from 'react-rotating-text';
import { titles } from '../../common/arrays/titles';
import { FollowIcons } from '../../common/components/FollowIcons';
import { getResponsiveSpacing } from '../../common/functions/getResponsiveSpacing';
import { Button } from '../../common/components/Button';
import { useHistory } from 'react-router';
import { logGooglePageHit } from '../../common/functions/logGooglePageHit';
import { Header } from '../../common/components/Header';
import './css/home.css';

export const Home = memo(() => {
   const history = useHistory();
   const nodeRef = useRef(null);
   const viewport = useViewport(materialUiBreakpoints);

   const isMobile = useMemo(() => {
      return ['xs', 'sm'].includes(viewport.size);
   }, [viewport]);

   const getMainText = useCallback(() => {
      return <>
         <div className={'textAlignJustify'}>
            I wrote my first program in 1984, when I was 11 years old, in BASIC, on a Coleco Adam home computer that had... a <i>tape drive</i>. I've travelled through PHP, ColdFusion,
            SQL, Java, and C#. For the last decade or so, I've been been working my way through the many regions of JavaScript. I was heavily focused first on jQuery, then Angular, and
            now React.
         </div>
         <div className={'mainTextDiv2'}>
            I am a <b>remote</b> worker. I'm more than happy to travel. And I'm quite personable in an office setting. But I'm a coder, and there's nothing in your office
            that's going to make me a more <i>efficient</i> coder. I don't need a breakroom with free snacks. I don't need impromptu "breakout sessions". I don't need a ping-pong table. I
            need to concentrate - on many thousands of lines of code.
         </div>
         <div className={'mainTextDiv3'}>
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
   }, []);

   const goToResume = useCallback(() => history.push('/resume'), [history]);

   const goToProjects = useCallback(() => history.push('/projects'), [history]);

   const getCssTransition = useCallback(match => {
      const getBackgroundImageWidth = () => {
         if (isMobile)
            return '100%';
         const half = Math.round(viewport.width * 0.4);
         return half > 400 ? half : 400;
      };

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
               className={'containerDivs'}
               key={'home'}
               ref={nodeRef}
            >
               <Header/>
               <div className={'containerDivs'}>
                  <Hidden mdUp={true}>
                     <Row>
                        <Column
                           xs={12}
                           className={'padding_16'}
                        >
                           <div className={'boxShadow'}>
                              <div className={'faceCard'}>
                                 <img
                                    alt={'Adam Nathaniel Davis'}
                                    className={'mobileImage'}
                                    src={adam}
                                 />
                                 <div className={'nameDiv'}>
                                    Adam Nathaniel Davis
                                 </div>
                                 <div className={'purpleDivider'}/>
                                 <div className={'marginTop_30'}>
                                    <Button
                                       onClick={goToResume}
                                    >
                                       <span className={'fontStyleNormal fontSize_1_2em'}>Resume</span>
                                    </Button>
                                    <Button
                                       className={'marginLeft_20'}
                                       onClick={goToProjects}
                                    >
                                       <span className={'fontStyleNormal fontSize_1_2em'}>Project</span>
                                    </Button>
                                 </div>
                                 <div className={'followIconsContainer'}>
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
                           <div className={'aCodingLifeContainer'}>
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
                           <div className={'boxShadow'}>
                              <div className={'desktopImageContainer'}>
                                 <img
                                    alt={'Adam Nathaniel Davis'}
                                    className={'desktopImage'}
                                    src={adam}
                                 />
                                 <div className={'desktopNameDiv'}>
                                    Adam Nathaniel Davis
                                 </div>
                                 <div className={'desktopPurpleDivider'}/>
                                 <div className={'fontSize_1_2em'}>
                                    <ReactRotatingText
                                       className={'fontStyleNormal'}
                                       items={titles}
                                    />
                                 </div>
                              </div>
                              <div className={'desktopFollowIconsContainer'}>
                                 <div className={'paddingTop_12'}>
                                    <FollowIcons dimension={25}/>
                                 </div>
                              </div>
                           </div>
                        </Column>
                        <Column
                           className={'aCodingLifeColumn'}
                           md={5} lg={4} xl={3}
                           style={{
                              paddingLeft: getResponsiveSpacing(viewport.size, 8, 48),
                              paddingRight: getResponsiveSpacing(viewport.size, 8, 48),
                           }}
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
               <div style={{
                  backgroundImage: `url(${codeImage})`,
                  minHeight: isMobile ? 1250 : 850,
                  width: getBackgroundImageWidth(),
               }}/>
               <Hidden smDown={true}>
                  <Footer/>
               </Hidden>
            </div>
         </CSSTransition>
      </>;
   }, [getMainText, goToProjects, goToResume, isMobile, viewport]);

   const triggerTransition = useCallback(({match}) => getCssTransition(match), [getCssTransition]);

   return <>
      <Route
         children={triggerTransition}
         exact={true}
         path={'/home'}
      />
   </>;
});
