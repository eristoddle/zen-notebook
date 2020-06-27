import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { AppBar } from '../components/AppBar';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});

export default function LinksScreen(props) {
  return (
    <View>
    <AppBar {...props} />
    <ScrollView style={styles.container}>
      {/**
       * Go ahead and delete ExpoLinksView and replace it with your content;
       * we just wanted to provide you with some helpful links.
       */}
      <ExpoLinksView />
    </ScrollView>
    </View>
  );
}

LinksScreen.navigationOptions = {
  title: 'Links',
  headerShown: false,
};
