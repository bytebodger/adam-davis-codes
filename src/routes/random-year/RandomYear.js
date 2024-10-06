import { Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

export const RandomYear = () => {
   const [age, setAge] = useState('Age of Enlightenment');
   const [year, setYear] = useState(0);

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

   useEffect(() => {
      const urlParameters = getUrlParameters();
      let startYear = 0;
      if (urlParameters.hasOwnProperty('startYear')) {
         const requestedStartYear = parseInt(urlParameters.startYear, 10);
         if (startYear < requestedStartYear)
            startYear = requestedStartYear;
      }
      setYear(Math.floor(Math.random() * (3001 - startYear) + startYear));
      if (year < 1085)
         setAge('Age of Antiquity');
      else if (year < 2019)
         setAge('Age of Expansion');
   });

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