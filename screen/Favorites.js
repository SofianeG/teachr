import React, {useState} from 'react';
import {StyleSheet, Text, Image, View, SafeAreaView} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import allData from '../data';
import Card from '../component/Card';
import Header from '../component/Header';

const Favorites = ({navigation}) => {
  const [data, setData] = useState(allData);

  const _renderItem = ({item, index}) => {
    return <Card data={item} key={index} />;
  };

  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <View
        style={{
          marginTop: 100,
          justifyContent: 'center',
        }}>
        <Carousel
          data={data}
          sliderWidth={450}
          itemWidth={250}
          renderItem={_renderItem}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Favorites;
