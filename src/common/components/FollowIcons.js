import * as PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDev as devTo, faGithub as github, faNpm as npm, faFacebookF as facebook, faTwitter as twitter, faLinkedinIn as linkedIn, faInstagram as instagram, faYoutube as youtube } from '@fortawesome/free-brands-svg-icons';
import { memo } from 'react';
import '../css/baseProperties.css';

export const FollowIcons = memo(props => {
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
               height: props.dimension,
               width: props.dimension,
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
            className={'marginLeft_8'}
            icon={github}
            style={{
               height: props.dimension,
               width: props.dimension,
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
            className={'marginLeft_8'}
            icon={npm}
            style={{
               height: props.dimension,
               width: props.dimension,
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
            className={'marginLeft_8'}
            icon={facebook}
            style={{
               height: props.dimension,
               width: props.dimension,
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
            className={'marginLeft_8'}
            icon={twitter}
            style={{
               height: props.dimension,
               width: props.dimension,
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
            className={'marginLeft_8'}
            icon={linkedIn}
            style={{
               height: props.dimension,
               width: props.dimension,
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
            className={'marginLeft_8'}
            icon={instagram}
            style={{
               height: props.dimension,
               width: props.dimension,
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
            className={'marginLeft_8'}
            icon={youtube}
            style={{
               height: props.dimension,
               width: props.dimension,
            }}
         />
      </a>
   </>;
});

FollowIcons.propTypes = {
   dimension: PropTypes.number,
};
FollowIcons.defaultProps = {
   dimension: 25,
};
