import { useState } from 'react';
import { the } from '../objects/the';
import { useAxios } from './useAxios';

export const useNpmDownloadsEndpoint = () => {
   const [downloads, setDownloads] = useState(0);
   const [npmPackages, setNpmPackages] = useState(the.npm.packages);
   const axios = useAxios();

   const loadDownloads = () => {
      Object.keys(npmPackages).forEach(npmPackage => {
         axios.call(
            the.method.get, 'https://api.npmjs.org/downloads/point/2019-01-01:2050-01-01/@toolz/' + npmPackage,
         ).then(response => {
            if (!response?.data?.downloads)
               return;
            setNpmPackages(previousNpmPackages => {
               previousNpmPackages[npmPackage] = response.data.downloads;
               return previousNpmPackages;
            });
            setDownloads(previousDownloads => previousDownloads + response.data.downloads);
         }).catch(() => {
            // no downloads yet for this package
         });
      });
   };

   return {
      downloads,
      loadDownloads,
      npmPackages,
   };
};
