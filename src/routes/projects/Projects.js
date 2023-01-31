import { Route } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { useRef, useMemo, useCallback } from 'react';
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
   const currentOffset = useRef('right');
   const devTo = use.devToArticlesEndpoint;
   const github = use.githubReposEndpoint;
   const nodeRef = useRef(null);
   const npm = use.npmDownloadsEndpoint;
   const viewport = useViewport(materialUiBreakpoints);

   const style = useMemo(() => {
      return {
         article: {
            a: {
               fontWeight: css3.fontWeight._500,
               textDecoration: css3.textDecoration.none,
            },
            divDark: {
               backgroundColor: '#eeeeee',
               fontSize: '0.9em',
               paddingBottom: 4,
               paddingTop: 4,
            },
            divLight: {
               backgroundColor: 'white',
               fontSize: '0.9em',
               paddingBottom: 4,
               paddingTop: 4,
            },
         },
         backgroundColorGrey: {
            backgroundColor: '#eeeeee',
         },
         backgroundColorWhite: {
            backgroundColor: 'white',
         },
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
               height: 24,
               width: 10,
            },
            div2: {
               flexGrow: 1,
               fontSize: '0.8em',
               minHeight: 0,
               overflowY: css3.overflowY.auto,
               paddingLeft: 8,
               paddingRight: 8,
            },
            div3: {
               backgroundColor: the.color.beige,
               display: css3.dislay.inlineBlock,
               height: 30,
               width: 10,
            },
            div4: {
               flexGrow: 1,
               fontSize: '0.9em',
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
               left: getResponsiveSpacing(viewport.size, 12, Number.MAX_SAFE_INTEGER, 0, -12),
               position: css3.position.relative,
            },
            outerDivRight: {
               backgroundColor: the.color.white,
               boxShadow: 'rgba(0, 0, 0, 0.25) -11.31px 11.31px 17px 0px',
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
         fontSize0_9em: {
            fontSize: '0.9em',
         },
         height48: {
            height: 48,
         },
         marginBottom16: {
            marginBottom: 16,
         },
         marginTop0: {
            marginTop: 0,
         },
         npm: {
            td1: {
               fontSize: '0.9em',
               fontWeight: css3.fontWeight._500,
            },
         },
         overflowHidden: {
            overflow: css3.overflow.hidden,
         },
         repo: {
            a: {
               fontWeight: css3.fontWeight._500,
               textDecoration: css3.textDecoration.none,
            },
            divDarkRow: {
               backgroundColor: '#eeeeee',
               fontSize: '0.9em',
               paddingBottom: 4,
               paddingTop: 4,
            },
            divLightRow: {
               backgroundColor: 'white',
               fontSize: '0.9em',
               paddingBottom: 4,
               paddingTop: 4,
            },
         },
         textAlignRight: {
            textAlign: css3.textAlign.right,
         },
         textDecorationNone: {
            textDecoration: css3.textDecoration.none,
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
            th1: {
               textAlign: css3.textAlign.left,
               width: '90%',
            },
            th2: {
               minWidth: 50,
               textAlign: css3.textAlign.right,
               width: '10%',
            },
         },
      };
   }, [viewport.size]);

   const getArticleLinks = useCallback(() => {
      return devTo.articles.map((article, index) => {
         const divStyle = index % 2 ? style.article.divLight : style.article.divDark;
         return <div
            key={article.id}
            style={divStyle}
         >
            <a
               href={article.canonical_url}
               rel={'noreferrer'}
               style={style.article.a}
               target={'_blank'}
            >
               [{article.readable_publish_date}] {article.title}
            </a>
         </div>;
      });
   }, [devTo, style]);

   const getNpmPackageLinks = useCallback(() => {
      const rows = [];
      Object.entries(npm.npmPackages).forEach((entry, index) => {
         const [npmPackage, downloads] = entry;
         const trStyle = index % 2 ? style.backgroundColorWhite : style.backgroundColorGrey;
         rows.push(
            <tr
               key={npmPackage}
               style={trStyle}
            >
               <td style={style.npm.td1}>
                  <a
                     href={`https://npmjs.com/package/@toolz/${npmPackage}`}
                     rel={'noreferrer'}
                     style={style.textDecorationNone}
                     target={'_blank'}
                  >
                     @toolz/{npmPackage}
                  </a>
               </td>
               <td style={style.textAlignRight}>{downloads}</td>
            </tr>,
         );
      });
      return rows;
   }, [npm, style]);

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
                        rel={'noreferrer'}
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
                           rel={'noreferrer'}
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

   const getRepoLinks = useCallback(() => {
      return github.repos.map((repo, index) => {
         const divRowStyle = index % 2 ? style.repo.divLightRow : style.repo.divDarkRow;
         return <div
            key={repo.id}
            style={divRowStyle}
         >
            <a
               href={repo.html_url}
               rel={'noreferrer'}
               style={style.repo.a}
               target={'_blank'}
            >
               {repo.name}
            </a>
         </div>;
      });
   }, [github, style]);

   const getCssTransition = useCallback(match => {
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
               style={style.transition.div1}
            >
               <div style={style.transition.div2}>
                  <Row justify={'space-evenly'}>
                     <Column
                        xs={12} sm={10} md={8} lg={7} xl={6}
                        style={style.transition.column}
                     >
                        <h1 style={style.marginTop0}>Projects</h1>
                        {getProjectCard(
                           'Blogging',
                           <>
                              I've currently written <b>{devTo.articles.length}</b> blog articles on Dev.to covering a broad range of my views on application development:
                              {getArticleLinks()}
                           </>,
                           devDesktop,
                           devMobile,
                           'The Dev.to blogs written by Adam Nathaniel Davis',
                           'https://dev.to/bytebodger',
                        )}
                        <div style={style.height48}/>
                        {getProjectCard(
                           'NPM Packages',
                           <>
                              To-date, my NPM packages have been installed more than <b>{npm.downloads}</b> times:
                              <table>
                                 <thead>
                                    <tr style={style.fontSize0_9em}>
                                       <th style={style.transition.th1}>
                                          Package
                                       </th>
                                       <th style={style.transition.th2}>
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
                           'https://www.npmjs.com/search?q=%40toolz',
                        )}
                        <div style={style.height48}/>
                        {getProjectCard(
                           'Spotify Toolz',
                           <>
                              No, I didn't <i>write</i> any of the native Spotify clients. Nor did I contribute to them in any way. But as a longtime subscriber to their service, I grew increasingly exasperated by several
                              key "issues":
                              <ul>
                                 <li style={style.marginBottom16}>Spotify's "shuffle" feature is not random. Not even close. And there's no way inside their client to configure it to behave randomly.</li>
                                 <li style={style.marginBottom16}>Spotify is attrocious at recommending new music. It frequently recommends the same tracks/artists repeatedly, even if you've done everything in your power to ignore those recommendations.</li>
                                 <li>If you maintain large playlists in Spotify, it's surprisingly difficult to identify/avoid duplicate entries, because Spotify can have many copies of the same track that are not 100% identical - but they're still essentially the <i>same</i> track.
                                 </li>
                              </ul>
                              Thankfully, Spotify has a fairly-robust API. So I built
                              <a
                                 href={'https://spotifytoolz.com'}
                                 rel={'noreferrer'}
                                 target={'_blank'}
                              > a publicly-accessible React application
                              </a> that will allow anyone to mitigate the issues described above.
                           </>,
                           spotifyDesktop,
                           spotifyMobile,
                           'A custom React application to extend Spotify\'s native functionality',
                           'https://spotifytoolz.com',
                        )}
                        <div style={style.height48}/>
                        {getProjectCard(
                           'GitHub',
                           <>
                              This is basically a superset of my NPM packages:
                              {getRepoLinks()}
                           </>,
                           githubDesktop,
                           githubMobile,
                           'The GitHub repositories for Adam Nathaniel Davis',
                           'https://github.com/bytebodger?tab=repositories',
                        )}
                     </Column>
                  </Row>
               </div>
               <Footer/>
            </div>
         </CSSTransition>
      </>;
   }, [devTo, getArticleLinks, getNpmPackageLinks, getProjectCard, getRepoLinks, npm, style]);

   return <>
      <Route
         children={({match}) => getCssTransition(match)}
         exact={true}
         path={'/projects'}
      />
   </>;
};
