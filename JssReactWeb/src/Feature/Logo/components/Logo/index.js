import React from 'react';
import { Text, Image, Link } from '@sitecore-jss/sitecore-jss-react';

/**
 * A simple Logo component. 
 */
const Logo = ({ fields }) => (
      <Link field={fields.Anchor}>
        <Image media={fields.LogoImage} />
      </Link>
);

export default Logo;