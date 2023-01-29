import { UI } from './UI';
import { useSharedHooks } from './common/hooks/useSharedHooks';
import { memo } from 'react';

export const App = memo(() => {
   useSharedHooks();

   return <UI/>;
});
