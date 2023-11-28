// CustomLink.js

import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

const Link = ({ href, children, ...rest }) => {
  return (
    <RouterLink to={href} {...rest}>
      {children}
    </RouterLink>
  );
};

export default Link;
