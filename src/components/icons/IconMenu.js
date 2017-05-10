import React from 'react';

function IconMenu({ width, height, description }) {
  return (
    <svg
      viewBox="0 0 32 32"
      width={width || '32'}
      height={height || '32'}
      fill="none"
      stroke="currentcolor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <title>{description || ''}</title>
      <path d="M4 8 L28 8 M4 16 L28 16 M4 24 L28 24" />
    </svg>
  );
}

export default IconMenu;
