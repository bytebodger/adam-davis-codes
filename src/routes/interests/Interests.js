import { Route } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { useRef, memo, useCallback } from 'react';
import '../../common/css/fade.css';
import { Footer } from '../../common/components/Footer';
import { logGooglePageHit } from '../../common/functions/logGooglePageHit';
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
import { Header } from '../../common/components/Header';
import './css/interests.css';
import '../../common/css/baseProperties.css';

export const Interests = memo(() => {
   const currentOffset = useRef('right');
   const nodeRef = useRef(null);
   const viewport = useViewport(materialUiBreakpoints);

   const getProjectCard = useCallback((title = '', body = <></>, desktopImage = '', mobileImage = '', imageAltText = '', url = '') => {
      allow.aString(title, is.not.empty).aReactElement(body).aString(desktopImage, is.not.empty).aString(mobileImage, is.not.empty).aString(imageAltText, is.not.empty).aString(url, is.not.empty);
      currentOffset.current = currentOffset.current === 'right' ? 'left' : 'right';
      const responsiveSpacing = getResponsiveSpacing(viewport.size, 12, Number.MAX_SAFE_INTEGER, 0, -12);
      return <>
         <div
            className={'cardDiv'}
            style={{
               left: currentOffset.current === 'left' ? 'initial' : responsiveSpacing,
               right: currentOffset.current === 'left' ? responsiveSpacing : 'initial',
            }}
         >
            <Hidden mdUp={true}>
               <Row className={'mobileCardRow'}>
                  <Column
                     xs={12}
                     className={'mobileCardColumn'}
                  >
                     <div>
                        <div className={'cardTitle'}/>
                        <h3 className={'mobileCardTitle'}>
                           {title}
                        </h3>
                     </div>
                     <div className={'cardBody'}>
                        {body}
                     </div>
                  </Column>
               </Row>
               <Row>
                  <Column
                     xs={12}
                     className={'mobileSpacerColumn'}
                  />
               </Row>
               <Row>
                  <Column
                     xs={12}
                     className={'mobileCardImageColumn'}
                  >
                     <a
                        href={url}
                        rel={'noopener noreferrer'}
                        target={'_blank'}
                     >
                        <img
                           alt={imageAltText}
                           className={'mobileCardImage'}
                           src={mobileImage}
                        />
                     </a>
                  </Column>
               </Row>
            </Hidden>
            <Hidden smDown={true}>
               <Row className={'desktopCardRow'}>
                  <Column
                     xs={7}
                     className={'desktopCardColumn'}
                  >
                     <div>
                        <div className={'cardSpacer'}/>
                        <h3 className={'desktopCardTitle'}>
                           {title}
                        </h3>
                     </div>
                     <div className={'desktopCardBody'}>
                        {body}
                     </div>
                  </Column>
                  <Column xs={5}>
                     <div className={'overflowHidden'}>
                        <a
                           href={url}
                           rel={'noopener noreferrer'}
                           target={'_blank'}
                        >
                           <img
                              alt={imageAltText}
                              className={'desktopCardImage'}
                              src={desktopImage}
                           />
                        </a>
                     </div>
                  </Column>
               </Row>
            </Hidden>
         </div>
      </>;
   }, [viewport]);

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
               className={'outerContainerDiv'}
               key={'interests'}
               ref={nodeRef}
            >
               <Header/>
               <div
                  className={'backgroundColorSand'}
                  style={{
                     paddingBottom: getResponsiveSpacing(viewport.size, 8, 48),
                     paddingTop: getResponsiveSpacing(viewport.size, 8, 48),
                  }}
               >
                  <Row justify={'space-evenly'}>
                     <Column
                        className={'bodyColumn'}
                        xs={12} sm={10} md={8} lg={7} xl={6}
                     >
                        <h1 className={'marginTop_0'}>Interests</h1>
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
                        <div className={'height_48'}/>
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
                        <div className={'height_48'}/>
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
                        <div className={'height_48'}/>
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
                        <div className={'height_48'}/>
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
   }, [getProjectCard, viewport]);

   const triggerTransition = useCallback(({match}) => getCssTransition(match), [getCssTransition]);

   return <>
      <Route
         children={triggerTransition}
         exact={true}
         path={'/interests'}
      />
   </>;
});
