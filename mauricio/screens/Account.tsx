import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Avatar, Button, TextInput } from 'react-native-paper'

const Account = () => {
  return (
    <View style={styles.container}>
      <Avatar.Image size={150} source={{ uri: 'https://media.istockphoto.com/photos/businessman-smiling-with-arms-crossed-on-white-background-picture-id1364917563?b=1&k=20&m=1364917563&s=170667a&w=0&h=8CrUeKtC9df9I5c0E_H86tc1vkB5FBt5gEr2nVqttP4=' }}/>
      <TextInput mode='outlined' label="Name or Organization"/>
      <TextInput mode='outlined' label="Description"/>
      <TextInput mode='outlined' label="Email"/>
      <TextInput mode='outlined' label="Password"/>
      <Button mode='contained'>Submit</Button>
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
});

export default Account