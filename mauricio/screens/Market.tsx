import { Image, View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Banner, Chip, Switch, Title } from 'react-native-paper'
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

const Market = () => {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    // When first starting up the page, retrieve the infomation of the market based on the ID of the page including the products
    // that they sell from the database to show on the Market page
  }, [])

  return (
    <View>
      {/* <Banner
        visible={visible}
        actions={[
          {
            label: 'Fix it',
            onPress: () => setVisible(false),
          },
          {
            label: 'Learn more',
            onPress: () => setVisible(false),
          },
        ]}
        icon={({ size }) => (
          <Image
            source={{
              uri: 'https://avatars3.githubusercontent.com/u/17571969?s=400&v=4',
            }}
            style={{
              width: size,
              height: size,
            }}
          />
        )}>
        There was a problem processing a transaction on your credit card.
      </Banner> */}
      <Carousel data={data} horizontal={true} />
      <Title style={{ fontSize: 24, marginHorizontal: 16 }}>Market</Title>
      <Title style={{ fontSize: 16, marginHorizontal: 16 }}>Address</Title>
      <Title style={{ fontSize: 16, marginHorizontal: 16 }}>Schedule</Title>
      <Title style={{ fontSize: 16, marginHorizontal: 16 }}>Ratings</Title>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Chip style={styles.chip}>Pick Up</Chip>
        <Chip style={styles.chip}>Delivery</Chip>
        <Switch style={styles.chip} />
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text>Products for Sale</Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text>Products for Sale</Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text>Products for Sale</Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text>Products for Sale</Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text>Products for Sale</Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text>Products for Sale</Text>
        <Text>Products for Sale</Text>
        <Text>Products for Sale</Text>
        <Text>Products for Sale</Text>
        <Text>Products for Sale</Text>
      </View>
      {/* <Text>Market</Text> */}
    </View>
  )
}

const styles = StyleSheet.create({
  chip: {
    marginLeft: 16,
  }
});

export default Market