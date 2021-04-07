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
import { use } from '../../common/objects/use';

export const Projects = () => {
   const nodeRef = useRef(null);
   const viewport = useViewport();
   const devTo = use.devToArticlesEndpoint;
   
   const getArticleLinks = () => {
      return devTo.articles.map(article => {
         return <div
            key={article.id}
            style={{
               fontSize: '0.9em',
               paddingTop: 8,
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
      const styles = {
         card: {
            backgroundColor: the.color.white,
            boxShadow: 'rgba(0, 0, 0, 0.25) -11.31px 11.31px 17px 0px',
         },
      };
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
                        <h1>Projects</h1>
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
                                          Blogging
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
                                       I've currently written {devTo.articles.length} blog articles on Dev.to covering a broad range of my views on application development:
                                       {getArticleLinks()}
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
                                 >
                                 
                                 </Column>
                              </Row>
                              <Row>
                                 <Column
                                    xs={12}
                                    style={{height: 200}}
                                 >
                                    <img
                                       alt={'The Dev.to blogs of Adam Nathaniel Davis'}
                                       src={devMobile}
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
                                          Blogging
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
                                       I've currently written {devTo.articles.length} blog articles on Dev.to covering a broad range of my views on application development:
                                       {getArticleLinks()}
                                    </div>
                                 </Column>
                                 <Column
                                    xs={5}
                                    style={{height: 400}}
                                 >
                                    <img
                                       alt={'The Dev.to blogs of Adam Nathaniel Davis'}
                                       src={devDesktop}
                                       style={{
                                          height: '100%',
                                          width: '100%',
                                       }}
                                    />
                                 </Column>
                              </Row>
                           </Hidden>
                        </div>
                     </Column>
                  </Row>
               </div>
               <Footer/>
            </div>
         </CSSTransition>
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
