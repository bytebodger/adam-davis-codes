import { Route } from 'react-router-dom';
import { useMemo, useRef } from 'react';
import { getUrlParameters } from '../../common/functions/getUrlParameters';
import { getAge } from '../../common/functions/getAge';

export const RandomYear = () => {
   const age = useRef('Age of Enlightenment');
   const fontNormal = {fontStyle: 'normal'};
   const year = useRef(0);

   useMemo(() => {
      const urlParameters = getUrlParameters();
      let startYear = 0;
      if (urlParameters.hasOwnProperty('startYear')) {
         const requestedStartYear = parseInt(urlParameters.startYear, 10);
         if (startYear < requestedStartYear)
            startYear = requestedStartYear;
      }
      year.current = Math.floor(Math.random() * (3001 - startYear) + startYear);
      age.current = getAge(year.current);
   }, []);

   return <>
      <Route
         exact={true}
         path={'/random-year'}
      >
         <div style={{
            fontSize: '1.5em',
            padding: '32px',
         }}>
            <span style={fontNormal}>{year.current}</span>, <span style={fontNormal}>{age.current}</span>
         </div>
      </Route>
   </>;
};