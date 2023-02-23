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
import { useEffect } from 'react';
import { PrintResume } from './routes/print-resume/PrintResume';
import './common/css/baseProperties.css';

export const UI = () => {
   const viewport = useViewport(materialUiBreakpoints);

   useEffect(() => {
      use.devToArticlesEndpoint.loadArticles();
      use.githubReposEndpoint.loadRepos();
      use.npmDownloadsEndpoint.loadDownloads();
   }, []);

   return <>
      <div className={'minWidth_300'}>
         <Row
            className={'minWidth_350'}
            style={{
               paddingBottom: getResponsiveSpacing(viewport.size, 8, 24),
               paddingRight: getResponsiveSpacing(viewport.size, 16, 80),
            }}
         >
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