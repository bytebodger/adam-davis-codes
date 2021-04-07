import { use } from '../objects/use';
import { useDevToArticlesEndpoint } from './useDevToArticlesEndpoint';
import { useNpmDownloadsEndpoint } from './useNpmDownloadsEndpoint';

export const useSharedHooks = () => {
   use.devToArticlesEndpoint = useDevToArticlesEndpoint();
   use.npmDownloadsEndpoint = useNpmDownloadsEndpoint();
};
