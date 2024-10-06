import { Route } from 'react-router-dom';

export const RandomYear = () => {
   return <>
      <Route
         exact={true}
         path={'/random-year'}
       >
         Random Year!
      </Route>
   </>
}