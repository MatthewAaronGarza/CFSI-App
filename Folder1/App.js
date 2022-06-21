import React from 'react';
import {
  StyleSheet,
  Button,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  SafeAreaView,
  Pressable,
  Alert,
} from 'react-native';

export default function App() {
  const handlePress = () => console.log('Text pressed');
  return (
    // eslint-disable-next-line react/jsx-no-undef
    // TouchableOpacity causes a shadow effect
    // TouchableHighlight causes a black background of the image
    <SafeAreaView style={styles.container}>
      <Button
        title="Click Me"
        onPress={() => alert('Hello UTRGV')}
        style={styles.button}
      />
      <TouchableHighlight
        title="More Information"
        onPress={() => console.log('More Information Tapped')}>
        <Pressable style={styles.button}>
          <Text>More Information</Text>
        </Pressable>
      </TouchableHighlight>
      <Text numberOfLines={1} onPress={handlePress}>
        Marcos Munoz
      </Text>
      <TouchableHighlight onPress={() => console.log('imaged tapped')}>
        <Image source={require('./assets/utrgv.png')} style={styles.image} />
      </TouchableHighlight>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flexDirection: 1,
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  button: {
    alignItems: 'auto',
    justifyContent: 'auto',
    elevation: 3,
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: 'red',
  },
});
