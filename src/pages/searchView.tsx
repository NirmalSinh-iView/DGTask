import {View, Image, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';

interface ISearchViewData {
  searchString: string;
  onSearchChange(value: string): void;
  onSearchEnable(value: boolean): void;
}

export const SearchView = ({
  searchString,
  onSearchChange,
  onSearchEnable,
}: ISearchViewData) => {
  return (
    <View style={styles.searchInputView}>
      <TextInput
        style={styles.inputIOS}
        placeholder="Search here.."
        placeholderTextColor="#777"
        value={searchString}
        onChangeText={value => {
          onSearchChange(value);
        }}
      />
      <TouchableOpacity
        onPress={() => onSearchEnable(false)}
        style={{
          justifyContent: 'center',
          width: 50,
        }}>
        <Image
          style={styles.backImage}
          source={require('../../assets/images/search.png')}
        />
      </TouchableOpacity>
    </View>
  );
};
