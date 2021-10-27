import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Timer from './components/Timer/index.js';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './components/Timer/reducers';


const store = createStore(reducer);

export default function App() {
  return(
    <Provider store={store}>
      <Timer/>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
