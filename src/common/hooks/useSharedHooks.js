import { use } from '../objects/use';
import { useDevToEndpoint } from './useDevToEndpoint';
import { useNpmEndpoint } from './useNpmEndpoint';
import { useGitHubEndpoint } from './useGitHubEndpoint';

export const useSharedHooks = () => {
   use.devToArticlesEndpoint = useDevToEndpoint();
   use.githubReposEndpoint = useGitHubEndpoint();
   use.npmDownloadsEndpoint = useNpmEndpoint();
};
