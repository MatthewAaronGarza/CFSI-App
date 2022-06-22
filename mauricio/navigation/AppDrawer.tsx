import React, { useEffect } from 'react'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import Home from '../screens/Home';
import Chat from '../screens/Chat';
import Events from '../screens/Events';
import Account from '../screens/Account';
import Map from '../screens/Map';
import Market from '../screens/Market';
import { theme } from '../core/theme';
import { auth } from '../firebase';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AppBar from '../components/AppBar';
import { StyleSheet, View } from 'react-native';
import { signOut } from 'firebase/auth';
import Checkout from '../screens/Checkout';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props: any) => {
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    );
}

const AppDrawer = ({ navigation }: any) => {
    const LogOutUser = () => {
        signOut(auth)
            .then(() => {
                console.log(auth)
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <Drawer.Navigator
            useLegacyImplementation
            drawerContent={(props) => <CustomDrawerContent {...props} />}
            screenOptions={{
                headerTitle: "CFSI App",
                headerStyle: { backgroundColor: theme.colors.main },
                headerTintColor: 'white',
                headerRight: () => (
                    <View style={{ flexDirection: 'row' }}>
                        <Ionicons name={"basket"} size={28} color={"white"} style={styles.icon} onPress={() => navigation.navigate('Checkout')} />
                        <Ionicons name={"log-out-outline"} size={28} color={"white"} style={styles.icon} onPress={LogOutUser} />
                    </View>
                )
            }}
        >
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Chat" component={Chat} />
            <Drawer.Screen name="Map" component={Map} />
            <Drawer.Screen name="Events" component={Events} />
            <Drawer.Screen name="Account" component={Account} />
            <Drawer.Screen name="Market" component={Market} options={{ drawerItemStyle: { display: 'none' } }}/>
            <Drawer.Screen name="Checkout" component={Checkout} options={{ drawerItemStyle: { display: 'none' } }}/>
        </Drawer.Navigator>
    );
}

const styles = StyleSheet.create({
    icon: {
        marginRight: '20px'
    },
});

export default AppDrawer