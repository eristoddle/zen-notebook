import React, { FC, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const App: FC = () => {
  return (
    <View style={styles.container}>
      <Text>Blank Slate.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
});

export default App;
