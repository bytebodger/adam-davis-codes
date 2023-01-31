import { Row } from '@toolz/material-ui/dist/Row';
import { Column } from '@toolz/material-ui/dist/Column';
import { Hidden, Dialog, Slide, AppBar, Toolbar, IconButton, Typography, List, ListItem, ListItemText, Divider } from '@material-ui/core';
import { css3 } from '@toolz/css3/src/css3';
import ReactRotatingText from 'react-rotating-text/lib/ReactRotatingText';
import { useViewport } from '@toolz/use-viewport';
import { getResponsiveSpacing } from './common/functions/getResponsiveSpacing';
import { useLocation, useHistory } from 'react-router';
import { capitalize } from '@toolz/capitalize';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars as hamburgerMenu } from '@fortawesome/free-solid-svg-icons';
import React, { useState, memo, useMemo, useCallback } from 'react';
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

   const style = useMemo(() => {
      return {
         appBar: {
            backgroundColor: the.color.purple,
            position: css3.position.relative,
         },
         div1: {
            backgroundColor: the.color.beige,
            display: css3.dislay.inlineBlock,
            height: 16,
            marginBottom: 2,
            width: 16,
         },
         div2: {
            display: css3.dislay.inlineBlock,
            marginLeft: 24,
         },
         fontAwesomeIcon: {
            color: the.color.purple,
            height: 25,
            width: 25,
         },
         fontSize1_2em: {
            fontSize: '1.2em',
         },
         links: {
            current: {
               cursor: css3.cursor.inherit,
               display: css3.dislay.inlineBlock,
               fontSize: '0.9em',
               fontWeight: css3.fontWeight._600,
               marginLeft: 8,
               marginRight: 8,
               textDecoration: css3.textDecoration.underline,
               textTransform: css3.textTransform.uppercase,
               whiteSpace: css3.whiteSpace.nowrap,
            },
            notCurrent: {
               cursor: css3.cursor.pointer,
               display: css3.dislay.inlineBlock,
               fontSize: '0.9em',
               fontWeight: css3.fontWeight._300,
               marginLeft: 8,
               marginRight: 8,
               textDecoration: css3.textDecoration.inherit,
               textTransform: css3.textTransform.uppercase,
               whiteSpace: css3.whiteSpace.nowrap,
            },
         },
         paddingTop2: {
            paddingTop: 2,
         },
         paddingTop10: {
            paddingTop: 10,
         },
         row: {
            minWidth: 350,
            paddingBottom: getResponsiveSpacing(viewport.size, 8, 24),
            paddingLeft: getResponsiveSpacing(viewport.size, 16, 80),
            paddingRight: getResponsiveSpacing(viewport.size, 16, 80),
            paddingTop: getResponsiveSpacing(viewport.size, 8, 24),
         },
         span1: {
            fontSize: '1.5em',
            fontWeight: css3.fontWeight._600,
            paddingLeft: 8,
         },
         textAlignCenter: {
            textAlign: css3.textAlign.center,
         },
         title: {
            flex: 1,
            position: css3.position.relative,
            right: 18,
            textAlign: css3.textAlign.center,
         },
      };
   }, [viewport.size]);

   const getLinks = useCallback(() => {
      return routes.map((route, index) => {
         const linkName = capitalize.firstLetter(route.replace('/', ''));
         const divStyle = location.pathname === route ? style.links.current : style.links.notCurrent;
         return <div
            key={'link-' + route}
            onClick={location.pathname === route ? null : () => history.push(route)}
            style={divStyle}
         >
            {linkName}
         </div>;
      });
   }, [history, location, routes, style]);

   const getMobileLinks = useCallback(() => {
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
                  style={style.textAlignCenter}
               />
            </ListItem>
            <Divider/>
         </React.Fragment>;
      });
   }, [history, routes, style]);

   return <>
      <Dialog
         fullScreen={true}
         onClick={() => setLinksOpen(false)}
         onClose={() => setLinksOpen(false)}
         open={linksOpen}
         TransitionComponent={Transition}
      >
         <AppBar style={style.appBar}>
            <Toolbar>
               <IconButton
                  color={'inherit'}
                  edge={'start'}
                  onClick={() => setLinksOpen(false)}
               >
                  <Close/>
               </IconButton>
               <Typography
                  style={style.title}
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
         style={style.row}
      >
         <Column>
            <div style={style.div1}/>
            <span style={style.span1}>Adam Nathaniel Davis</span>
            <span
               className={'hidden-print'}
               style={style.fontSize1_2em}
            >:
               <Hidden mdUp={true}>
                  <br/>
                  <div style={style.div2}/>
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
               style={style.paddingTop10}
            >
               {getLinks()}
            </Column>
         </Hidden>
         <Hidden mdUp={true}>
            <Column
               className={'hidden-print'}
               style={style.paddingTop2}
            >
               <FontAwesomeIcon
                  icon={hamburgerMenu}
                  onClick={() => setLinksOpen(true)}
                  style={style.fontAwesomeIcon}
               />
            </Column>
         </Hidden>
      </Row>
   </>;
});
