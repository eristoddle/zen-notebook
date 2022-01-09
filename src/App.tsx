import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import AppStore from './state/index';
import AppStackNavigator from './navigation/AppStackNavigator';
import ErrorBoundary from './components/ErrorBoundary';

const App: FC = () => {
  return (
    <Provider store={AppStore}>
      <ErrorBoundary
        resetState={() => {
          console.log('resetState');
        }}
      >
        <NavigationContainer>
          <AppStackNavigator />
        </NavigationContainer>
      </ErrorBoundary>
    </Provider>
  );
};

export default App;
