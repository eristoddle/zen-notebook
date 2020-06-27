import React from 'react';
import { Appbar, IconButton } from 'material-bread';
import { Platform } from 'react-native';

const style = {
  icon: {

  },
  appbar: {
    marginTop: Platform.OS === 'ios' || Platform.OS === 'android' ? 25 : 0,
  },
};

function Navigation(props) {
  return (
    <IconButton
      name={'menu'}
      size={24}
      color={'black'}
      style={style.icon}
      onPress={props.navigation.openDrawer}
      style={{
        alignSelf: 'center',
      }}
    />
  );
}

export function AppBar(props) {
  return (
    <Appbar
      barType={'normal'}
      navigation={Navigation(props)}
      color={'#fff'}
      elevation={0}
      style={style.appbar}
      onNavigation={props.navigation.openDrawer}
    />
  );
}
