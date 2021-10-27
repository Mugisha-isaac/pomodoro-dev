import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Timer from './components/Timer/index.js';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './components/Timer/reducers';
import MyStack from './components/screens/MyStack.component';
import {NavigationContainer} from '@react-navigation/native';


const store = createStore(reducer);

export default function App() {
  return(
    // <Provider store={store}>
    //   <Timer/>
    // </Provider>
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
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
