import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";


export default function postDetails({navigation}) {
return (
    <View>
        <Text>{ navigation.getParam('name') }</Text>
        <Text>{ navigation.getParam('id') }</Text>
    </View>
)
}