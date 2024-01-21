import { Route } from 'react-router-dom';
import { logGooglePageHit } from '../../common/functions/logGooglePageHit';
import { CSSTransition } from 'react-transition-group';
import '../../common/css/fade.css';
import { useRef, memo, useCallback } from 'react';
import { getResponsiveSpacing } from '../../common/functions/getResponsiveSpacing';
import { useViewport } from '@toolz/use-viewport';
import { Column } from '@toolz/material-ui/dist/Column';
import { Footer } from '../../common/components/Footer';
import { materialUiBreakpoints } from '../../common/arrays/materialUiBreakpoints';
import { Header } from '../../common/components/Header';
import './css/email.css';
import '../../common/css/baseProperties.css';
import { Row } from '../../common/components/Row';

export const Email = memo(() => {
   const nodeRef = useRef(null);
   const viewport = useViewport(materialUiBreakpoints);

   const getCssTransition = useCallback(match => {
      if (match !== null)
         logGooglePageHit('email');
      return <>
         <CSSTransition
            classNames={'fade'}
            in={match !== null}
            nodeRef={nodeRef}
            timeout={2000}
            unmountOnExit={true}
         >
            <div
               className={'outerDiv'}
               key={'email'}
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
                  <Row className={'justifyContentEvenly'}>
                     <Column
                        className={'bodyContainerColumn'}
                        xs={12} sm={10} md={8} lg={7} xl={6}
                     >
                        <h1 className={'textAlignCenter'}>me@adamdavis{'\u2024'}codes</h1>
                        <div className={'bodyContainerDiv'}>
                           <Row>
                              <Column xs={12}>
                                 <h3>
                                    Did the email address above not work for you??
                                 </h3>
                              </Column>
                           </Row>
                           <Row className={'justifyContentEvenly'}>
                              <Column
                                 className={'textAlignJustify'}
                                 xs={12} sm={10}
                                 style={{
                                    paddingBottom: getResponsiveSpacing(viewport.size, 8, 48),
                                    paddingTop: getResponsiveSpacing(viewport.size, 8, 48),
                                 }}
                              >
                                 When composing an email, you can't just copy-and-paste the address above (or the one in the footer) into the <code>To:</code>/<code>CC:</code>/<code>BCC:</code> fields of the message.
                                 It contains an "illegal" character. So you'll need to <i>type out</i> the address.
                                 <br/><br/>
                                 I apologize for the hassle. I'm just trying to mitigate a small portion of the spam that comes from having an email address posted in plain text on a public website.
                              </Column>
                           </Row>
                        </div>
                     </Column>
                  </Row>
               </div>
               <Footer/>
            </div>
         </CSSTransition>
      </>;
   }, [viewport]);

   const triggerTransition = useCallback(({match}) => getCssTransition(match), [getCssTransition]);

   return <>
      <Route
         children={triggerTransition}
         exact={true}
         path={'/email'}
      />
   </>;
});
