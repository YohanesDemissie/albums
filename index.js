import { AppRegistry } from 'react-native';
import App from './App';
import React from 'react';
import {Text, AppRegistry} from 'react-native';

const App = () => (
  <Text>Some Text</Text>
)

//renders it to the device
AppRegistry.registerComponent('albums', () => App);
