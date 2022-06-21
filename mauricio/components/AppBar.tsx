import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Appbar } from 'react-native-paper'
import { DrawerActions } from '@react-navigation/native'
import { auth } from '../firebase'
import { signOut } from 'firebase/auth'

const AppBar = ({ navigation }: any) => {
  const LogOutUser = () => {
    signOut(auth)
      .then(() => {
        // setLoggedIn(false)
        console.log(auth)
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <Appbar.Header style={{ backgroundColor: '#cc6060' }}>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Appbar.Action icon="menu" color='white' />
      </TouchableOpacity>
      <Appbar.Content title="CFSI App" color='white' style={{ padding: 0 }}/>
      {/* Service Type */}
      {/* Address */}
      {/* Search Bar */}
      {/* Theme Switch */}
      <Appbar.Action icon="basket" color='white' onPress={() => navigation.navigate("Market")} />
      <Appbar.Action icon="log-out-sharp" color='white' onPress={LogOutUser} />
    </Appbar.Header>

  )
}

export default AppBar