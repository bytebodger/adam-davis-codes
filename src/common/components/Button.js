import '../css/button.css';
import * as PropTypes from 'prop-types';

export const Button = props => {
   return <>
      <span
         className={'button'}
         {...props}
      >
         {props.children}
      </span>
   </>;
};

Button.propTypes = {
   onClick: PropTypes.func.isRequired,
};
