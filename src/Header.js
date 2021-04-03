import { Row } from '@toolz/material-ui/dist/Row';
import { Column } from '@toolz/material-ui/dist/Column';
import { Hidden, Dialog } from '@material-ui/core';
import { css3 } from '@toolz/css3/src/css3';
import ReactRotatingText from 'react-rotating-text/lib/ReactRotatingText';
import { useViewport } from '@toolz/use-viewport';
import { getResponsiveSpacing } from './common/functions/getResponsiveSpacing';
import { useLocation, useHistory } from 'react-router';
import { capitalize } from '@toolz/capitalize';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars as hamburgerMenu } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';

export const Header = () => {
   const [linksOpen, setLinksOpen] = useState(false);
   const history = useHistory();
   const location = useLocation();
   const viewport = useViewport();
   
   const routes = [
      '/home',
      '/resume',
      '/projects',
      '/skills',
      '/interests',
   ];
   
   const getLinks = () => {
      return routes.map((route, index) => {
         const linkName = capitalize.firstLetter(route.replace('/', ''));
         return <div
            key={'link-' + route}
            onClick={location.pathname === route ? null : () => history.push(route)}
            style={{
               cursor: location.pathname === route ? css3.cursor.inherit : css3.cursor.pointer,
               display: css3.dislay.inlineBlock,
               fontSize: '0.9em',
               fontWeight: location.pathname === route ? css3.fontWeight._600 : css3.fontWeight._300,
               marginLeft: index === 0 ? 0 : 8,
               marginRight: index === (routes.length - 1) ? 0 : 8,
               textDecoration: location.pathname === route ? css3.textDecoration.underline : css3.textDecoration.inherit,
               textTransform: css3.textTransform.uppercase,
               whiteSpace: css3.whiteSpace.nowrap,
            }}
         >
            {linkName}
         </div>;
      });
   };
   
   return <>
      <Dialog
         fullScreen={true}
         onClose={() => setLinksOpen(false)}
         open={linksOpen}
      >
         foo!
      </Dialog>
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
                  'Stack Overflow Pirate',
                  'Senior Software Engineer',
               ]}/>
            </span>
         </Column>
         <Hidden smDown={true}>
            <Column style={{paddingTop: 10}}>
               {getLinks()}
            </Column>
         </Hidden>
         <Hidden mdUp={true}>
            <Column style={{paddingTop: 2}}>
               <FontAwesomeIcon
                  icon={hamburgerMenu}
                  onClick={() => setLinksOpen(true)}
                  style={{
                     height: 25,
                     width: 25,
                  }}
               />
            </Column>
         </Hidden>
      </Row>
   </>;
};
