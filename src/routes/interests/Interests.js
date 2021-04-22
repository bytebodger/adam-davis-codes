import { Route } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { useRef } from 'react';
import '../../common/css/fade.css';
import { css3 } from '@toolz/css3/src/css3';
import { Footer } from '../../Footer';
import { logGooglePageHit } from '../../common/functions/logGooglePageHit';
import { the } from '../../common/objects/the';
import { getResponsiveSpacing } from '../../common/functions/getResponsiveSpacing';
import { useViewport } from '@toolz/use-viewport';
import { Column } from '@toolz/material-ui/dist/Column';
import { Row } from '@toolz/material-ui/dist/Row';
import blobLifeDesktop from '../../common/images/bloblife-desktop.jpg';
import blobLifeMobile from '../../common/images/bloblife-mobile.jpg';
import writingVoyageDesktop from '../../common/images/writingvoyage-desktop.jpg';
import writingVoyageMobile from '../../common/images/writingvoyage-mobile.jpg';
import exciliorDesktop from '../../common/images/excilior-desktop.jpg';
import exciliorMobile from '../../common/images/excilior-mobile.jpg';
import npxDesktop from '../../common/images/npx-desktop.jpg';
import npxMobile from '../../common/images/npx-mobile.jpg';
import { allow } from '@toolz/allow-react';
import { is } from '../../common/objects/is';
import { Hidden } from '@material-ui/core';
import { materialUiBreakpoints } from '../../common/arrays/materialUiBreakpoints';

