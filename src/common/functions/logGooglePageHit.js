import { allow } from '@toolz/allow-react';
import { is } from '../objects/is';
import { getEnvironment } from './getEnvironment';

export const logGooglePageHit = (page = '') => {
   allow.aString(page, is.not.empty);
   if (getEnvironment() === 'localhost')
      return;
   // eslint-disable-next-line no-undef
   gtag('config', 'G-3B6EP6KQL0', {'page_title': page});
};
