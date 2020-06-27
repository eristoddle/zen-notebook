import React from 'react';
import { View, ScrollView } from 'react-native';
import { DrawerItems } from 'react-navigation-drawer';

export function CustomDrawer(props) {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <DrawerItems {...props} />
      </ScrollView>
    </View>
  );
}