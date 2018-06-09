import React, { Component } from 'react';
import { StyleSheet, CameraRoll, ScrollView, Dimensions, ActivityIndicator } from 'react-native';
import VideoPlayer from 'react-native-video-controls';
import { Icon, Container } from 'native-base';


const SCREEN_WIDTH = Dimensions.get('window').width;


class GalleryVideos extends Component {
  static navigationOptions = {
  tabBarIcon: ({ tintColor }) => (
    <Icon name="film" style={{ color: tintColor }} />
  )
}

constructor(props) {
    super(props);
    this.state = {
      fetchParams: {
        first: 15,
        assetType: 'Videos'
      },
      images: [],
      loading: true
    };
  }

  componentWillMount() {
    CameraRoll.getPhotos(this.state.fetchParams)
              .then((data) => {
               const assets = data.edges;
               const videos = assets.map( asset => asset.node.image );
                this.setState({
                  images: videos,
                  loading: false
                })
              })
              .catch((error) => {
                console.log('error', error);
              })
  }

  renderVideos() {
    if(this.state.loading) {
      return (
          <ActivityIndicator style={{ flex: 1, justifyContent: 'center' }} size='large' />
    );
    }

    return (
      <ScrollView>
          { this.state.images ? this.state.images.map((image, i) => {
           return (
             <VideoPlayer
             key={i}
             paused
             style={styles.videoStyle} source={{ uri: image.uri }}
             />
          );
        }) : null
      }
      </ScrollView>
    );
    }


  render() {
      return (
        <Container>
          {this.renderVideos()}
      </Container>

      );
  }
};

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#F5FCFF',
  },
  videoStyle: {
      flex: 1,
      width: SCREEN_WIDTH - 7,
      height: 240,
      margin: 4,
  },

});


export default GalleryVideos;
