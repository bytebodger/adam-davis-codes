import { Route } from 'react-router-dom';
import { useMemo } from 'react';

export const RandomYear = () => {
   let age = 'Age of Enlightenment';
   let year = 0;

   const getUrlParameters = () => {
      const urlParams = new URLSearchParams(window.location.search);
      let processedUrlParams = {};
      for (let entry of urlParams.entries()) {
         let [key, value] = entry;
         if (value.toLowerCase() === 'true')
            value = true;
         else if (value.toLowerCase() === 'false')
            value = false;
         else if (value.toLowerCase() === 'null')
            value = null;
         else if (!isNaN(parseFloat(value)))
            value = parseFloat(value);
         processedUrlParams[key] = value;
      }
      return processedUrlParams;
   };

   useMemo(() => {
      const urlParameters = getUrlParameters();
      let startYear = 0;
      if (urlParameters.hasOwnProperty('startYear')) {
         const requestedStartYear = parseInt(urlParameters.startYear, 10);
         if (startYear < requestedStartYear)
            startYear = requestedStartYear;
      }
      year = Math.floor(Math.random() * (3001 - startYear) + startYear);
      if (year < 1085)
         age = 'Age of Antiquity';
      else if (year < 2019)
         age = 'Age of Expansion';
   }, [])

   return <>
      <Route
         exact={true}
         path={'/random-year'}
       >
         <div>
            <span>{year}</span>, <span>{age}</span>
         </div>
      </Route>
   </>
}