import { Header } from './Header';
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
import { useConstructor } from '@toolz/use-constructor';
import { use } from './common/objects/use';
import { FAQ } from './routes/faq/FAQ';

export const UI = () => {
   const viewport = useViewport(materialUiBreakpoints);
   
   useConstructor(() => {
      use.devToArticlesEndpoint.loadArticles();
      use.npmDownloadsEndpoint.loadDownloads();
      use.githubReposEndpoint.loadRepos();
   });
   
   return <>
      <div style={{minWidth: 300}}>
         <Header/>
         <Row style={{
            minWidth: 350,
            paddingBottom: getResponsiveSpacing(viewport.size, 8, 24),
            paddingRight: getResponsiveSpacing(viewport.size, 16, 80),
         }}>
            <Email/>
            <FAQ/>
            <Home/>
            <Interests/>
            <Phone/>
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
