import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Loader } from '@mobileLib';
import { Header } from '../header';
import { useTheme } from 'react-native-paper';
import { useStore } from '@shared';

export const MLayout = ({ children }: { children: React.ReactNode }) => {
  const { colors } = useTheme();
  const isLoggedInUser = useStore((state) => state.user?.username);

  return (
    <>
      <Loader />
      <View
        style={{
          ...styles.containerWrapperStyle,
          backgroundColor: isLoggedInUser ? colors.primary : 'transparent',
        }}
      >
        <View style={{ flex: 1, margin: 30 }}>
          <Header />
          <View style={styles.containerStyle}>{children}</View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  containerWrapperStyle: { flex: 1 },
  containerStyle: { flex: 1, justifyContent: 'center' },
});
