import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Avatar } from 'react-native-paper'
import Background from '../components/Background'
import Button from '../components/Button'
import TextInput from '../components/TextInput'

const Account = () => {
  const [name, setName] = useState({ value: '', error: '' });
  const [business, setBusiness] = useState({ value: '', error: '' });
  const [email, setEmail] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });
  
  return (
    // <View>
    //   <Avatar.Image size={150} source={{ uri: 'https://media.istockphoto.com/photos/businessman-smiling-with-arms-crossed-on-white-background-picture-id1364917563?b=1&k=20&m=1364917563&s=170667a&w=0&h=8CrUeKtC9df9I5c0E_H86tc1vkB5FBt5gEr2nVqttP4=' }}/>
    //   <TextInput mode='outlined' label="Name or Organization"/>
    //   <TextInput mode='outlined' label="Description"/>
    //   <TextInput mode='outlined' label="Email"/>
    //   <TextInput mode='outlined' label="Password"/>
    //   <Button mode='contained'>Submit</Button>
    // </View>
    <Background>

      <Avatar.Image size={150} source={{ uri: 'https://media.istockphoto.com/photos/businessman-smiling-with-arms-crossed-on-white-background-picture-id1364917563?b=1&k=20&m=1364917563&s=170667a&w=0&h=8CrUeKtC9df9I5c0E_H86tc1vkB5FBt5gEr2nVqttP4=' }}/>

      <TextInput
        label="Name"
        returnKeyType="next"
        value={name.value}
        onChangeText={text => setName({ value: text, error: '' })}
        autoCapitalize="none"
        autoComplete="name"
        textContentType="name"
      />

      <TextInput
        label="Business"
        returnKeyType="next"
        value={business.value}
        onChangeText={text => setBusiness({ value: text, error: '' })}
        autoCapitalize="none"
        textContentType="organizationName"
      />

      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={text => setEmail({ value: text, error: '' })}
        autoCapitalize="none"
        autoComplete="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />

      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={text => setPassword({ value: text, error: '' })}
        secureTextEntry
      />

      <Button mode="contained" onPress={() => {}}>
        Submit
      </Button>
    </Background>
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