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
                // setLoggedIn(false)
                console.log(auth)
            })
            .catch(error => {
                console.log(error)
            })
    }
    
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (!user) {
                navigation.navigate("Landing")
            }
        });

        return unsubscribe
    }, []);

    return (
        <Drawer.Navigator
            useLegacyImplementation
            drawerContent={(props) => <CustomDrawerContent {...props} />}
            screenOptions={{
                // headerShown: false,
                headerStyle: { backgroundColor: theme.colors.main },
                headerTintColor: 'white',
                headerRight: () => (
                    <View style={{ flexDirection: 'row' }}>
                        <Ionicons name={"basket"} size={28} color={"white"} style={styles.icon} />
                        <Ionicons name={"log-out"} size={28} color={"white"} style={styles.icon} onPress={LogOutUser} />
                    </View>
                ),
                // header: (props) => <AppBar {...props} />
            }}
        >
            <Drawer.Screen name="Home" component={Home} options={{
                // drawerIcon: ({ focused, size }) => (
                //     <Ionicons
                //         name="basket"
                //         size={24}
                //         color={focused ? '#7cc' : '#ccc'}
                //     />
                // ), 
            }}/>
            <Drawer.Screen name="Chat" component={Chat} />
            <Drawer.Screen name="Map" component={Map} />
            <Drawer.Screen name="Events" component={Events} />
            <Drawer.Screen name="Account" component={Account} />
        </Drawer.Navigator>
    );
}

const styles = StyleSheet.create({
    icon: {
        marginRight: '20px'
    },
});

export default AppDrawer