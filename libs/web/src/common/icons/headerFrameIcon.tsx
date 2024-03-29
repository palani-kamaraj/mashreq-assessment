import React from 'react';

export const HeaderFrameIcon = ({
  color,
  width,
  height,
}: {
  color: string;
  width: string;
  height: string;
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="footer-frame"
      data-name="Layer 2"
      preserveAspectRatio="none"
      viewBox="0 0 1920 79"
      height={height}
      width={width}
    >
      <title>{'footer-frame'}</title>
      <path
        d="M0 72.427C143 12.138 255.5 4.577 328.644 7.943c147.721 6.8 183.881 60.242 320.83 53.737 143-6.793 167.826-68.128 293-60.9 109.095 6.3 115.68 54.364 225.251 57.319 113.58 3.064 138.8-47.711 251.189-41.8 104.012 5.474 109.713 50.4 197.369 46.572 89.549-3.91 124.375-52.563 227.622-50.155A338.646 338.646 0 0 1 1920 23.467V79.75H0v-7.323Z"
        style={{
          fill: color ? color : '#ff5e00',
        }}
        transform="translate(0 -.188)"
      />
    </svg>
  );
};
