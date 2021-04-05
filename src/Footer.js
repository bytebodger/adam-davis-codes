import { getResponsiveSpacing } from './common/functions/getResponsiveSpacing';
import { useViewport } from '@toolz/use-viewport';
import { Row } from '@toolz/material-ui/dist/Row';
import { Column } from '@toolz/material-ui/dist/Column';
import { css3 } from '@toolz/css3/src/css3';
import { Hidden } from '@material-ui/core';
import { materialUiBreakpoints } from './common/arrays/materialUiBreakpoints';
import { FollowIcons } from './common/components/FollowIcons';

export const Footer = () => {
   const viewport = useViewport(materialUiBreakpoints);
   const currentDate = new Date();
   const isMobile = ['xs', 'sm'].includes(viewport.size);

   return <>
      <Row
         justify={isMobile ? 'space-evenly' : 'space-between'}
         style={{
            fontWeight: css3.fontWeight._200,
            minWidth: 350,
            paddingBottom: getResponsiveSpacing(viewport.size, 8, 24),
            paddingLeft: getResponsiveSpacing(viewport.size, 16, 80),
            paddingRight: getResponsiveSpacing(viewport.size, 16, 80),
            paddingTop: 32,
         }}
      >
         <Hidden mdUp={true}>
            <Column
               style={{
                  fontSize: '0.8em',
                  minWidth: 350,
               }}
               xs={12}
            >
               <Row style={{minWidth: 350}}>
                  <Column xs={6}>
                     <div style={{
                        fontSize: '1.2em',
                        fontWeight: css3.fontWeight._600,
                     }}>
                        Call
                     </div>
                     <div style={{
                        marginBottom: 20,
                        marginTop: 12,
                     }}>
                        +1-904-434-9210
                     </div>
                  </Column>
                  <Column xs={6}>
                     <div style={{
                        fontSize: '1.2em',
                        fontWeight: css3.fontWeight._600,
                     }}>
                        Write
                     </div>
                     <div style={{
                        marginBottom: 20,
                        marginTop: 12,
                     }}>
                        me@adamdavis.codes
                     </div>
                  </Column>
               </Row>
               <Row
                  className={'hidden-print'}
                  style={{minWidth: 350}}
               >
                  <Column xs={12}>
                     <div style={{
                        fontSize: '1.2em',
                        fontWeight: css3.fontWeight._600,
                     }}>
                        Follow
                     </div>
                     <div style={{
                        marginBottom: 20,
                        marginTop: 12,
                     }}>
                        <FollowIcons dimension={25}/>
                     </div>
                  </Column>
               </Row>
            </Column>
         </Hidden>
         <Column
            className={'hidden-print'}
            style={{width: isMobile ? '100%' : css3.width.auto}}
         >
            <div style={{fontSize: '0.8em'}}>
               &copy; {currentDate.getFullYear()} by Adam Nathaniel Davis<br/>
               Lovingly created with JavaScript<br/>
               <div style={{paddingLeft: 16}}>
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
               <Row style={{fontSize: '0.8em'}}>
                  <Column style={{
                     marginRight: 16,
                     textAlign: css3.textAlign.center,
                  }}>
                     <div style={{fontWeight: css3.fontWeight._600}}>
                        Call
                     </div>
                     <div style={{marginTop: 8}}>
                        +1-904-434-9210
                     </div>
                  </Column>
                  <Column style={{
                     marginLeft: 16,
                     marginRight: 16,
                     textAlign: css3.textAlign.center,
                  }}>
                     <div style={{fontWeight: css3.fontWeight._600}}>
                        Write
                     </div>
                     <div style={{marginTop: 8}}>
                        me@adamdavis.codes
                     </div>
                  </Column>
                  <Column
                     className={'hidden-print'}
                     style={{
                        marginLeft: 16,
                        textAlign: css3.textAlign.center,
                     }}
                  >
                     <div style={{fontWeight: css3.fontWeight._600}}>
                        Follow
                     </div>
                     <div style={{marginTop: 8}}>
                        <FollowIcons dimension={19}/>
                     </div>
                  </Column>
               </Row>
            </Column>
         </Hidden>
      </Row>
   </>;
};
