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
import { materialUiBreakpoints } from './common/arrays/materialUiBreakpoints';
import { Email } from './routes/email/Email';

export const UI = () => {
   const viewport = useViewport(materialUiBreakpoints);
   
   return <>
      <div style={{minWidth: 300}}>
         <Header/>
         <Row style={{
            minWidth: 350,
            paddingBottom: getResponsiveSpacing(viewport.size, 8, 24),
            paddingRight: getResponsiveSpacing(viewport.size, 16, 80),
         }}>
            <Email/>
            <Home/>
            <Interests/>
            <Projects/>
            <Resume/>
            <Skills/>
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
