import React from 'react'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import Home from '../screens/Home';
import Chat from '../screens/Chat';
import Events from '../screens/Events';
import Account from '../screens/Account';
import Map from '../screens/Map';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props: any) => {
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            {/* <DrawerItem
                label="Close drawer"
                onPress={() => props.navigation.closeDrawer()}
            />
            <DrawerItem
                label="Toggle drawer"
                onPress={() => props.navigation.toggleDrawer()}
            /> */}
        </DrawerContentScrollView>
    );
}

const AppDrawer = () => {
    return (
        <Drawer.Navigator
            useLegacyImplementation
            drawerContent={(props) => <CustomDrawerContent {...props} />}
            screenOptions={{
                headerStyle: { backgroundColor: '#cc6060' },
                headerTintColor: 'white',
            }}
        >
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Chat" component={Chat} />
            <Drawer.Screen name="Map" component={Map} />
            <Drawer.Screen name="Events" component={Events} />
            <Drawer.Screen name="Account" component={Account} />
        </Drawer.Navigator>
    );
}

export default AppDrawer