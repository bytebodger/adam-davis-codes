import { Route } from 'react-router-dom';
import { logGooglePageHit } from '../../common/functions/logGooglePageHit';
import { CSSTransition } from 'react-transition-group';
import '../../common/css/fade.css';
import { useRef, memo, useMemo } from 'react';
import { css3 } from '@toolz/css3/src/css3';
import { the } from '../../common/objects/the';
import { getResponsiveSpacing } from '../../common/functions/getResponsiveSpacing';
import { useViewport } from '@toolz/use-viewport';
import { Row } from '@toolz/material-ui/dist/Row';
import { Column } from '@toolz/material-ui/dist/Column';
import { Footer } from '../../Footer';
import { materialUiBreakpoints } from '../../common/arrays/materialUiBreakpoints';

export const Phone = memo(() => {
   const nodeRef = useRef(null);
   const viewport = useViewport(materialUiBreakpoints);

   const getCssTransition = match => {
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
               key={'phone'}
               ref={nodeRef}
               style={style.div1}
            >
               <div style={style.div2}>
                  <Row justify={'space-evenly'}>
                     <Column
                        xs={12} sm={10} md={8} lg={7} xl={6}
                        style={style.column1}
                     >
                        <h1 style={style.h1}>+1-904-434-9210</h1>
                        <div style={style.div3}>
                           <Row>
                              <Column xs={12}>
                                 <h3 style={style.h3}>
                                    Please leave your message at the tone...
                                 </h3>
                              </Column>
                           </Row>
                           <Row justify={'space-evenly'}>
                              <Column
                                 xs={12} sm={10}
                                 style={style.column2}
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
   };

   const style = useMemo(() => {
      return {
         column1: {
            paddingLeft: 8,
            paddingRight: 8,
         },
         column2: {
            paddingBottom: getResponsiveSpacing(viewport.size, 8, 48),
            paddingTop: getResponsiveSpacing(viewport.size, 8, 48),
            textAlign: css3.textAlign.justify,
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
         div3: {
            border: '1px solid grey',
            backgroundColor: the.color.white,
            borderRadius: 10,
            boxShadow: 'rgba(0, 0, 0, 0.25) -11.31px 11.31px 17px 0px',
            padding: 16,
         },
         h1: {
            textAlign: css3.textAlign.center,
         },
         h3: {
            color: the.color.purple,
            margin: 0,
            textAlign: css3.textAlign.center,
         },
      };
   }, [viewport.size]);

   return <>
      <Route
         children={({match}) => getCssTransition(match)}
         exact={true}
         path={'/phone'}
      />
   </>;
});
