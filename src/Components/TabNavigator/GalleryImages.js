import React, { Component } from 'react'
import {
  CameraRoll,
  Image,
  ScrollView,
  StyleSheet,
  View,
  ActivityIndicator
} from 'react-native';
import { Icon } from 'native-base';

class GalleryImages extends Component {

  static navigationOptions = {
  tabBarIcon: ({ tintColor }) => (
    <Icon name="camera" style={{ color: tintColor }} />
  )
}

  constructor(props) {
    super(props)
    this.state = {
      images: [],
      fetchParams: { first: 15 },
      loading: true
    };
  }

  componentWillMount() {
    CameraRoll.getPhotos(this.state.fetchParams)
              .then((data) => {
               const assets = data.edges;
               const videos = assets.map(asset => asset.node.image);
                this.setState({
                  images: videos,
                  loading: false
                })
              })
              .catch((error) => {
                console.log('error', error);
              })
  }


  renderImages() {
    if(this.state.loading) {
      return (
          <ActivityIndicator style={{ flex: 1, justifyContent: 'center' }} size='large' />
    );
    }

    return (
      <ScrollView style={styles.container}>
          <View style={styles.imageGrid}>
          { this.state.images.map(image => {
            return (
               <Image style={styles.image} source={{ uri: image.uri }} />
           );
          })}
          </View>
      </ScrollView>
    );
    }


  render() {
    return (
      <View style={styles.viewStyle}>
        {this.renderImages()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#F5FCFF',
  },
  imageGrid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center'
  },
  image: {
      width: 106,
      height: 106,
      margin: 4,
  },
  viewStyle: {
    flex: 1,
    backgroundColor: 'white'
  }
});

export default GalleryImages
