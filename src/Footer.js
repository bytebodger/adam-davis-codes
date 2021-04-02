import { getResponsiveSpacing } from './common/functions/getResponsiveSpacing';
import { useViewport } from '@toolz/use-viewport';
import { Row } from '@toolz/material-ui/dist/Row';
import { Column } from '@toolz/material-ui/dist/Column';
import { css3 } from '@toolz/css3/src/css3';
import { Hidden } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF as facebook, faTwitter as twitter, faLinkedinIn as linkedIn, faInstagram as instagram, faGithub as github, faDev as devTo, faYoutube as youtube, faNpm as npm } from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
   const viewport = useViewport();
   const currentDate = new Date();
   const isMobile = ['xs', 'sm'].includes(viewport.size);
   
   const getFollowIcons = () => {
      const dimension = isMobile ? 25 : 19;
      return <>
         <a
            href={'https://dev.to/bytebodger'}
            rel={'noreferrer'}
            target={'_blank'}
            title={'All my blog articles about software engineering'}
         >
            <FontAwesomeIcon
               icon={devTo}
               style={{
                  height: dimension,
                  width: dimension,
               }}
            />
         </a>
         <a
            href={'https://github.com/bytebodger'}
            rel={'noreferrer'}
            target={'_blank'}
            title={'All my public GitHub repositories'}
         >
            <FontAwesomeIcon
               icon={github}
               style={{
                  height: dimension,
                  marginLeft: 8,
                  width: dimension,
               }}
            />
         </a>
         <a
            href={'https://www.npmjs.com/search?q=%40toolz'}
            rel={'noreferrer'}
            target={'_blank'}
            title={'All the packages I\'ve published to NPM'}
         >
            <FontAwesomeIcon
               icon={npm}
               style={{
                  height: dimension,
                  marginLeft: 8,
                  width: dimension,
               }}
            />
         </a>
         <a
            href={'https://www.facebook.com/jaxcreator'}
            rel={'noreferrer'}
            target={'_blank'}
            title={'The Facebook home for all my creative endeavors'}
         >
            <FontAwesomeIcon
               icon={facebook}
               style={{
                  height: dimension,
                  marginLeft: 8,
                  width: dimension,
               }}
            />
         </a>
         <a
            href={'https://twitter.com/WritingVoyage'}
            rel={'noreferrer'}
            target={'_blank'}
            title={'I don\'t use Twitter much - but here it is'}
         >
            <FontAwesomeIcon
               icon={twitter}
               style={{
                  height: dimension,
                  marginLeft: 8,
                  width: dimension,
               }}
            />
         </a>
         <a
            href={'https://www.linkedin.com/in/bytebodger/'}
            rel={'noreferrer'}
            target={'_blank'}
            title={'The place where all the recruiters hunt me down'}
         >
            <FontAwesomeIcon
               icon={linkedIn}
               style={{
                  height: dimension,
                  marginLeft: 8,
                  width: dimension,
               }}
            />
         </a>
         <a
            href={'https://www.instagram.com/bytebodger/'}
            rel={'noreferrer'}
            target={'_blank'}
            title={'A picto-diary of my paintings'}
         >
            <FontAwesomeIcon
               icon={instagram}
               style={{
                  height: dimension,
                  marginLeft: 8,
                  width: dimension,
               }}
            />
         </a>
         <a
            href={'https://www.youtube.com/channel/UCHNDtVFC4WQTcp_awD9c1Ag'}
            rel={'noreferrer'}
            target={'_blank'}
            title={'Videos mostly dedicated to visual arts'}
         >
            <FontAwesomeIcon
               icon={youtube}
               style={{
                  height: dimension,
                  marginLeft: 8,
                  width: dimension,
               }}
            />
         </a>
      </>;
   };
   
   return <>
      <Row
         justify={isMobile ? 'space-evenly' : 'space-between'}
         style={{
            fontWeight: css3.fontWeight._200,
            paddingBottom: getResponsiveSpacing(viewport.size, 8, 24),
            paddingLeft: getResponsiveSpacing(viewport.size, 16, 80),
            paddingRight: getResponsiveSpacing(viewport.size, 16, 80),
            paddingTop: getResponsiveSpacing(viewport.size, 8, 24),
         }}
      >
         <Hidden mdUp={true}>
            <Column style={{
               fontSize: '0.8em',
               width: '100%',
            }}>
               <Row>
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
               <Row>
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
                        {getFollowIcons()}
                     </div>
                  </Column>
               </Row>
            </Column>
         </Hidden>
         <Column style={{width: isMobile ? '100%' : css3.width.auto}}>
            <div style={{fontSize: '0.8em'}}>
               &copy; {currentDate.getFullYear()} by Adam Nathaniel Davis<br/>
               Lovingly created with JavaScript<br/>
               <div style={{paddingLeft: 16}}>
                  & React<br/>
                  & GitHub<br/>
                  & NPM<br/>
                  & AWS<br/>
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
                  <Column style={{
                     marginLeft: 16,
                     textAlign: css3.textAlign.center,
                  }}>
                     <div style={{fontWeight: css3.fontWeight._600}}>
                        Follow
                     </div>
                     <div style={{marginTop: 8}}>
                        {getFollowIcons()}
                     </div>
                  </Column>
               </Row>
            </Column>
         </Hidden>
      </Row>
   </>;
};
