import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import AppStore from './state/index';
import AppStackNavigator from './navigation/AppStackNavigator';
import ErrorBoundary from './components/ErrorBoundary';
import { navigationRef } from './navigation/RootNavigation';

const App: FC = () => {
  return (
    <Provider store={AppStore}>
      <ErrorBoundary
        resetState={() => {
          console.log('resetState');
        }}
      >
        <NavigationContainer ref={navigationRef}>
          <AppStackNavigator />
        </NavigationContainer>
      </ErrorBoundary>
    </Provider>
  );
};

export default App;
