import { View, Text, FlatList } from 'react-native'
import React from 'react'
import ChatList from '../components/ChatList'
import CurrentChat from '../components/CurrentChat'

const Chat = () => {
    return (
        <View style={{ flexDirection: "row" }}>
            <View style={{ width: "20%"}}>
                <ChatList />
            </View>
            <View style={{width: "80%"}}>
                {/* <CurrentChat /> */}
            </View>
        </View>
    )
}

export default Chat