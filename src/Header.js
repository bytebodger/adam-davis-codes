import { Row } from '@toolz/material-ui/dist/Row';
import { Column } from '@toolz/material-ui/dist/Column';
import { Hidden } from '@material-ui/core';
import { css3 } from '@toolz/css3/src/css3';
import ReactRotatingText from 'react-rotating-text/lib/ReactRotatingText';
import { useViewport } from '@toolz/use-viewport';
import { getResponsiveSpacing } from './common/functions/getResponsiveSpacing';

export const Header = () => {
   const viewport = useViewport();
   
   return <>
      <Row
         justify={'space-between'}
         style={{
            paddingBottom: getResponsiveSpacing(viewport.size, 8, 24),
            paddingLeft: getResponsiveSpacing(viewport.size, 16, 80),
            paddingRight: getResponsiveSpacing(viewport.size, 16, 80),
            paddingTop: getResponsiveSpacing(viewport.size, 8, 24),
         }}
      >
         <Column>
            <div style={{
               backgroundColor: '#eaba6b',
               display: css3.dislay.inlineBlock,
               height: 16,
               marginBottom: 2,
               width: 16,
            }}/>
            <span style={{
               fontSize: '1.5em',
               fontWeight: css3.fontWeight._600,
               paddingLeft: 8,
            }}>Adam Nathaniel Davis</span>
            <span style={{fontSize: '1.2em'}}>:
               <Hidden mdUp={true}>
                  <br/>
                  <div style={{
                     display: css3.dislay.inlineBlock,
                     marginLeft: 24,
                  }}/>
               </Hidden>
               <Hidden smDown={true}>
                  {` `}
               </Hidden>
               <ReactRotatingText items={[
                  'React Acolyte',
                  'JavaScript Ninja',
                  'Full-Stack Developer',
                  'Senior Software Engineer',
               ]}/>
            </span>
         </Column>
         <Column>
            <div style={{
               border: '1px solid red',
               textTransform: css3.textTransform.capitalize,
               whiteSpace: css3.whiteSpace.nowrap,
            }}>
               foo?
            </div>
         </Column>
      </Row>
   </>;
};
