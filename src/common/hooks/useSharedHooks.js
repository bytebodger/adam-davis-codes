import { use } from '../objects/use';
import { useDevToArticlesEndpoint } from './useDevToArticlesEndpoint';

export const useSharedHooks = () => {
   use.devToArticlesEndpoint = useDevToArticlesEndpoint();
};
