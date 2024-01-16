import React from 'react';
import { ActivityIndicator, Modal, Portal } from 'react-native-paper';
import { useStore } from '@shared';

export const Loader = () => {
  const isLoading = useStore((state) => state.isLoading);
  return (
    <Portal>
      <Modal visible={isLoading}>
        <ActivityIndicator animating={true} color='#fff' />
      </Modal>
    </Portal>
  );
};
