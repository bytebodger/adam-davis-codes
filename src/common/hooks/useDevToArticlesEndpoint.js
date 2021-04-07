import { useState } from 'react';
import { useAxios } from './useAxios';
import { the } from '../objects/the';

export const useDevToArticlesEndpoint = () => {
   const [articles, setArticles] = useState([]);
   const axios = useAxios();
   
   const getArticles = async () => {
      const response = await axios.call(the.method.get, 'https://dev.to/api/articles?username=bytebodger&per_page=1000');
      console.log(response);
      if (response.status === 200)
         setArticles(response.data);
   };
   
   return {
      articles,
      getArticles,
   };
};
