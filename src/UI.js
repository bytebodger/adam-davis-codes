import { Header } from './Header';
import { Row } from '@toolz/material-ui/dist/Row';
import { getResponsiveSpacing } from './common/functions/getResponsiveSpacing';
import { useViewport } from '@toolz/use-viewport';
import { Home } from './routes/home/Home';
import { Resume } from './routes/resume/Resume';
import { Interests } from './routes/interests/Interests';
import { Projects } from './routes/projects/Projects';
import { Skills } from './routes/skills/Skills';
import { Route, Redirect } from 'react-router-dom';

export const UI = () => {
   const viewport = useViewport();
   
   return <>
      <Header/>
      <Row style={{
         paddingBottom: getResponsiveSpacing(viewport.size, 8, 24),
         paddingRight: getResponsiveSpacing(viewport.size, 16, 80),
      }}>
         <Home/>
         <Interests/>
         <Projects/>
         <Resume/>
         <Skills/>
         <Route>
            <Redirect to={'/home'}/>
         </Route>
      </Row>
   </>;
};
