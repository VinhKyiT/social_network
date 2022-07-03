import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './src/redux/configureStore';
import AppRouter from './src/routes';
import NavigationServices from './src/utils/navigationServices';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer ref={NavigationServices.navigationRef}>
          <AppRouter />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
