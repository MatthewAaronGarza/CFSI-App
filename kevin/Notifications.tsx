import React, { useState } from 'react'
import { StyleSheet, Text, View, Button, TouchableOpacity, FlatList, Image} from 'react-native'
import { LongPressGestureHandler, ScrollView } from 'react-native-gesture-handler'
import { Item } from 'react-native-paper/lib/typescript/components/Drawer/Drawer'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import postDetails from '../screens/postDetails'
import Card from './card'




const Notification = ({navigation}) => {
    
    const [people, setPeople] = useState([
        {name: 'clark', id: '1'},
        {name: 'steve', id: '2'},
        {name: 'erick', id: '3'},
        {name: 'claire', id: '4'},
        {name: 'ana', id: '5'},

    ])
    
    // const pressHandler = (id: string) => {
    //     console.log(id)
    //     setPeople((prevPeople) => {
    //         return prevPeople.filter(person => person.id != id)
    //     })
    // }

    const [user] = useState({ userName: 'dave', postTitle: 'this is my post'})
    return (
        <View>
            
            <FlatList
                keyExtractor={(item) => item.id}
                data={people}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={() => navigation.navigate('postDetails', item)}>
                    <Card>
                        <Text >{item.name}</Text>
                    </Card>
                    </TouchableOpacity>
                )}
            /> 
            {/* <ScrollView>
        {people.map((item)=>{
            return (
                <View key={item.key}>
                    <Text style={styles.item}>{item.name}</Text>
                </View>
            )
        })}
        
        <View style={styles.container}>
        <View style={styles.header}>
         <Text>New post from {user.userName}</Text>
         <Text>{user.postTitle}</Text>
         <View style={styles.buttonContainer}>
            <Button title= 'update state'></Button>
         </View>
        </View>
        </View>
        </ScrollView> */}
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
        header: {
    backgroundColor: 'pink',
    padding: 20,
    },
        buttonContainer: {
    marginTop: 20,
        },
        item: {
            marginTop: 10,
            marginHorizontal: 10,
            padding: 30,
            backgroundColor: 'pink',
            fontSize: 10
        }
})


export default Notification



