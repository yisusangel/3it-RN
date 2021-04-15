import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { Provider } from 'react-redux';
import MainDrawer from './navigators/MainDrawer'
import { createStore } from 'redux';
import allReducer from './reducers';

const store = createStore(allReducer);
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainDrawer/>
      </NavigationContainer>
    </Provider>
  );
}