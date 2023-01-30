import { getResponsiveSpacing } from './common/functions/getResponsiveSpacing';
import { useViewport } from '@toolz/use-viewport';
import { Row } from '@toolz/material-ui/dist/Row';
import { Column } from '@toolz/material-ui/dist/Column';
import { css3 } from '@toolz/css3/src/css3';
import { Hidden } from '@material-ui/core';
import { materialUiBreakpoints } from './common/arrays/materialUiBreakpoints';
import { FollowIcons } from './common/components/FollowIcons';
import { useHistory } from 'react-router';
import { memo, useMemo } from 'react';

export const Footer = memo(() => {
   const history = useHistory();
   const viewport = useViewport(materialUiBreakpoints);
   const currentDate = new Date();

   const isMobile = useMemo(() => {
      return ['xs', 'sm'].includes(viewport.size);
   }, [viewport.size]);
   const style = useMemo(() => {
      return {
         column1: {
            fontSize: '0.8em',
            minWidth: 350,
         },
         column3: {
            cursor: css3.cursor.pointer,
            marginRight: 16,
            textAlign: css3.textAlign.center,
         },
         column4: {
            cursor: css3.cursor.pointer,
            marginLeft: 16,
            marginRight: 16,
            textAlign: css3.textAlign.center,
         },
         column5: {
            marginLeft: 16,
            textAlign: css3.textAlign.center,
         },
         div1: {
            fontSize: '1.2em',
            fontWeight: css3.fontWeight._600,
         },
         div2: {
            marginBottom: 20,
            marginTop: 12,
         },
         fontSize0_8em: {
            fontSize: '0.8em',
         },
         fontWeight600: {
            fontWeight: css3.fontWeight._600,
         },
         marginTop8: {
            marginTop: 8,
         },
         minWidth350: {
            minWidth: 350,
         },
         paddingLeft16: {
            paddingLeft: 16,
         },
         row1: {
            fontWeight: css3.fontWeight._200,
            minWidth: 350,
            paddingBottom: 96,
            paddingLeft: getResponsiveSpacing(viewport.size, 16, 80),
            paddingRight: getResponsiveSpacing(viewport.size, 16, 80),
            paddingTop: 32,
         },
         width100PercentOrAuto: {
            width: isMobile ? '100%' : css3.width.auto,
         },
      };
   }, [isMobile, viewport.size]);

   return <>
      <Row
         justify={isMobile ? 'space-evenly' : 'space-between'}
         style={style.row1}
      >
         <Hidden mdUp={true}>
            <Column
               style={style.column1}
               xs={12}
            >
               <Row style={style.minWidth350}>
                  <Column
                     xs={6}
                     onClick={() => history.push('/phone')}
                  >
                     <div style={style.div1}>
                        Call
                     </div>
                     <div style={style.div2}>
                        +1-904-434-9210
                     </div>
                  </Column>
                  <Column
                     xs={6}
                     onClick={() => history.push('/email')}
                  >
                     <div style={style.div1}>
                        Write
                     </div>
                     <div style={style.div2}>
                        me@adamdavis{'\u2024'}codes
                     </div>
                  </Column>
               </Row>
               <Row
                  className={'hidden-print'}
                  style={style.minWidth350}
               >
                  <Column xs={12}>
                     <div style={style.div1}>
                        Follow
                     </div>
                     <div style={style.div2}>
                        <FollowIcons dimension={25}/>
                     </div>
                  </Column>
               </Row>
            </Column>
         </Hidden>
         <Column
            className={'hidden-print'}
            style={style.width100PercentOrAuto}
         >
            <div style={style.fontSize0_8em}>
               &copy; {currentDate.getFullYear()} by Adam Nathaniel Davis<br/>
               Lovingly created with JavaScript<br/>
               <div style={style.paddingLeft16}>
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
               <Row style={style.fontSize0_8em}>
                  <Column
                     onClick={() => history.push('/phone')}
                     style={style.column3}
                  >
                     <div style={style.fontWeight600}>
                        Call
                     </div>
                     <div style={style.marginTop8}>
                        +1-904-434-9210
                     </div>
                  </Column>
                  <Column
                     onClick={() => history.push('/email')}
                     style={style.column4}
                  >
                     <div style={style.fontWeight600}>
                        Write
                     </div>
                     <div style={style.marginTop8}>
                        me@adamdavis{'\u2024'}codes
                     </div>
                  </Column>
                  <Column
                     className={'hidden-print'}
                     style={style.column5}
                  >
                     <div style={style.fontWeight600}>
                        Follow
                     </div>
                     <div style={style.marginTop8}>
                        <FollowIcons dimension={19}/>
                     </div>
                  </Column>
               </Row>
            </Column>
         </Hidden>
      </Row>
   </>;
});
