import { useState } from 'react';
import { useAxios } from './useAxios';
import { the } from '../objects/the';

export const useGithubReposEndpoint = () => {
   const [repos, setRepos] = useState([]);
   const axios = useAxios();
   
   const loadRepos = async () => {
      const response = await axios.call(the.method.get, 'https://api.github.com/users/bytebodger/repos');
      console.log(response.data);
      if (response.status === 200)
         setRepos(response.data);
   };
   
   return {
      loadRepos,
      repos,
   };
};
