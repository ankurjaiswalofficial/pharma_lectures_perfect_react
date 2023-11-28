// CustomImage.js

import React from 'react';

const Image = ({ src, alt, ...rest }) => {
  return (
    <>
    <link rel="preload" as="image" href={src} />
    <img
      src={src}
      alt={alt}
      {...rest}
      loading="lazy" // Add lazy loading
    />
    </>
  );
};

export default Image;
