import React from 'react';
import { ActivityIndicator, Modal, Portal } from 'react-native-paper';
import { useMStore } from '../hooks';

export const Loader = () => {
  const isLoading = useMStore((state) => state.isLoading);
  return (
    <Portal>
      <Modal visible={isLoading}>
        <ActivityIndicator animating={true} color='#fff' />
      </Modal>
    </Portal>
  );
};
