import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';


class AlbumList extends Component {
  state = { albums: [] };

  componentWillMount () {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({albums: response.data}));
  }

  renderAlbums() { //map through our albums to set state for "album title" to render/return below dynamically
    return this.state.albums.map(album =>
      <AlbumDetail key={album.title} album={album} /> //Change  back to Text Tags to make sure it still works (part 7 part 37)
    )
  }

  render () {
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    )
  }
}

export default AlbumList