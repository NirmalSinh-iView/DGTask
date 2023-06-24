import {Dimensions, StyleSheet} from 'react-native';

const posterWidth = (Dimensions.get('screen').width - 40) / 3;
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  posterName: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'TitilliumWeb-Light',
    paddingTop: 3,
    fontWeight: '600',
  },
  componentView: {
    flexDirection: 'column',
    alignSelf: 'center',
    width: posterWidth,
    marginBottom: 30,
    marginLeft: 10,
  },
  poster: {
    width: '100%',
    height: 150,
    marginBottom: 12,
  },
  inputIOS: {
    marginVertical: 10,
    marginHorizontal: 10,
    height: 40,
    flex: 1,
  },
  backImage: {
    tintColor: 'black',
    resizeMode: 'contain',
    width: 20,
    height: 20,
    alignSelf: 'center',
  },
  loaderStyle: {
    marginVertical: 16,
    alignItems: 'center',
  },
  searchInputView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 80,
  },
  fListView: {backgroundColor: '#252525'},
});

export default styles;
