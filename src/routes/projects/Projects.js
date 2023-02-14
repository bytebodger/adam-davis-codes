import { Route } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { useRef, useCallback } from 'react';
import '../../common/css/fade.css';
import { Footer } from '../../Footer';
import { logGooglePageHit } from '../../common/functions/logGooglePageHit';
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
import { Header } from '../../Header';
import '../../common/css/baseProperties.css';
import './css/projects.css';

export const Projects = () => {
   const currentOffset = useRef('right');
   const devTo = use.devToArticlesEndpoint;
   const github = use.githubReposEndpoint;
   const nodeRef = useRef(null);
   const npm = use.npmDownloadsEndpoint;
   const viewport = useViewport(materialUiBreakpoints);

   const getArticleLinks = useCallback(() => {
      return devTo.articles.map((article, index) => {
         return <div
            className={index % 2 ? 'lightRow' : 'darkRow'}
            key={article.id}
         >
            <a
               className={'articleLink'}
               href={article.canonical_url}
               rel={'noreferrer'}
               target={'_blank'}
            >
               [{article.readable_publish_date}] {article.title}
            </a>
         </div>;
      });
   }, [devTo]);

   const getNpmPackageLinks = useCallback(() => {
      const rows = [];
      Object.entries(npm.npmPackages).forEach((entry, index) => {
         const [npmPackage, downloads] = entry;
         rows.push(
            <tr
               className={index % 2 ? 'backgroundColorWhite' : 'backgroundColorGrey'}
               key={npmPackage}
            >
               <td className={'npmCell'}>
                  <a
                     className={'textDecorationNone'}
                     href={`https://npmjs.com/package/@toolz/${npmPackage}`}
                     rel={'noreferrer'}
                     target={'_blank'}
                  >
                     @toolz/{npmPackage}
                  </a>
               </td>
               <td className={'textAlignRight'}>{downloads}</td>
            </tr>,
         );
      });
      return rows;
   }, [npm]);

   const getProjectCard = useCallback((title = '', body = <></>, desktopImage = '', mobileImage = '', imageAltText = '', url = '') => {
      allow.aString(title, is.not.empty).aReactElement(body).aString(desktopImage, is.not.empty).aString(mobileImage, is.not.empty).aString(imageAltText, is.not.empty).aString(url, is.not.empty);
      currentOffset.current = currentOffset.current === 'right' ? 'left' : 'right';
      const responsiveSpacing = getResponsiveSpacing(viewport.size, 12, Number.MAX_SAFE_INTEGER, 0, -12);
      return <>
         <div
            className={'cardOuterDiv'}
            style={{
               left: currentOffset.current === 'left' ? 'initial' : responsiveSpacing,
               right: currentOffset.current === 'left' ? responsiveSpacing : 'initial',
            }}
         >
            <Hidden mdUp={true}>
               <Row className={'mobileCardRow'}>
                  <Column
                     className={'mobileCardTitleContainer'}
                     xs={12}
                  >
                     <div>
                        <div className={'mobileCardSpacerDiv'}/>
                        <h3 className={'mobileCardH3'}>
                           {title}
                        </h3>
                     </div>
                     <div className={'mobileCardBodyDiv'}>
                        {body}
                     </div>
                  </Column>
               </Row>
               <Row>
                  <Column
                     className={'mobileCardSpacerColumn'}
                     xs={12}
                  />
               </Row>
               <Row>
                  <Column
                     className={'mobileCardImageContainer'}
                     xs={12}
                  >
                     <a
                        href={url}
                        rel={'noreferrer'}
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
                     className={'desktopCardTextContainer'}
                     xs={7}
                  >
                     <div>
                        <div className={'desktopCardSpacerDiv'}/>
                        <h3 className={'desktopCardH3'}>
                           {title}
                        </h3>
                     </div>
                     <div className={'desktopCardBodyDiv'}>
                        {body}
                     </div>
                  </Column>
                  <Column xs={5}>
                     <div className={'overflowHidden'}>
                        <a
                           href={url}
                           rel={'noreferrer'}
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

   const getRepoLinks = useCallback(() => {
      return github.repos.map((repo, index) => {
         return <div
            className={index % 2 ? 'lightRow' : 'darkRow'}
            key={repo.id}
         >
            <a
               className={'articleLink'}
               href={repo.html_url}
               rel={'noreferrer'}
               target={'_blank'}
            >
               {repo.name}
            </a>
         </div>;
      });
   }, [github]);

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
               className={'transitionContainerDiv'}
               key={'projects'}
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
                        className={'mainBodyColumn'}
                        xs={12} sm={10} md={8} lg={7} xl={6}
                     >
                        <h1 className={'marginTop_0'}>Projects</h1>
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
                        <div className={'height_48'}/>
                        {getProjectCard(
                           'NPM Packages',
                           <>
                              To-date, my NPM packages have been installed more than <b>{npm.downloads}</b> times:
                              <table>
                                 <thead>
                                    <tr className={'fontSize_0_9em'}>
                                       <th className={'packageTableHeader'}>
                                          Package
                                       </th>
                                       <th className={'downloadsTableHeader'}>
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
                        <div className={'height_48'}/>
                        {getProjectCard(
                           'Spotify Toolz',
                           <>
                              No, I didn't <i>write</i> any of the native Spotify clients. Nor did I contribute to them in any way. But as a longtime subscriber to their service, I grew increasingly exasperated by several
                              key "issues":
                              <ul>
                                 <li className={'marginBottom_16'}>Spotify's "shuffle" feature is not random. Not even close. And there's no way inside their client to configure it to behave randomly.</li>
                                 <li className={'marginBottom_16'}>Spotify is attrocious at recommending new music. It frequently recommends the same tracks/artists repeatedly, even if you've done everything in your power to ignore those recommendations.</li>
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
                        <div className={'height_48'}/>
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
   }, [devTo, getArticleLinks, getNpmPackageLinks, getProjectCard, getRepoLinks, npm, viewport]);

   const triggerTransition = useCallback(({match}) => getCssTransition(match), [getCssTransition]);

   return <>
      <Route
         children={triggerTransition}
         exact={true}
         path={'/projects'}
      />
   </>;
};
