import '../css/button.css';
import * as PropTypes from 'prop-types';
import { memo } from 'react';

export const Button = memo(props => {
   return <>
      <span
         className={'button'}
         {...props}
      >
         {props.children}
      </span>
   </>;
});

Button.propTypes = {
   onClick: PropTypes.func.isRequired,
};
