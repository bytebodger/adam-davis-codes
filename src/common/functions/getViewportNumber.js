import { allow } from '@toolz/allow-react';
import { viewportSizes } from '../arrays/viewportSizes';

export const getViewportNumber = (size = '') => {
   allow.oneOf(size, viewportSizes);
   switch (size) {
      case 'xs':
         return 0;
      case 'sm':
         return 1;
      case 'md':
         return 2;
      case 'lg':
         return 3;
      case 'xl':
      default:
         return 4;
   }
};
