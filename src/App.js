import { UI } from './UI';
import { useSharedHooks } from './common/hooks/useSharedHooks';

export const App = () => {
   useSharedHooks();
   
   return <UI/>;
};
