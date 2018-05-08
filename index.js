// Import a library to help create a component
import { AppRegistry, View } from 'react-native';
import React from 'react';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';
// create a component
const App = () => (
  <View style={{ flex: 1 }}>
    <Header
      text="Albums!"
    />
    <AlbumList />
  </View>
);
// Render it to device
// the first parameter name must matchup project name
AppRegistry.registerComponent('AwesomeProject', () => App);
