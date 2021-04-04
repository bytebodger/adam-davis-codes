import { Route } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { useRef } from 'react';
import '../../common/css/fade.css';
import { css3 } from '@toolz/css3/src/css3';
import { useViewport } from '@toolz/use-viewport';
import codeImage from '../../common/images/code.png';
import { Footer } from '../../Footer';

export const Home = () => {
   const nodeRef = useRef(null);
   const viewport = useViewport();
   
   const getBackgroundImageWidth = () => {
      const half = Math.round(viewport.width * 0.4);
      return half > 400 ? half : 400;
   };
   
   const getCssTransition = match => {
      return <>
         <CSSTransition
            classNames={'fade'}
            in={match !== null}
            nodeRef={nodeRef}
            timeout={2000}
            unmountOnExit={true}
         >
            <div
               key={'home'}
               ref={nodeRef}
               style={{
                  position: css3.position.absolute,
                  width: '100%',
               }}
            >
               <div style={{position: css3.position.absolute}}>foo?</div>
               <div style={{
                  backgroundImage: `url(${codeImage})`,
                  minHeight: 600,
                  width: getBackgroundImageWidth(),
               }}/>
               <Footer/>
            </div>
         </CSSTransition>
      </>;
   };
   
   return <>
      <Route
         children={({match}) => getCssTransition(match)}
         exact={true}
         path={'/home'}
      />
   </>;
};
