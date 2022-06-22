import React, { useEffect, useState } from 'react'
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
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();

    // Handle user state changes
    function onAuthStateChanged(user: any) {
        setUser(user);
        if (initializing) setInitializing(false);
    }

    useEffect(() => {
        const subscriber = auth.onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);

    if (initializing) return null;
    
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            {user ? (
                <>
                    <Stack.Screen name="Home" component={Platform.OS === 'web' ? AppDrawer : AppTabs} />
                </>
            ) : (
                <>
                    <Stack.Screen name="Landing" component={Landing} />
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="Register" component={Register} />
                </>
            )}
        </Stack.Navigator>
    );
}

export default AppStack;