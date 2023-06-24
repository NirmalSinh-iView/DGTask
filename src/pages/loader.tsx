import {View, ActivityIndicator} from 'react-native';
import React from 'react';
import styles from './styles';
export const LoaderView = () => {
  return (
    <View style={styles.loaderStyle}>
      <ActivityIndicator size="small" color="#F7F7F7" />
    </View>
  );
};
