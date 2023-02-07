import { Row } from '@toolz/material-ui/dist/Row';
import { getResponsiveSpacing } from './common/functions/getResponsiveSpacing';
import { useViewport } from '@toolz/use-viewport';
import { Home } from './routes/home/Home';
import { Resume } from './routes/resume/Resume';
import { Interests } from './routes/interests/Interests';
import { Projects } from './routes/projects/Projects';
import { Route, Redirect } from 'react-router-dom';
import { materialUiBreakpoints } from './common/arrays/materialUiBreakpoints';
import { Email } from './routes/email/Email';
import { Phone } from './routes/phone/Phone';
import { use } from './common/objects/use';
import { FAQ } from './routes/faq/FAQ';
import { useMemo, useEffect } from 'react';
import { PrintResume } from './routes/print-resume/PrintResume';

export const UI = () => {
   const viewport = useViewport(materialUiBreakpoints);

   useEffect(() => {
      use.devToArticlesEndpoint.loadArticles();
      use.npmDownloadsEndpoint.loadDownloads();
      use.githubReposEndpoint.loadRepos();
   }, []);

   const style = useMemo(() => {
      return {
         minWidth300: {
            minWidth: 300,
         },
         row: {
            minWidth: 350,
            paddingBottom: getResponsiveSpacing(viewport.size, 8, 24),
            paddingRight: getResponsiveSpacing(viewport.size, 16, 80),
         },
      };
   }, [viewport.size]);

   return <>
      <div style={style.minWidth300}>
         <Row style={style.row}>
            <Email/>
            <FAQ/>
            <Home/>
            <Interests/>
            <Phone/>
            <PrintResume/>
            <Projects/>
            <Resume/>
            <Route
               exact={true}
               path={'/'}
            >
               <Redirect to={'/home'}/>
            </Route>
         </Row>
      </div>
   </>;
};
