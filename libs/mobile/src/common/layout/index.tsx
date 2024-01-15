import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Header } from '../header';

export const MLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <View style={styles.containerWrapperStyle}>
      <Header />
      <View style={styles.containerStyle}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerWrapperStyle: { flex: 1, margin: 30 },
  containerStyle: { flex: 1, justifyContent: 'center' },
});
