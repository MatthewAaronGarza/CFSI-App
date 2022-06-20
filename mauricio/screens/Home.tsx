import { View, Text, StyleSheet, ScrollView, Platform } from 'react-native'
import React from 'react'
import { Button, Card, Chip, Searchbar, Surface, Title } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Producer from '../components/Producer';
import Markets from './Markets';
import { FlatList } from 'react-native-gesture-handler';
import Carousel from '../components/Carousel';

const data = [
  {
    title: "Card Title",
    body: "Card Subtitle",
    imgUrl: "https://picsum.photos/id/10/200/300",
  },
  {
    title: "Card Title",
    body: "Card Subtitle",
    imgUrl: "https://picsum.photos/id/11/200/300",
  },
  {
    title: "Card Title",
    body: "Card Subtitle",
    imgUrl: "https://picsum.photos/id/12/200/300",
  },
  {
    title: "Aenean leo",
    body: "Card Subtitle",
    imgUrl: "https://picsum.photos/id/13/200/300",
  },
  {
    title: "In turpis",
    body: "Card Subtitle",
    imgUrl: "https://picsum.photos/id/14/200/300",
  },
  {
    title: "Lorem Ipsum",
    body: "Card Subtitle",
    imgUrl: "https://picsum.photos/id/15/200/300",
  },
];

const Home = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = (query: React.SetStateAction<string>) => setSearchQuery(query);

  return (
    <ScrollView>
      {/* <Searchbar placeholder='Search' onChangeText={onChangeSearch} value={searchQuery} /> */}
      <View>
        <Title style={{ margin: 16 }}>Highest Rated Vendors Near You</Title>
        <Carousel data={data} horizontal={true} />
      </View>
      <View>
        <Title style={{ margin: 16 }}>Markets</Title>
        <Carousel data={data} horizontal={true} />
      </View>
      <View>
        <Title style={{ margin: 16 }}>Producers</Title>
        <Carousel data={data} horizontal={true} />
      </View>
      <View>
        <Title style={{ margin: 16 }}>Educational Videos</Title>
        <Carousel data={data} horizontal={true} />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home