import { allow } from '@toolz/allow-react';
import { the } from '../objects/the';
import { is } from '../objects/is';
import axios from 'axios';
import { useCallback } from 'react';

export const useAxios = () => {
   const call = useCallback(async (method = '', url = '', data = {}, headers = {}) => {
      allow.oneOf(method, the.method).aString(url, is.not.empty).anObject(data).anObject(headers);
      let response;
      if (method === the.method.get) {
         response = await axios({
            headers,
            method,
            params: data,
            url,
         }).catch(error => Promise.resolve(error));
      }
      return response;
   }, []);

   return {
      call,
   };
};
