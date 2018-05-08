import React, { Component } from 'react';
import { View, ActivityIndicator, StyleSheet, ScrollView, Linking } from 'react-native';
import Album from './Album';

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noLoadingContainer: {
    margin: 10,
  },
});

class AlbumList extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      albums: [],
    };
    this.handleRedirect = this.handleRedirect.bind(this);
  }

  async componentDidMount() {
    const response = await fetch('https://rallycoding.herokuapp.com/api/music_albums');
    const body = await response.json();
    this.setState({
      albums: body,
      loading: false,
    });
  }

  handleRedirect(url) {
    Linking.openURL(url);
  }

  render() {
    const { loading, albums } = this.state;
    const { loadingContainer, noLoadingContainer } = styles;
    if (loading) {
      return (
        <View style={loadingContainer}>
          <ActivityIndicator size="large" color="#3F51B5" />
        </View>
      );
    }
    return (
      <ScrollView style={noLoadingContainer}>
        {albums.map((album, index) => (
          <Album
            clickHandler={this.handleRedirect}
            key={index}
            {...album}
          />
        ))}
      </ScrollView>
    );
  }
}

export default AlbumList;
