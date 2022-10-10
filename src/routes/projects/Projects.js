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
import spotifyDesktop from '../../common/images/spotify-desktop.jpg';
import spotifyMobile from '../../common/images/spotify-mobile.jpg';
import githubDesktop from '../../common/images/github-desktop.jpg';
import githubMobile from '../../common/images/github-mobile.jpg';
import { use } from '../../common/objects/use';
import { allow } from '@toolz/allow-react';
import { is } from '../../common/objects/is';
import { materialUiBreakpoints } from '../../common/arrays/materialUiBreakpoints';

export const Projects = () => {
   const nodeRef = useRef(null);
   const viewport = useViewport(materialUiBreakpoints);
   const devTo = use.devToArticlesEndpoint;
   const npm = use.npmDownloadsEndpoint;
   const github = use.githubReposEndpoint;

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
                              I've currently written <b>{devTo.articles.length}</b> blog articles on Dev.to covering a broad range of my views on application development:
                              {getArticleLinks()}
                           </>,
                           devDesktop,
                           devMobile,
                           'The Dev.to blogs written by Adam Nathaniel Davis',
                           'left',
                           'https://dev.to/bytebodger',
                        )}
                        <div style={{height: 48}}/>
                        {getProjectCard(
                           'NPM Packages',
                           <>
                              To-date, my NPM packages have been installed more than <b>{npm.downloads}</b> times:
                              <table>
                                 <thead>
                                    <tr style={{fontSize: '0.9em'}}>
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
                           'right',
                           'https://www.npmjs.com/search?q=%40toolz',
                        )}
                        <div style={{height: 48}}/>
                        {getProjectCard(
                           'Spotify Toolz',
                           <>
                              No, I didn't <i>write</i> any of the native Spotify clients. Nor did I contribute to them in any way. But as a longtime subscriber to their service, I grew increasingly exasperated by several
                              key "issues":
                              <ul>
                                 <li style={{marginBottom: 16}}>Spotify's "shuffle" feature is not random. Not even close. And there's no way inside their client to configure it to behave randomly.</li>
                                 <li style={{marginBottom: 16}}>Spotify is attrocious at recommending new music. It frequently recommends the same tracks/artists repeatedly, even if you've done everything in your power to ignore those recommendations.</li>
                                 <li>If you maintain large playlists in Spotify, it's surprisingly difficult to identify/avoid duplicate entries, because Spotify can have many copies of the same track that are not 100% identical.</li>
                              </ul>
                              Thankfully, Spotify has a fairly-robust API. So I built
                              <a
                                 href={'https://spotifytoolz.com'}
                                 target={'_blank'}
                              > a publicly-accessible React application
                              </a> that will allow anyone to mitigate the issues described above.
                           </>,
                           spotifyDesktop,
                           spotifyMobile,
                           'A custom React application to extend Spotify\'s native functionality',
                           'left',
                           'https://spotifytoolz.com',
                        )}
                        <div style={{height: 48}}/>
                        {getProjectCard(
                           'GitHub',
                           <>
                              This is basically a superset of my NPM packages:
                              {getRepoLinks()}
                           </>,
                           githubDesktop,
                           githubMobile,
                           'The GitHub repositories for Adam Nathaniel Davis',
                           'right',
                           'https://github.com/bytebodger?tab=repositories',
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
               <td style={{
                  fontSize: '0.9em',
                  fontWeight: css3.fontWeight._500,
               }}>
                  <a
                     href={'https://npmjs.com/package/@toolz/' + npmPackage}
                     rel={'noopener noreferrer'}
                     style={{textDecoration: css3.textDecoration.none}}
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

   const getProjectCard = (title = '', body = <></>, desktopImage = '', mobileImage = '', imageAltText = '', offset = '', url = '') => {
      allow.aString(title, is.not.empty).aReactElement(body).aString(desktopImage, is.not.empty).aString(mobileImage, is.not.empty).aString(imageAltText, is.not.empty).oneOf(offset, ['left', 'right']).aString(url, is.not.empty);
      const styles = {
         card: {
            backgroundColor: the.color.white,
            boxShadow: 'rgba(0, 0, 0, 0.25) -11.31px 11.31px 17px 0px',
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

   const getRepoLinks = () => {
      return github.repos.map((repo, index) => {
         return <div
            key={repo.id}
            style={{
               backgroundColor: index % 2 ? '#eeeeee' : 'white',
               fontSize: '0.9em',
               paddingBottom: 4,
               paddingTop: 4,
            }}
         >
            <a
               href={repo.html_url}
               rel={'noreferrer'}
               style={{
                  fontWeight: css3.fontWeight._500,
                  textDecoration: css3.textDecoration.none,
               }}
               target={'_blank'}
            >
               {repo.name}
            </a>
         </div>;
      });
   };

   return <>
      <Route
         children={({match}) => getCssTransition(match)}
         exact={true}
         path={'/projects'}
      />
   </>;
};
