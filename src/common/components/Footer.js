import { getResponsiveSpacing } from '../functions/getResponsiveSpacing';
import { useViewport } from '@toolz/use-viewport';
import { Row } from '@toolz/material-ui/dist/Row';
import { Column } from '@toolz/material-ui/dist/Column';
import { css3 } from '@toolz/css3/src/css3';
import { Hidden } from '@material-ui/core';
import { materialUiBreakpoints } from '../arrays/materialUiBreakpoints';
import { FollowIcons } from './FollowIcons';
import { useHistory } from 'react-router';
import { memo, useMemo, useCallback } from 'react';
import './css/footer.css';
import '../css/baseProperties.css';

export const Footer = memo(() => {
   const history = useHistory();
   const viewport = useViewport(materialUiBreakpoints);
   const currentDate = new Date();

   const isMobile = useMemo(() => {
      return ['xs', 'sm'].includes(viewport.size);
   }, [viewport.size]);

   const goToEmail = useCallback(() => history.push('/email'), [history]);

   const goToPhone = useCallback(() => history.push('/phone'), [history]);

   return <>
      <Row
         className={'rowContainer'}
         justify={isMobile ? 'space-evenly' : 'space-between'}
         style={{
            paddingLeft: getResponsiveSpacing(viewport.size, 16, 80),
            paddingRight: getResponsiveSpacing(viewport.size, 16, 80),
         }}
      >
         <Hidden mdUp={true}>
            <Column
               className={'mobileContainerColumn'}
               xs={12}
            >
               <Row className={'minWidth_350'}>
                  <Column
                     xs={6}
                     onClick={goToPhone}
                  >
                     <div className={'mobileTitleDiv'}>
                        Call
                     </div>
                     <div className={'mobileValueDiv'}>
                        +1-904-434-9210
                     </div>
                  </Column>
                  <Column
                     xs={6}
                     onClick={goToEmail}
                  >
                     <div className={'mobileTitleDiv'}>
                        Email
                     </div>
                     <div className={'mobileValueDiv'}>
                        me@adamdavis{'\u2024'}codes
                     </div>
                  </Column>
               </Row>
               <Row className={'hidden-print minWidth_350'}>
                  <Column xs={12}>
                     <div className={'mobileTitleDiv'}>
                        Follow
                     </div>
                     <div className={'mobileValueDiv'}>
                        <FollowIcons dimension={25}/>
                     </div>
                  </Column>
               </Row>
            </Column>
         </Hidden>
         <Column
            className={'hidden-print paddingLeft_24'}
            style={{width: isMobile ? '100%' : css3.width.auto}}
         >
            <div className={'fontSize_0_8em'}>
               &copy; {currentDate.getFullYear()} by Adam Nathaniel Davis<br/>
               Lovingly created with TypeScript<br/>
               <div className={'paddingLeft_16'}>
                  & React<br/>
                  & GitHub<br/>
                  & NPM<br/>
                  & AWS<br/>
                  & Material UI<br/>
                  & My Own Two Hands
               </div>
            </div>
         </Column>
         <Hidden smDown={true}>
            <Column>
               <Row className={'fontSize_0_8em'}>
                  <Column
                     className={'phoneColumn'}
                     onClick={goToPhone}
                  >
                     <div className={'fontWeight_600'}>
                        Call
                     </div>
                     <div className={'marginTop_8'}>
                        +1-904-434-9210
                     </div>
                  </Column>
                  <Column
                     className={'emailColumn'}
                     onClick={goToEmail}
                  >
                     <div className={'fontWeight_600'}>
                        Email
                     </div>
                     <div className={'marginTop_8'}>
                        me@adamdavis{'\u2024'}codes
                     </div>
                  </Column>
                  <Column className={'hidden-print followColumn'}>
                     <div className={'fontWeight_600'}>
                        Follow
                     </div>
                     <div className={'marginTop_8'}>
                        <FollowIcons dimension={19}/>
                     </div>
                  </Column>
               </Row>
            </Column>
         </Hidden>
      </Row>
   </>;
});
