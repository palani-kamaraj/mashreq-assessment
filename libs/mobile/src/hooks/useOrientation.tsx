import { useEffect, useState } from 'react';
import { Dimensions } from 'react-native';
import { IOrientationType } from '@types';

const isPortrait = () => {
  const dim = Dimensions.get('screen');
  return dim.height >= dim.width;
};

export const useOrientation = (): IOrientationType => {
  const [orientation, setOrientation] = useState<IOrientationType>(
    isPortrait() ? IOrientationType.PORTRAIT : IOrientationType.LANDSCAPE
  );

  useEffect(() => {
    const callback = () =>
      setOrientation(
        isPortrait() ? IOrientationType.PORTRAIT : IOrientationType.LANDSCAPE
      );

    const dimensionListener = Dimensions.addEventListener('change', callback);

    return () => {
      dimensionListener.remove();
    };
  }, []);

  return orientation;
};
