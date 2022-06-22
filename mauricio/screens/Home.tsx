import { View, StyleSheet, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import { Button, Card, Chip, Searchbar, Surface, Title } from 'react-native-paper';
import Carousel from '../components/Carousel';
import { Navigation } from '../core/types';

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

type HomeProps = {
  navigation: Navigation;
};

const Home = ({ navigation }: HomeProps) => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = (query: React.SetStateAction<string>) => setSearchQuery(query);

  useEffect(() => {
    // When first starting up the page, retrieve the markets, producers, etc. near you 
    // From the database to show on the home page
  }, [])

  return (
    <ScrollView>
      {/* <Searchbar placeholder='Search' onChangeText={onChangeSearch} value={searchQuery} /> */}
      <View>
        <Title style={{ margin: 16 }}>Highest Rated Vendors Near You</Title>
        <Carousel data={data} horizontal={true} navigation={navigation} />
      </View>
      <View>
        <Title style={{ margin: 16 }}>Markets</Title>
        <Carousel data={data} horizontal={true} navigation={navigation} />
      </View>
      <View>
        <Title style={{ margin: 16 }}>Producers</Title>
        <Carousel data={data} horizontal={true} navigation={navigation} />
      </View>
      <View>
        <Title style={{ margin: 16 }}>Educational Videos</Title>
        <Carousel data={data} horizontal={true} navigation={navigation} />
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