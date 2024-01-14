import React from 'react';

const CountryImage = ({ code }: { code: string }) => {
  return (
    <img
      loading="lazy"
      width="20"
      srcSet={`https://flagcdn.com/w40/${code.toLowerCase()}.png 2x`}
      src={`https://flagcdn.com/w20/${code.toLowerCase()}.png`}
      alt=""
    />
  );
};

export default CountryImage;
