import {Text, View, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import {IDataProp} from '../utils/homeScreenObject';

export const MovieView = ({name, poster_image}: IDataProp) => {
  let path = '../../assets/images/' + poster_image;
  const avatarImage = () => {
    switch (poster_image) {
      case 'poster1.jpg':
        return require('../../assets/images/poster1.jpg');
      case 'poster2.jpg':
        return require('../../assets/images/poster2.jpg');
      case 'poster3.jpg':
        return require('../../assets/images/poster3.jpg');
      case 'poster4.jpg':
        return require('../../assets/images/poster4.jpg');
      case 'poster5.jpg':
        return require('../../assets/images/poster5.jpg');
      case 'poster6.jpg':
        return require('../../assets/images/poster6.jpg');
      case 'poster7.jpg':
        return require('../../assets/images/poster7.jpg');
      case 'poster8.jpg':
        return require('../../assets/images/poster8.jpg');
      case 'poster9.jpg':
        return require('../../assets/images/poster9.jpg');
      default:
        return require('../../assets/images/poster1.jpg');
    }
  };
  return (
    <View style={styles.componentView}>
      <View style={{flex: 1}}>
        <Image style={styles.poster} source={avatarImage()} />
      </View>
      <Text style={styles.posterName}>{name}</Text>
    </View>
  );
};
