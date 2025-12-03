import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function SlideImage({ src, alt = "", ...props }) {
  const resolvedSrc = useBaseUrl(src);

  return (
    <img
      src={resolvedSrc}
      alt={alt}
      style={{
        maxWidth: "100%",
        height: "auto",
        display: "block",
        margin: "0 auto"
      }}
      {...props}
    />
  );
}
