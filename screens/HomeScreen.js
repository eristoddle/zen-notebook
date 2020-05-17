import React, { useState, useRef } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import ContentEditable from 'react-contenteditable'
import { AppBar } from "../components/AppBar"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  editorContainer: {
    paddingLeft: '50px',
    paddingRight: '50px',
    height: '100%',
  }
});

export default function HomeScreen(props) {
    const [html, setHtml] = useState("type here")
    const contentEditable = useRef(false)
    const onChange = (e) => setHtml(e.target.value)

    return (
        <View style={styles.container}>
            <AppBar {...props} />
            <View style={styles.editorContainer}>
                <ContentEditable
                  innerRef={contentEditable}
                  html={html}
                  disabled={false}
                  style={{
                    outline: 'none',
                    height: '100%'
                  }}
                  onChange={onChange}/>
            </View>
        </View>
    )
}

HomeScreen.navigationOptions = {
  header: null
};
