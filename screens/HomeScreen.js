import React, { useState, useRef } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native'
import ContentEditable from 'react-contenteditable'

import { AppBar } from "../components/AppBar";

export default function HomeScreen(props) {
    const [html, setHtml] = useState("type here")
    const contentEditable = useRef(false)
    const onChange = (e) => setHtml(e.target.value)

    return (
        <View style={styles.container}>
            <AppBar {...props} />
            <ScrollView
            style={styles.container}
            contentContainerStyle={styles.contentContainer}>
                <View style={styles.editorContainer}>
                    <ContentEditable
                    innerRef={contentEditable}
                    html={html}
                    disabled={false}
                    styles={styles.editor}
                    onChange={onChange}/>
                </View>
          </ScrollView>
        </View>
    );
}

HomeScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  contentContainer: {
      flex: 1,
      paddingLeft: '50px',
      paddingRight: '50px',
  },
  editorContainer: {
  },
  editor: {
    width: '100%',
    height: '100%',
    outline: 'none',
  }
});
