import React, { memo, useEffect } from 'react';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
import Paragraph from '../components/Paragraph';
import { Navigation } from '../core/types';
import { auth } from '../firebase';

type Props = {
    navigation: Navigation;
};

const Landing = ({ navigation }: Props) => {
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                navigation.navigate("Agri")
            }
        });

        return unsubscribe
    }, []);
    
    return (
        <Background>
            <Logo />
            <Header>Welcome to Agri</Header>

            <Paragraph>
                The easiest way to find fresh produce near you.
            </Paragraph>
            <Button mode="contained" onPress={() => navigation.navigate('Login')}>
                Login
            </Button>
            <Button mode="outlined" onPress={() => navigation.navigate('Register')}>
                Register
            </Button>
        </Background>
    )
};

export default memo(Landing);