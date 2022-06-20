import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import { Card } from 'react-native-paper'

const EventOptions = () => {
  return (
    <ScrollView>
        <Card>
            <Card.Title title="Event 1" subtitle="Card Subtitle" />
        </Card>
        <Card>
            <Card.Title title="Event 2" subtitle="Card Subtitle" />
        </Card>
        <Card>
            <Card.Title title="Event 3" subtitle="Card Subtitle" />
        </Card>
        <Card>
            <Card.Title title="Event 4" subtitle="Card Subtitle" />
        </Card>
        <Card>
            <Card.Title title="Event 5" subtitle="Card Subtitle" />
        </Card>
        <Card>
            <Card.Title title="Event 6" subtitle="Card Subtitle" />
        </Card>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

});

export default EventOptions