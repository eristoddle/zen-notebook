import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import AppStore from './state/index';
import AppStackNavigator from './navigation/AppStackNavigator';

const App: FC = () => {
  return (
    <Provider store={AppStore}>
      <NavigationContainer>
        <AppStackNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
