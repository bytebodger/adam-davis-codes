import { Route } from 'react-router-dom';
import { logGooglePageHit } from '../../common/functions/logGooglePageHit';
import { CSSTransition } from 'react-transition-group';
import '../../common/css/fade.css';
import { useRef, memo, useCallback } from 'react';
import { getResponsiveSpacing } from '../../common/functions/getResponsiveSpacing';
import { useViewport } from '@toolz/use-viewport';
import { Row } from '@toolz/material-ui/dist/Row';
import { Column } from '@toolz/material-ui/dist/Column';
import { Footer } from '../../Footer';
import { materialUiBreakpoints } from '../../common/arrays/materialUiBreakpoints';
import { Header } from '../../Header';
import '../../common/css/baseProperties.css';
import './css/phone.css';

export const Phone = memo(() => {
   const nodeRef = useRef(null);
   const viewport = useViewport(materialUiBreakpoints);

   const getCssTransition = useCallback(match => {
      if (match !== null)
         logGooglePageHit('phone');
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
               key={'phone'}
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
                        <h1 className={'textAlignCenter'}>+1-904-434-9210</h1>
                        <div className={'bodyDiv'}>
                           <Row>
                              <Column xs={12}>
                                 <h3>
                                    Please leave your message at the tone...
                                 </h3>
                              </Column>
                           </Row>
                           <Row justify={'space-evenly'}>
                              <Column
                                 className={'textAlignJustify'}
                                 xs={12} sm={10}
                                 style={{
                                    paddingBottom: getResponsiveSpacing(viewport.size, 8, 48),
                                    paddingTop: getResponsiveSpacing(viewport.size, 8, 48),
                                 }}
                              >
                                 No, <i>seriously</i>. You're free to call me whenever you like, but you'll almost certainly need to leave a voicemail if you expect me to actually <i>receive</i> your
                                 message and to <i>return</i> your call. If you're reading this, then your number is probably <i>not</i> already in my phone. And if the call's coming in from an
                                 unknown number, you could bet a sizable chunk of money that I'm gonna let it go to voicemail. I will definitely listen to your message, but I won't be answering
                                 the call live.
                                 <br/><br/>
                                 Please understand that I've had this same mobile number since 2003. At this point, I'm in an untold number of spammer (and
                                 recruiter) databases. There is simply no way that I could actually <i>answer</i> every (or even, most) of the unknown calls that hit my phone in an average day.
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
         path={'/phone'}
      />
   </>;
});
