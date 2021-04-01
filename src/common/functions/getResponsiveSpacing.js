import { allow } from '@toolz/allow-react';
import { viewportSizes } from '../arrays/viewportSizes';
import { is } from '../objects/is';
import { getViewportNumber } from './getViewportNumber';

export const getResponsiveSpacing = (size = '', increment = -1, maximum = Number.MAX_SAFE_INTEGER, minimum = 0, adjustment = 0) => {
   allow.oneOf(size, viewportSizes).anInteger(increment, is.not.negative).anInteger(maximum, is.not.negative).anInteger(minimum, is.not.negative).anInteger(adjustment);
   const multiplier = getViewportNumber(size);
   let pixels = (increment * multiplier) + adjustment;
   if (pixels > maximum)
      pixels = maximum;
   else if (pixels < minimum)
      pixels = minimum;
   return pixels;
};
