import { Route } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { useRef } from 'react';
import '../../common/css/fade.css';
import { css3 } from '@toolz/css3/src/css3';

export const Resume = () => {
   const nodeRef = useRef(null);
   
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
               key={'resume'}
               ref={nodeRef}
               style={{position: css3.position.absolute}}
            >
               Resume
            </div>
         </CSSTransition>
      </>;
   };
   
   return <>
      <Route
         children={({match}) => getCssTransition(match)}
         exact={true}
         path={'/resume'}
      />
   </>;
};