export const Interests = () => {
   const nodeRef = useRef(null);
   const viewport = useViewport(materialUiBreakpoints);
   
   const getCssTransition = match => {
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
                        <h1 style={{marginTop: 0}}>Interests</h1>
                        {getProjectCard(
                           'Blob Life',
                           <>
                              I paint (and make videos about the process)!<br/><br/>And... I babble about life, and YouTube-ing, and whatever else comes to my mind. I'm not nearly as soothing as Bob Ross. And I'm not half as talented as your
                              friendly neighborhood busker. But I've never allowed a little problem like "lack of talent" to get in my way before.
                           </>,
                           blobLifeDesktop,
                           blobLifeMobile,
                           'The Blob Life YouTube channel, showcasing the painting techniques of Adam Nathaniel Davis',
                           'left',
                           'https://www.youtube.com/channel/UCHNDtVFC4WQTcp_awD9c1Ag',
                        )}
                        <div style={{height: 48}}/>
                        {getProjectCard(
                           'Writing Voyage',
                           <>
                              I do the interwebs!<br/><br/>This is the one-stop shop for everything about me that's not coding/professional-related. It has general samples of my plays, poems, novels, and paintings.
                           </>,
                           writingVoyageDesktop,
                           writingVoyageMobile,
                           'The personal site of Adam Nathaniel Davis',
                           'right',
                           'https://writing.voyage',
                        )}
                        <div style={{height: 48}}/>
                        {getProjectCard(
                           'Excilior',
                           <>
                              I write sci-fi!<br/><br/>A half-million words of pure worldbuilding. Maps. Articles. Short stories. A (growing) novel. History. Races. This is my literary side project.
                           </>,
                           exciliorDesktop,
                           exciliorMobile,
                           'The sci-fi world of Adam Nathaniel Davis',
                           'left',
                           'https://www.worldanvil.com/w/excilior',
                        )}
                        <div style={{height: 48}}/>
                        {getProjectCard(
                           'New Play Exchange',
                           <>
                              I'm a playwright!<br/><br/>I may not quite be at the level of Tennessee Williams - but I'm working on it. I have a growing list of scripts that have been produced by local theatre groups.
                           </>,
                           npxDesktop,
                           npxMobile,
                           'The plays written by Adam Nathaniel Davis',
                           'right',
                           'https://newplayexchange.org/users/7276/adam-nathaniel-davis',
                        )}
                     </Column>
                  </Row>
               </div>
               <Footer/>
            </div>
         </CSSTransition>
      </>;
   };
   
   const getProjectCard = (title = '', body = <></>, desktopImage = '', mobileImage = '', imageAltText = '', offset = '', url = '') => {
      allow.aString(title, is.not.empty).aReactElement(body).aString(desktopImage, is.not.empty).aString(mobileImage, is.not.empty).aString(imageAltText, is.not.empty).oneOf(offset, ['left', 'right']).aString(url, is.not.empty);
      const styles = {
         card: {
            backgroundColor: the.color.white,
            boxShadow: 'rgba(0, 0, 0, 0.25) -11.31px 11.31px 17px 0px',
            fontSize: '1.2em',
            position: css3.position.relative,
         },
      };
      if (offset === 'left')
         styles.card.right = getResponsiveSpacing(viewport.size, 12, Number.MAX_SAFE_INTEGER, 0, -12);
      else if (offset === 'right')
         styles.card.left = getResponsiveSpacing(viewport.size, 12, Number.MAX_SAFE_INTEGER, 0, -12);
      return <>
         <div style={styles.card}>
            <Hidden mdUp={true}>
               <Row style={{
                  display: 'flex',
                  flexDirection: 'column',
                  height: 260,
               }}>
                  <Column
                     xs={12}
                     style={{
                        display: 'flex',
                        flexDirection: 'column',
                        flexGrow: 1,
                        minHeight: 0,
                     }}
                  >
                     <div>
                        <div style={{
                           backgroundColor: the.color.beige,
                           display: css3.dislay.inlineBlock,
                           height: 27,
                           width: 10,
                        }}/>
                        <h3 style={{
                           color: the.color.purple,
                           display: css3.dislay.inlineBlock,
                           fontSize: '0.9em',
                           marginLeft: 8,
                           marginTop: 8,
                        }}>
                           {title}
                        </h3>
                     </div>
                     <div style={{
                        flexGrow: 1,
                        minHeight: 0,
                        overflowY: css3.overflowY.auto,
                        paddingLeft: 8,
                        paddingRight: 8,
                     }}>
                        {body}
                     </div>
                  </Column>
               </Row>
               <Row>
                  <Column
                     xs={12}
                     style={{
                        backgroundColor: the.color.white,
                        height: 16,
                     }}
                  />
               </Row>
               <Row>
                  <Column
                     xs={12}
                     style={{
                        height: 200,
                        overflow: css3.overflow.hidden,
                     }}
                  >
                     <a
                        href={url}
                        rel={'noopener noreferrer'}
                        target={'_blank'}
                     >
                        <img
                           alt={imageAltText}
                           src={mobileImage}
                           style={{
                              height: css3.height.initial,
                              width: '100%',
                           }}
                        />
                     </a>
                  </Column>
               </Row>
            </Hidden>
            <Hidden smDown={true}>
               <Row style={{
                  display: 'flex',
                  flexDirection: 'column',
                  height: 400,
               }}>
                  <Column
                     xs={7}
                     style={{
                        display: 'flex',
                        flexDirection: 'column',
                        flexGrow: 1,
                        minHeight: 0,
                        width: '58.33%',
                     }}
                  >
                     <div>
                        <div style={{
                           backgroundColor: the.color.beige,
                           display: css3.dislay.inlineBlock,
                           height: 32,
                           width: 10,
                        }}/>
                        <h3 style={{
                           color: the.color.purple,
                           display: css3.dislay.inlineBlock,
                           marginLeft: 8,
                           marginTop: 8,
                        }}>
                           {title}
                        </h3>
                     </div>
                     <div style={{
                        flexGrow: 1,
                        minHeight: 0,
                        overflowY: css3.overflowY.auto,
                        paddingBottom: 8,
                        paddingLeft: 8,
                        paddingRight: 8,
                     }}>
                        {body}
                     </div>
                  </Column>
                  <Column xs={5}>
                     <div style={{overflow: css3.overflow.hidden}}>
                        <a
                           href={url}
                           rel={'noopener noreferrer'}
                           target={'_blank'}
                        >
                           <img
                              alt={imageAltText}
                              src={desktopImage}
                              style={{
                                 height: 400,
                                 width: css3.width.initial,
                              }}
                           />
                        </a>
                     </div>
                  </Column>
               </Row>
            </Hidden>
         </div>
      </>;
   };
   
   return <>
      <Route
         children={({match}) => getCssTransition(match)}
         exact={true}
         path={'/interests'}
      />
   </>;
};
