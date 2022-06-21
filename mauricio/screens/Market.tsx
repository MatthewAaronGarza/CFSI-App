import { Image, View, Text } from 'react-native'
import React, { useState } from 'react'
import { Banner, Chip, Switch } from 'react-native-paper'

const Market = () => {
  const [visible, setVisible] = useState(true)

  return (
    <View>
      <Banner
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
      </Banner>
      <Text>Market</Text>
      <Text>Address</Text>
      <Text>Schedule</Text>
      <Text>Ratings</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Chip>Pick Up</Chip>
        <Chip>Delivery</Chip>
        <Switch />
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

export default Market