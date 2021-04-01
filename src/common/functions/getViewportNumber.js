import { allow } from '@toolz/allow-react';
import { viewportSizes } from '../arrays/viewportSizes';

export const getViewportNumber = (size = '') => {
   allow.oneOf(size, viewportSizes);
   switch (size) {
      case 'xs':
         return 1;
      case 'sm':
         return 2;
      case 'md':
         return 3;
      case 'lg':
         return 4;
      case 'xl':
      default:
         return 5;
   }
};
