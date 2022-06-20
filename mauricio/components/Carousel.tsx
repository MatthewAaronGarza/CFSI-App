import { View, Text, FlatList, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import { Button, Card, Chip, Surface } from 'react-native-paper'

interface CarouselProps {
    data: any;
    horizontal?: boolean;
}

const Carousel = (props: CarouselProps) => {
  return (
    <View style={{ flexDirection: 'row' }}>
        <FlatList data={props.data} renderItem={({ item, index }) => {
            return (
                <Card style={{ margin: 16 }}>
                    {/* <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} /> */}
                    <Surface>
                        <Card.Content style={{ padding: 0 }}>
                            <Card.Cover source={{ uri: item.imgUrl }} style={{ width: 300, height: 300 }} />
                            <Card.Title title={item.title} subtitle={item.body} />
                            <View style={{ flexDirection: 'row' }}>
                                <Chip style={styles.chip}>Potatoes</Chip>
                                <Chip style={styles.chip}>Corn</Chip>
                                <Chip style={styles.chip}>Tomatoes</Chip>
                            </View>
                            <Card.Actions>
                                <Button>View Products</Button>
                            </Card.Actions>
                        </Card.Content>
                    </Surface>
                </Card>
            )
        }}
        horizontal={props.horizontal}
        showsHorizontalScrollIndicator={false}
        // keyExtractor={item => item.id}
        />
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
    chip: {
        marginLeft: 16,
    }
});

export default Carousel