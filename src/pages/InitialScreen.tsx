import {SafeAreaView, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Header} from '../components';
import styles from './styles';
import {PAGE1, PAGE2, PAGE3} from '../data';
import {IDataProp} from '../utils/homeScreenObject';
import {MovieView} from './movie';
import {SearchView} from './searchView';
import {LoaderView} from './loader';

const InitialScreen = () => {
  const [currentPage, setcurrentPage] = useState(0);
  const allData = [PAGE1[0], PAGE2[0], PAGE3[0]];
  const [searchEnabled, setSearchEnabled] = useState<boolean>(false);
  const [searchItem, setSearchItem] = useState<string>('');
  const [data, setData] = useState<any>([]);
  const [searchFound, setSearchFound] = useState<boolean>(false);

  useEffect(() => {
    if (currentPage <= allData.length - 1) {
      setData([...data, ...allData[currentPage]?.page?.content_items.content]);
    }
  }, [currentPage]);

  const loadMoreItem = () => {
    setcurrentPage(currentPage + 1);
  };

  const renderLoader = () => {
    return <LoaderView />;
  };

  const filterList = (list: IDataProp[]) => {
    return list.filter((listItem: IDataProp) =>
      listItem.name.toLowerCase().includes(searchItem.toLowerCase()),
    );
  };

  const handleOnChangeSearch = (value: string) => {
    setSearchItem(value);
    data.filter((item: any) =>
      item.name.toLowerCase().includes(value.toLowerCase()),
    );
    setSearchFound(true);
  };

  const renderItem = ({item, index}: {item: IDataProp; index: number}) => {
    return <MovieView name={item.name} poster_image={item.poster_image} />;
  };
  return (
    <SafeAreaView style={styles.mainContainer}>
      {searchEnabled ? (
        <SearchView
          searchString={searchItem}
          onSearchChange={(value: string) => {
            handleOnChangeSearch(value);
          }}
          onSearchEnable={(value: boolean) => {
            setSearchEnabled(value);
            handleOnChangeSearch('');
          }}
        />
      ) : (
        <Header
          title="Romantic Comedy"
          onSearchPress={() => setSearchEnabled(true)}
        />
      )}
      <FlatList
        keyExtractor={(_, index) => index.toString()}
        style={styles.fListView}
        showsVerticalScrollIndicator={false}
        data={searchFound ? filterList(data) : data}
        renderItem={renderItem}
        onEndReached={loadMoreItem}
        numColumns={3}
        onEndReachedThreshold={0.1}
        ListFooterComponent={
          currentPage <= allData.length - 1 ? renderLoader : null
        }
      />
    </SafeAreaView>
  );
};

export default InitialScreen;
