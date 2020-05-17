import React from 'react';
import { Appbar } from "material-bread";

export function AppBar(props) {
  return (
    <Appbar
      barType={'normal'}
      navigation={'menu'}
      color={'#00BCD4'}
      style={{ marginBottom: 20 }}
      onNavigation={props.navigation.openDrawer}
      actionItems={[
        { name: 'more-vert', onPress: props.navigation.openDrawer },
      ]}
    />
  );
}
