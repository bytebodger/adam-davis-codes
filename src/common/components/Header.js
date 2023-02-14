import { Row } from '@toolz/material-ui/dist/Row';
import { Column } from '@toolz/material-ui/dist/Column';
import { Hidden, Dialog, Slide, AppBar, Toolbar, IconButton, Typography, List, ListItem, ListItemText, Divider } from '@material-ui/core';
import ReactRotatingText from 'react-rotating-text/lib/ReactRotatingText';
import { useViewport } from '@toolz/use-viewport';
import { getResponsiveSpacing } from '../functions/getResponsiveSpacing';
import { useLocation, useHistory } from 'react-router';
import { capitalize } from '@toolz/capitalize';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars as hamburgerMenu } from '@fortawesome/free-solid-svg-icons';
import React, { useState, memo, useMemo, useCallback } from 'react';
import { Close } from '@material-ui/icons';
import { allow } from '@toolz/allow-react';
import { is } from '../objects/is';
import { materialUiBreakpoints } from '../arrays/materialUiBreakpoints';
import { titles } from '../arrays/titles';
import './css/header.css';
import '../css/baseProperties.css';

const Transition = React.forwardRef(function Transition(props, ref) {
   return <Slide
      direction={'up'}
      ref={ref}
      {...props}
   />;
});

export const Header = memo(() => {
   const [linksOpen, setLinksOpen] = useState(false);
   const history = useHistory();
   const location = useLocation();
   const viewport = useViewport(materialUiBreakpoints);

   const routes = useMemo(() => {
      return [
         '/home',
         '/resume',
         '/projects',
         '/interests',
         '/faq',
      ];
   }, []);

   const getLinks = useCallback(() => {
      return routes.map(route => {
         const linkName = capitalize.firstLetter(route.replace('/', ''));
         return <div
            className={location.pathname === route ? 'currentLink' : 'notCurrentLink'}
            key={'link-' + route}
            onClick={location.pathname === route ? null : () => history.push(route)}
         >
            {linkName}
         </div>;
      });
   }, [history, location, routes]);

   const goToLink = useCallback((event = {}) => {
      allow.anObject(event, is.not.empty);
      history.push('/' + event.target.innerText.toLowerCase());
      setLinksOpen(false);
   }, [history]);

   const getMobileLinks = useCallback(() => {
      return routes.map(route => {
         const linkName = capitalize.firstLetter(route.replace('/', '')).toUpperCase();
         return <React.Fragment key={'mobileLink-' + route}>
            <ListItem
               button={true}
               onClick={goToLink}
            >
               <ListItemText
                  className={'textAlignCenter'}
                  primary={linkName}
               />
            </ListItem>
            <Divider/>
         </React.Fragment>;
      });
   }, [goToLink, routes]);

   const closeLinks = useCallback(() => setLinksOpen(false), []);

   const openLinks = useCallback(() => setLinksOpen(true), []);

   return <>
      <Dialog
         fullScreen={true}
         onClick={closeLinks}
         onClose={closeLinks}
         open={linksOpen}
         TransitionComponent={Transition}
      >
         <AppBar className={'appBar'}>
            <Toolbar>
               <IconButton
                  color={'inherit'}
                  edge={'start'}
                  onClick={closeLinks}
               >
                  <Close/>
               </IconButton>
               <Typography
                  className={'whereTo'}
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
         className={'minWidth_350'}
         justify={'space-between'}
         style={{
            paddingBottom: getResponsiveSpacing(viewport.size, 8, 24),
            paddingLeft: getResponsiveSpacing(viewport.size, 16, 80),
            paddingRight: getResponsiveSpacing(viewport.size, 16, 80),
            paddingTop: getResponsiveSpacing(viewport.size, 8, 24),
         }}
      >
         <Column>
            <div className={'spacerDiv'}/>
            <span className={'name'}>Adam Nathaniel Davis</span>
            <span className={'hidden-print fontSize_1_2em'}>:
               <Hidden mdUp={true}>
                  <br/>
                  <div className={'mobileSpacerDiv'}/>
               </Hidden>
               <Hidden smDown={true}>
                  {` `}
               </Hidden>
               <ReactRotatingText
                  className={'fontStyleNormal'}
                  items={titles}
               />
            </span>
         </Column>
         <Hidden smDown={true}>
            <Column className={'hidden-print paddingTop_10'}>
               {getLinks()}
            </Column>
         </Hidden>
         <Hidden mdUp={true}>
            <Column className={'hidden-print paddingTop_2'}>
               <FontAwesomeIcon
                  className={'fontAwesomeIcon'}
                  icon={hamburgerMenu}
                  onClick={openLinks}
               />
            </Column>
         </Hidden>
      </Row>
   </>;
});
