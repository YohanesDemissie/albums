import React, { Component } from 'react'; //pretty much compiles all components through a single funnel
import { AppRegistry, View } from 'react-native'; //react native takes all components and renders/returns them to a screen for display
import Header from './source/components/header';
import AlbumList from './source/components/AlbumList';
import Card from './source/components/Card';

const App = () => (
  <View>
    <Header headerText={'Albums'}/>
    <AlbumList />
    <Card />
  </View>
)

//renders it to the device
AppRegistry.registerComponent('albums', () => App);
