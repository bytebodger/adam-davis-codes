import { Row } from '@toolz/material-ui/dist/Row';
import { Column } from '@toolz/material-ui/dist/Column';
import { Hidden, Dialog, Slide, makeStyles, AppBar, Toolbar, IconButton, Typography, List, ListItem, ListItemText, Divider } from '@material-ui/core';
import { css3 } from '@toolz/css3/src/css3';
import ReactRotatingText from 'react-rotating-text/lib/ReactRotatingText';
import { useViewport } from '@toolz/use-viewport';
import { getResponsiveSpacing } from './common/functions/getResponsiveSpacing';
import { useLocation, useHistory } from 'react-router';
import { capitalize } from '@toolz/capitalize';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars as hamburgerMenu } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import { Close } from '@material-ui/icons';
import { allow } from '@toolz/allow-react';
import { is } from './common/objects/is';
import { the } from './common/objects/the';
import { materialUiBreakpoints } from './common/arrays/materialUiBreakpoints';
import { titles } from './common/arrays/titles';

const Transition = React.forwardRef(function Transition(props, ref) {
   return <Slide
      direction={'up'}
      ref={ref}
      {...props}
   />;
});

export const Header = () => {
   const [linksOpen, setLinksOpen] = useState(false);
   const history = useHistory();
   const location = useLocation();
   const viewport = useViewport(materialUiBreakpoints);
   
   const routes = [
      '/home',
      '/resume',
      '/projects',
      '/interests',
      '/faq',
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
   
   const getMobileLinks = () => {
      const goToLink = (route = '') => {
         allow.aString(route, is.not.empty);
         history.push(route);
         setLinksOpen(false);
      };
      
      return routes.map(route => {
         const linkName = capitalize.firstLetter(route.replace('/', '')).toUpperCase();
         return <React.Fragment key={'mobileLink-' + route}>
            <ListItem
               button={true}
               onClick={() => goToLink(route)}
            >
               <ListItemText
                  primary={linkName}
                  style={{textAlign: css3.textAlign.center}}
               />
            </ListItem>
            <Divider/>
         </React.Fragment>;
      });
   };
   
   const getStyles = makeStyles(() => {
      return {
         appBar: {
            backgroundColor: the.color.purple,
            position: css3.position.relative,
         },
         title: {
            flex: 1,
            position: css3.position.relative,
            right: 18,
            textAlign: css3.textAlign.center,
         },
      };
   });
   
   return <>
      <Dialog
         fullScreen={true}
         onClick={() => setLinksOpen(false)}
         onClose={() => setLinksOpen(false)}
         open={linksOpen}
         TransitionComponent={Transition}
      >
         <AppBar className={getStyles().appBar}>
            <Toolbar>
               <IconButton
                  color={'inherit'}
                  edge={'start'}
                  onClick={() => setLinksOpen(false)}
               >
                  <Close/>
               </IconButton>
               <Typography
                  className={getStyles().title}
                  variant={'h6'}
               >
                  Where To?
               </Typography>
            </Toolbar>
         </AppBar>
         <List>
            {getMobileLinks()}
         </List>
      </Dialog>
      <Row
         justify={'space-between'}
         style={{
            minWidth: 350,
            paddingBottom: getResponsiveSpacing(viewport.size, 8, 24),
            paddingLeft: getResponsiveSpacing(viewport.size, 16, 80),
            paddingRight: getResponsiveSpacing(viewport.size, 16, 80),
            paddingTop: getResponsiveSpacing(viewport.size, 8, 24),
         }}
      >
         <Column>
            <div style={{
               backgroundColor: the.color.beige,
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
            <span
               className={'hidden-print'}
               style={{fontSize: '1.2em'}}
            >:
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
               <ReactRotatingText items={titles}/>
            </span>
         </Column>
         <Hidden smDown={true}>
            <Column
               className={'hidden-print'}
               style={{paddingTop: 10}}
            >
               {getLinks()}
            </Column>
         </Hidden>
         <Hidden mdUp={true}>
            <Column
               className={'hidden-print'}
               style={{paddingTop: 2}}
            >
               <FontAwesomeIcon
                  icon={hamburgerMenu}
                  onClick={() => setLinksOpen(true)}
                  style={{
                     color: the.color.purple,
                     height: 25,
                     width: 25,
                  }}
               />
            </Column>
         </Hidden>
      </Row>
   </>;
};
