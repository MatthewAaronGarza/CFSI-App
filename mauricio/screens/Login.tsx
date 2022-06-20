import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { Button, TextInput, Title } from 'react-native-paper'
import { auth } from '../firebase'
import { signInWithEmailAndPassword, signOut } from 'firebase/auth'

const Login = ({ navigation }: any) => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [loggedIn, setLoggedIn] = React.useState(false)


  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        navigation.navigate("Stack")
      }
    })

    return unsubscribe
  }, []);

  const LogInUser = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        setLoggedIn(true)
      })
      .catch(error => {
        console.log(error)
      })
  }

  const LogOutUser = () => {
    signOut(auth)
      .then(() => {
        setLoggedIn(false)
      })
      .catch(error => {
        console.log(error)
      })
  }

  const GoToRegister = () => {
    navigation.replace("Register")
  }

  return (
    <View style={styles.container}>
      <Title>Login</Title>
      <TextInput mode='outlined' label="Email" value={email} onChangeText={(text) => setEmail(text)} />
      <TextInput mode='outlined' label="Password" value={password} onChangeText={(text) => setPassword(text)} secureTextEntry />
      <Text onPress={GoToRegister}>Don't have an account? Register here</Text>
      {loggedIn === true ? <Button mode='contained' onPress={LogOutUser}>Log Out</Button> : <Button mode='contained' onPress={LogInUser}>Log In</Button>}
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

export default Login