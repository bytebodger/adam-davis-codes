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
import { Row } from '@toolz/material-ui/dist/Row';
import { Column } from '@toolz/material-ui/dist/Column';
import { Hidden } from '@material-ui/core';
import devDesktop from '../../common/images/dev-desktop.jpg';
import devMobile from '../../common/images/dev-mobile.jpg';
import npmDesktop from '../../common/images/npm-desktop.jpg';
import npmMobile from '../../common/images/npm-mobile.jpg';
import { use } from '../../common/objects/use';
import { allow } from '@toolz/allow-react';
import { is } from '../../common/objects/is';

export const Projects = () => {
   const nodeRef = useRef(null);
   const viewport = useViewport();
   const devTo = use.devToArticlesEndpoint;
   const npm = use.npmDownloadsEndpoint;
   
   const getArticleLinks = () => {
      return devTo.articles.map((article, index) => {
         return <div
            key={article.id}
            style={{
               backgroundColor: index % 2 ? '#eeeeee' : 'white',
               fontSize: '0.9em',
               paddingBottom: 4,
               paddingTop: 4,
            }}
         >
            <a
               href={article.canonical_url}
               rel={'noreferrer'}
               style={{
                  fontWeight: css3.fontWeight._500,
                  textDecoration: css3.textDecoration.none,
               }}
               target={'_blank'}
            >
               [{article.readable_publish_date}] {article.title}
            </a>
         </div>;
      });
   };
   
   const getCssTransition = match => {
      if (match !== null)
         logGooglePageHit('projects');
      return <>
         <CSSTransition
            classNames={'fade'}
            in={match !== null}
            nodeRef={nodeRef}
            timeout={2000}
            unmountOnExit={true}
         >
            <div
               key={'projects'}
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
                        <h1 style={{marginTop: 0}}>Projects</h1>
                        {getProjectCard(
                           'Blogging',
                           <>
                              I've currently written {devTo.articles.length} blog articles on Dev.to covering a broad range of my views on application development:
                              {getArticleLinks()}
                           </>,
                           devDesktop,
                           devMobile,
                           'The Dev.to blogs written by Adam Nathaniel Davis',
                        )}
                        <div style={{height: 32}}/>
                        {getProjectCard(
                           'NPM Packages',
                           <>
                              To-date, my NPM packages have been installed more than {npm.downloads} times:
                              <br/>
                              <table style={{width: '100%'}}>
                                 <thead>
                                    <tr>
                                       <th style={{
                                          textAlign: css3.textAlign.left,
                                          width: '90%',
                                       }}>
                                          Package
                                       </th>
                                       <th style={{
                                          minWidth: 50,
                                          textAlign: css3.textAlign.right,
                                          width: '10%',
                                       }}>
                                          Downloads
                                       </th>
                                    </tr>
                                 </thead>
                                 <tbody>
                                    {getNpmPackageLinks()}
                                 </tbody>
                              </table>
                           </>,
                           npmDesktop,
                           npmMobile,
                           'The NPM packages created by Adam Nathaniel Davis',
                        )}
                     </Column>
                  </Row>
               </div>
               <Footer/>
            </div>
         </CSSTransition>
      </>;
   };
   
   const getNpmPackageLinks = () => {
      const rows = [];
      Object.entries(npm.npmPackages).forEach((entry, index) => {
         const [npmPackage, downloads] = entry;
         rows.push(
            <tr
               key={npmPackage}
               style={{backgroundColor: index % 2 ? '#eeeeee' : 'white'}}
            >
               <td>
                  <a
                     href={'https://npmjs.com/package/@toolz/' + npmPackage}
                     rel={'noopener noreferrer'}
                     target={'_blank'}
                  >
                     @toolz/{npmPackage}
                  </a>
               </td>
               <td style={{textAlign: css3.textAlign.right}}>{downloads}</td>
            </tr>
         );
      });
      return rows;
   };
   
   const getProjectCard = (title = '', body = <></>, desktopImage = '', mobileImage = '', imageAltText = '') => {
      allow.aString(title, is.not.empty).aReactElement(body).aString(desktopImage, is.not.empty).aString(mobileImage, is.not.empty).aString(imageAltText, is.not.empty);
      const styles = {
         card: {
            backgroundColor: the.color.white,
            boxShadow: 'rgba(0, 0, 0, 0.25) -11.31px 11.31px 17px 0px',
         },
      };
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
                           height: 24,
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
                        fontSize: '0.8em',
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
                     style={{height: 200}}
                  >
                     <img
                        alt={imageAltText}
                        src={mobileImage}
                        style={{
                           height: '100%',
                           width: '100%',
                        }}
                     />
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
                     }}
                  >
                     <div>
                        <div style={{
                           backgroundColor: the.color.beige,
                           display: css3.dislay.inlineBlock,
                           height: 30,
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
                        fontSize: '0.9em',
                        minHeight: 0,
                        overflowY: css3.overflowY.auto,
                        paddingBottom: 8,
                        paddingLeft: 8,
                        paddingRight: 8,
                     }}>
                        {body}
                     </div>
                  </Column>
                  <Column
                     xs={5}
                     style={{height: 400}}
                  >
                     <img
                        alt={imageAltText}
                        src={desktopImage}
                        style={{
                           height: '100%',
                           width: '100%',
                        }}
                     />
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
         path={'/projects'}
      />
   </>;
};
