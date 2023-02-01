import { Route } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { useRef, memo, useMemo, useCallback } from 'react';
import '../../common/css/fade.css';
import { css3 } from '@toolz/css3/src/css3';
import { Footer } from '../../Footer';
import { logGooglePageHit } from '../../common/functions/logGooglePageHit';
import { the } from '../../common/objects/the';
import { getResponsiveSpacing } from '../../common/functions/getResponsiveSpacing';
import { useViewport } from '@toolz/use-viewport';
import { Column } from '@toolz/material-ui/dist/Column';
import { Row } from '@toolz/material-ui/dist/Row';
import adamDavisLinkDesktop from '../../common/images/adam-davis-link-desktop.jpg';
import adamDavisLinkMobile from '../../common/images/adam-davis-link-mobile.jpg';
import blobLifeDesktop from '../../common/images/bloblife-desktop.jpg';
import blobLifeMobile from '../../common/images/bloblife-mobile.jpg';
import exciliorDesktop from '../../common/images/excilior-desktop.jpg';
import exciliorMobile from '../../common/images/excilior-mobile.jpg';
import hegemonyDesktop from '../../common/images/hegemony-international-desktop.jpg';
import hegemonyMobile from '../../common/images/hegemony-internation-mobile.jpg';
import npxDesktop from '../../common/images/npx-desktop.jpg';
import npxMobile from '../../common/images/npx-mobile.jpg';
import { allow } from '@toolz/allow-react';
import { is } from '../../common/objects/is';
import { Hidden } from '@material-ui/core';
import { materialUiBreakpoints } from '../../common/arrays/materialUiBreakpoints';
import { Header } from '../../Header';

