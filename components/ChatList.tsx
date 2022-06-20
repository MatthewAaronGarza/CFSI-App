import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import { Avatar, Button, Card, Paragraph, Title } from 'react-native-paper';

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
    },
];

const LeftContent = (props: any) => <Avatar.Icon {...props} icon="account" />

const ChatList = () => {
  return (
    <View>
        <Card style={styles.user}>
            <Card.Title title="Benjamin Payne" subtitle="Card Subtitle" left={LeftContent} />
        </Card>
          <Card style={styles.user}>
            <Card.Title title="Malcolm Reid" subtitle="Card Subtitle" left={LeftContent} />
        </Card>
          <Card style={styles.user}>
            <Card.Title title="Karina Weeks" subtitle="Card Subtitle" left={LeftContent} />
        </Card>
          <Card style={styles.user}>
            <Card.Title title="Troy Melendez" subtitle="Card Subtitle" left={LeftContent} />
        </Card>
          <Card style={styles.user}>
            <Card.Title title="Kurt Clarke" subtitle="Card Subtitle" left={LeftContent} />
        </Card>
          <Card style={styles.user}>
            <Card.Title title="Emile Shields" subtitle="Card Subtitle" left={LeftContent} />
        </Card>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    user: {
        borderColor: "gray",
        borderStyle: "solid",
        borderWidth: 1
    }
});

export default ChatList