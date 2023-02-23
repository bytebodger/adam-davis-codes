import { useState, useCallback } from 'react';
import { useAxios } from './useAxios';
import { the } from '../objects/the';

export const useGitHubEndpoint = () => {
   const [repos, setRepos] = useState([]);
   const axios = useAxios();

   const loadRepos = useCallback(async () => {
      const response = await axios.call(the.method.get, 'https://api.github.com/users/bytebodger/repos');
      if (response.status === 200)
         setRepos(response.data);
   }, [axios]);

   return {
      loadRepos,
      repos,
   };
};
