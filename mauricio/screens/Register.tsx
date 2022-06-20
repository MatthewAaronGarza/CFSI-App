import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { Button, TextInput, Title } from 'react-native-paper'
import { auth } from '../firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'

const Register = ({ navigation }: any) => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [registered, setRegistered] = React.useState(false)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        navigation.navigate("Stack")
      }
    })

    return unsubscribe
  }, []);

  const RegisterUser = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        setRegistered(true)
      })
      .catch(error => {
        console.log(error)
      })
  }

  const GoToLogin = () => {
    navigation.replace("Login")
  }

  return (
    <View style={styles.container}>
      <Title>Register</Title>
      <TextInput mode='outlined' label="Email" value={email} onChangeText={(text) => setEmail(text)}/>
      <TextInput mode='outlined' label="Password" value={password} onChangeText={(text) => setPassword(text)} secureTextEntry/>
      <Text onPress={GoToLogin}>Have an account already? Login here</Text>
      <Button mode='contained' onPress={RegisterUser}>Register</Button>
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

export default Register