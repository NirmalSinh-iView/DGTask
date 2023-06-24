import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

export interface IHeaderProps {
  title?: string;
  onSearchPress(): void;
}

export const Header = ({onSearchPress, title}: IHeaderProps) => {
  return (
    <SafeAreaView style={styles.mainView}>
      <View style={styles.backButtonView}>
        <TouchableOpacity>
          <Image
            style={styles.backImage}
            source={require('../../assets/images/back.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.titleView}>
        <Text style={styles.headingText}>{title ? title : ''}</Text>
      </View>
      <View style={styles.searchButtonView}>
        <TouchableOpacity onPress={() => onSearchPress()}>
          <Image
            style={styles.searchImage}
            source={require('../../assets/images/search.png')}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  titleView: {justifyContent: 'center', width: '70%'},
  mainView: {
    width: '100%',
    backgroundColor: 'black',
    height: 80,
    flexDirection: 'row',
    padding: 20,
  },
  backButtonView: {
    width: 50,
    alignSelf: 'center',
    paddingLeft: 10,
  },
  backImage: {
    resizeMode: 'contain',
    width: 20,
    height: 20,
    alignSelf: 'center',
  },
  searchImage: {
    resizeMode: 'contain',
    width: 20,
    height: 20,
    alignSelf: 'center',
  },
  headingText: {
    color: 'white',
    paddingLeft: 20,
    fontSize: 18,
  },
  searchButtonView: {
    justifyContent: 'center',
    width: '10%',
    marginLeft: 25,
  },
});
