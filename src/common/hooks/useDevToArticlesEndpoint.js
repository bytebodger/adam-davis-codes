import { useState, useCallback } from 'react';
import { useAxios } from './useAxios';
import { the } from '../objects/the';

export const useDevToArticlesEndpoint = () => {
   const [articles, setArticles] = useState([]);
   const axios = useAxios();

   const loadArticles = useCallback(async () => {
      const response = await axios.call(the.method.get, 'https://dev.to/api/articles?username=bytebodger&per_page=1000');
      if (response.status === 200)
         setArticles(response.data);
   }, [axios]);

   return {
      articles,
      loadArticles,
   };
};
