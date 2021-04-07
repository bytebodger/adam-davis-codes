import { use } from '../objects/use';
import { useDevToArticlesEndpoint } from './useDevToArticlesEndpoint';
import { useNpmDownloadsEndpoint } from './useNpmDownloadsEndpoint';
import { useGithubReposEndpoint } from './useGithubReposEndpoint';

export const useSharedHooks = () => {
   use.devToArticlesEndpoint = useDevToArticlesEndpoint();
   use.githubReposEndpoint = useGithubReposEndpoint();
   use.npmDownloadsEndpoint = useNpmDownloadsEndpoint();
};
