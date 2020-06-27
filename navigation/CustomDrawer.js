import React from 'react';
import { View, ScrollView, Platform } from 'react-native';
import { DrawerItems } from 'react-navigation-drawer';
import { Calendar } from 'react-native-calendars';

const style = {
  flex: 1,
  marginTop: Platform.OS === 'ios' || Platform.OS === 'android' ? 25 : 0,
};

export function CustomDrawer(props) {
  return (
    <View style={style}>
      <ScrollView>
        <Calendar/>
        <DrawerItems {...props} />
      </ScrollView>
    </View>
  );
}