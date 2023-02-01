import { Route } from 'react-router-dom';
import { logGooglePageHit } from '../../common/functions/logGooglePageHit';
import { CSSTransition } from 'react-transition-group';
import '../../common/css/fade.css';
import { useRef, memo, useMemo, useCallback } from 'react';
import { css3 } from '@toolz/css3/src/css3';
import { the } from '../../common/objects/the';
import { getResponsiveSpacing } from '../../common/functions/getResponsiveSpacing';
import { useViewport } from '@toolz/use-viewport';
import { Row } from '@toolz/material-ui/dist/Row';
import { Column } from '@toolz/material-ui/dist/Column';
import { Footer } from '../../Footer';
import { materialUiBreakpoints } from '../../common/arrays/materialUiBreakpoints';
import { Header } from '../../Header';

export const Email = memo(() => {
   const nodeRef = useRef(null);
   const viewport = useViewport(materialUiBreakpoints);

   const style = useMemo(() => {
      return {
         h3: {
            color: the.color.purple,
            margin: 0,
            textAlign: css3.textAlign.center,
         },
         innerColumn: {
            paddingBottom: getResponsiveSpacing(viewport.size, 8, 48),
            paddingTop: getResponsiveSpacing(viewport.size, 8, 48),
            textAlign: css3.textAlign.justify,
         },
         innerDiv: {
            border: '1px solid grey',
            backgroundColor: the.color.white,
            borderRadius: 10,
            boxShadow: 'rgba(0, 0, 0, 0.25) -11.31px 11.31px 17px 0px',
            padding: 16,
         },
         outerColumn: {
            paddingLeft: 8,
            paddingRight: 8,
         },
         outerDiv1: {
            position: css3.position.absolute,
            width: '100%',
         },
         outerDiv2: {
            backgroundColor: the.color.sand,
            paddingBottom: getResponsiveSpacing(viewport.size, 8, 48),
            paddingTop: getResponsiveSpacing(viewport.size, 8, 48),
         },
         textAlignCenter: {
            textAlign: css3.textAlign.center,
         },
      };
   }, [viewport.size]);

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
               key={'email'}
               ref={nodeRef}
               style={style.outerDiv1}
            >
               <Header/>
               <div style={style.outerDiv2}>
                  <Row justify={'space-evenly'}>
                     <Column
                        xs={12} sm={10} md={8} lg={7} xl={6}
                        style={style.outerColumn}
                     >
                        <h1 style={style.textAlignCenter}>me@adamdavis{'\u2024'}codes</h1>
                        <div style={style.innerDiv}>
                           <Row>
                              <Column xs={12}>
                                 <h3 style={style.h3}>
                                    Did the email address above not work for you??
                                 </h3>
                              </Column>
                           </Row>
                           <Row justify={'space-evenly'}>
                              <Column
                                 xs={12} sm={10}
                                 style={style.innerColumn}
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
   }, [style]);

   const triggerTransition = useCallback(({match}) => getCssTransition(match), [getCssTransition]);

   return <>
      <Route
         children={triggerTransition}
         exact={true}
         path={'/email'}
      />
   </>;
});
