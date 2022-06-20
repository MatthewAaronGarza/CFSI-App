import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Register from '../screens/Register';
import AppDrawer from './AppDrawer';
import AppTabs from './AppTabs';
import { Platform } from 'react-native';

const Stack = createNativeStackNavigator();

const AppStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            {/* <Stack.Screen name="SplashScreen" component={SplashComponent} /> */}
            <Stack.Screen name="Stack" component={Platform.OS === 'web' ? AppDrawer : AppTabs} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
    );
}

export default AppStack;