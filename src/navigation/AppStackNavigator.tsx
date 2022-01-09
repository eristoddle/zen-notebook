import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/RootStackParamList';
import Home from '../screens/Home';
import Settings from '../screens/Settings';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppStackNavigator = (): any => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
};

export default AppStackNavigator;
