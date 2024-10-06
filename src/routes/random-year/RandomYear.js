import { Route } from 'react-router-dom';
import { useMemo, useRef } from 'react';

export const RandomYear = () => {
   const age = useRef('Age of Enlightenment');
   const year = useRef(0);

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
      year.current = Math.floor(Math.random() * (3001 - startYear) + startYear);
      if (year.current < 1085)
         age.current = 'Age of Antiquity';
      else if (year.current < 2019)
         age.current = 'Age of Expansion';
   }, []);

   return <>
      <Route
         exact={true}
         path={'/random-year'}
      >
         <div style={{
            fontSize: '1.5em',
            fontStyle: 'normal',
            fontWeight: 'bold',
         }}>
            <span>{year.current}</span>, <span>{age.current}</span>
         </div>
      </Route>
   </>;
};