export const Interests = memo(() => {
   const currentOffset = useRef('right');
   const nodeRef = useRef(null);
   const viewport = useViewport(materialUiBreakpoints);

   const style = useMemo(() => {
      return {
         card: {
            column1: {
               display: css3.dislay.flex,
               flexDirection: css3.flexDirection.column,
               flexGrow: 1,
               minHeight: 0,
            },
            column2: {
               backgroundColor: the.color.white,
               height: 16,
            },
            column3: {
               height: 200,
               overflow: css3.overflow.hidden,
            },
            column4: {
               display: css3.dislay.flex,
               flexDirection: css3.flexDirection.column,
               flexGrow: 1,
               minHeight: 0,
               width: '58.33%',
            },
            div1: {
               backgroundColor: the.color.beige,
               display: css3.dislay.inlineBlock,
               height: 27,
               width: 10,
            },
            div2: {
               flexGrow: 1,
               minHeight: 0,
               overflowY: css3.overflowY.auto,
               paddingLeft: 8,
               paddingRight: 8,
            },
            div3: {
               backgroundColor: the.color.beige,
               display: css3.dislay.inlineBlock,
               height: 32,
               width: 10,
            },
            div4: {
               flexGrow: 1,
               minHeight: 0,
               overflowY: css3.overflowY.auto,
               paddingBottom: 8,
               paddingLeft: 8,
               paddingRight: 8,
            },
            h31: {
               color: the.color.purple,
               display: css3.dislay.inlineBlock,
               fontSize: '0.9em',
               marginLeft: 8,
               marginTop: 8,
            },
            h32: {
               color: the.color.purple,
               display: css3.dislay.inlineBlock,
               marginLeft: 8,
               marginTop: 8,
            },
            img1: {
               height: css3.height.initial,
               width: '100%',
            },
            img2: {
               height: 400,
               width: css3.width.initial,
            },
            outerDivLeft: {
               backgroundColor: the.color.white,
               boxShadow: 'rgba(0, 0, 0, 0.25) -11.31px 11.31px 17px 0px',
               fontSize: '1.2em',
               left: getResponsiveSpacing(viewport.size, 12, Number.MAX_SAFE_INTEGER, 0, -12),
               position: css3.position.relative,
            },
            outerDivRight: {
               backgroundColor: the.color.white,
               boxShadow: 'rgba(0, 0, 0, 0.25) -11.31px 11.31px 17px 0px',
               fontSize: '1.2em',
               position: css3.position.relative,
               right: getResponsiveSpacing(viewport.size, 12, Number.MAX_SAFE_INTEGER, 0, -12),
            },
            row1: {
               display: css3.dislay.flex,
               flexDirection: css3.flexDirection.column,
               height: 260,
            },
            row2: {
               display: css3.dislay.flex,
               flexDirection: css3.flexDirection.column,
               height: 400,
            },
         },
         height48: {
            height: 48,
         },
         marginTop0: {
            marginTop: 0,
         },
         overflowHidden: {
            overflow: css3.overflow.hidden,
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

   const getProjectCard = useCallback((title = '', body = <></>, desktopImage = '', mobileImage = '', imageAltText = '', url = '') => {
      allow.aString(title, is.not.empty).aReactElement(body).aString(desktopImage, is.not.empty).aString(mobileImage, is.not.empty).aString(imageAltText, is.not.empty).aString(url, is.not.empty);
      currentOffset.current = currentOffset.current === 'right' ? 'left' : 'right';
      const outerDivStyle = currentOffset.current === 'left' ? style.card.outerDivRight : style.card.outerDivLeft;
      return <>
         <div style={outerDivStyle}>
            <Hidden mdUp={true}>
               <Row style={style.card.row1}>
                  <Column
                     xs={12}
                     style={style.card.column1}
                  >
                     <div>
                        <div style={style.card.div1}/>
                        <h3 style={style.card.h31}>
                           {title}
                        </h3>
                     </div>
                     <div style={style.card.div2}>
                        {body}
                     </div>
                  </Column>
               </Row>
               <Row>
                  <Column
                     xs={12}
                     style={style.card.column2}
                  />
               </Row>
               <Row>
                  <Column
                     xs={12}
                     style={style.card.column3}
                  >
                     <a
                        href={url}
                        rel={'noopener noreferrer'}
                        target={'_blank'}
                     >
                        <img
                           alt={imageAltText}
                           src={mobileImage}
                           style={style.card.img1}
                        />
                     </a>
                  </Column>
               </Row>
            </Hidden>
            <Hidden smDown={true}>
               <Row style={style.card.row2}>
                  <Column
                     xs={7}
                     style={style.card.column4}
                  >
                     <div>
                        <div style={style.card.div3}/>
                        <h3 style={style.card.h32}>
                           {title}
                        </h3>
                     </div>
                     <div style={style.card.div4}>
                        {body}
                     </div>
                  </Column>
                  <Column xs={5}>
                     <div style={style.overflowHidden}>
                        <a
                           href={url}
                           rel={'noopener noreferrer'}
                           target={'_blank'}
                        >
                           <img
                              alt={imageAltText}
                              src={desktopImage}
                              style={style.card.img2}
                           />
                        </a>
                     </div>
                  </Column>
               </Row>
            </Hidden>
         </div>
      </>;
   }, [style]);

   const getCssTransition = useCallback(match => {
      if (match !== null)
         logGooglePageHit('interests');
      return <>
         <CSSTransition
            classNames={'fade'}
            in={match !== null}
            nodeRef={nodeRef}
            timeout={2000}
            unmountOnExit={true}
         >
            <div
               key={'interests'}
               ref={nodeRef}
               style={style.transition.div1}
            >
               <Header/>
               <div style={style.transition.div2}>
                  <Row justify={'space-evenly'}>
                     <Column
                        xs={12} sm={10} md={8} lg={7} xl={6}
                        style={style.transition.column}
                     >
                        <h1 style={style.marginTop0}>Interests</h1>
                        {getProjectCard(
                           'Blob Life',
                           <>
                              I paint (and make videos about the process)!<br/><br/>And... I babble about life, and YouTube-ing, and whatever else comes to my mind. I'm not nearly as soothing as Bob Ross. And I'm not half as talented as your
                              friendly neighborhood busker. But I've never allowed a little problem like "lack of talent" to get in my way before.
                           </>,
                           blobLifeDesktop,
                           blobLifeMobile,
                           'The Blob Life YouTube channel, showcasing the painting techniques of Adam Nathaniel Davis',
                           'https://www.youtube.com/channel/UCHNDtVFC4WQTcp_awD9c1Ag',
                        )}
                        <div style={style.height48}/>
                        {getProjectCard(
                           'Excilior',
                           <>
                              I write sci-fi!<br/><br/>A half-million words of pure worldbuilding. Maps. Articles. Short stories. A (growing) novel. History. Races. This is my literary worldbuilding project.
                           </>,
                           exciliorDesktop,
                           exciliorMobile,
                           'The sci-fi world of Adam Nathaniel Davis',
                           'https://www.worldanvil.com/w/excilior',
                        )}
                        <div style={style.height48}/>
                        {getProjectCard(
                           'Hegemony International',
                           <>
                              And I'm writing <i>more</i>!<br/><br/>75,000 words (and counting) of worldbuilding serial fiction, including a growing list of chapters with a sci-fi / dystopian / absurdist flavor. This is my "next big thing".
                           </>,
                           hegemonyDesktop,
                           hegemonyMobile,
                           'A growing web-serial work of fiction by Adam Nathaniel Davis',
                           'https://www.worldanvil.com/w/hegemony-international',
                        )}
                        <div style={style.height48}/>
                        {getProjectCard(
                           'New Play Exchange',
                           <>
                              I'm a playwright!<br/><br/>I may not quite be at the level of Tennessee Williams - but I'm working on it. I have a growing list of scripts that have been produced by local theatre groups.
                           </>,
                           npxDesktop,
                           npxMobile,
                           'The plays written by Adam Nathaniel Davis',
                           'https://newplayexchange.org/users/7276/adam-nathaniel-davis',
                        )}
                        <div style={style.height48}/>
                        {getProjectCard(
                           'ALL The Links!',
                           <>
                              Want to see a complete (and growing) list of everything related to me? Check out my link farm.
                           </>,
                           adamDavisLinkDesktop,
                           adamDavisLinkMobile,
                           'Everything you ever wanted to know about Adam Nathaniel Davis',
                           'https://www.adamdavis.link/',
                        )}
                     </Column>
                  </Row>
               </div>
               <Footer/>
            </div>
         </CSSTransition>
      </>;
   }, [getProjectCard, style]);

   const triggerTransition = useCallback(({match}) => getCssTransition(match), [getCssTransition]);

   return <>
      <Route
         children={triggerTransition}
         exact={true}
         path={'/interests'}
      />
   </>;
});
