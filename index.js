import React, { Component } from 'react'; //pretty much compiles all components through a single funnel
import { AppRegistry } from 'react-native'; //react native takes all components and renders/returns them to a screen for display
import Header from './source/components/header';

const App = () => (
  <Header headerText={'Albums'}/>
)

//renders it to the device
AppRegistry.registerComponent('albums', () => App);
