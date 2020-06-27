import React, { useState } from 'react'
import { StyleSheet, View, TextInput, Dimensions, ScrollView, Platform } from 'react-native'
import { AppBar } from '../components/AppBar'

const fullHeight = Dimensions.get('window').height - 50;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  editorContainer: {
    paddingLeft: 50,
    paddingRight: 50,
    height: fullHeight,
  },
  textInput: {
    height: fullHeight,
    textAlignVertical: 'top',
    ...(Platform.OS !== 'ios' && Platform.OS !== 'android' && { outlineWidth: 0 }),
  },
});

export default function HomeScreen(props) {
    const [text, setText] = useState("type here now")

    return (
      <View style={styles.container}>
        <AppBar {...props} />
        <ScrollView style={styles.editorContainer}>
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => setText(text)}
            value={text}
            multiline
          />
        </ScrollView>
      </View>
    );
}

HomeScreen.navigationOptions = {
  headerShown: false
};
