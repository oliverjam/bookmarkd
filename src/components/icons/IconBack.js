import React from 'react';

function IconBack({ width, height }) {
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
      <path d="M10 6 L2 16 10 26 M2 16 L30 16" />
    </svg>
  );
}

export default IconBack;
