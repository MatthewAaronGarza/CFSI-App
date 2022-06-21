import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Register from '../screens/Register';
import AppDrawer from './AppDrawer';
import AppTabs from './AppTabs';
import { Platform } from 'react-native';
import Market from '../screens/Market';
import AppBar from '../components/AppBar';
import Landing from '../screens/Landing';
import { auth } from '../firebase';

const Stack = createNativeStackNavigator();

const AppStack = () => {
    return (
        <Stack.Navigator 
            screenOptions={{ 
                headerShown: false,
            }}
        >
            {/* {auth ? (
                <>
                    <Stack.Screen name="Agri" component={Platform.OS === 'web' ? AppDrawer : AppTabs} />
                    <Stack.Screen name="Market" component={Market} />
                </>
            ) : (
                <>
                    <Stack.Screen name="Landing" component={Landing} options={{ headerShown: false }} />
                    <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                    <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
                </>
            )} */}

            <Stack.Screen name="Landing" component={Landing} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
            <Stack.Screen name="Agri" component={Platform.OS === 'web' ? AppDrawer : AppTabs} />
            <Stack.Screen name="Market" component={Market} />
        </Stack.Navigator>
    );
}

export default AppStack;