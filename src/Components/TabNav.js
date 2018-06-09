import React, {Component} from 'react';
import { View, Platform } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import GalleryImages from './TabNavigator/GalleryImages';
import GalleryVideos from './TabNavigator/GalleryVideos';
import { Icon } from 'native-base';
import HeaderOfDrawer from './HeaderOfDrawer';


 class Tabnav extends Component {
   static navigationOptions = {
     header: null,

       drawerIcon: ({ tintColor }) => {
         return (
             <Icon name="camera" style={{ color: tintColor }} />
         );
       }

   }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <HeaderOfDrawer navigation={this.props.navigation} />
        <AppTabNavigator />
      </View>
    );
  }
}

const AppTabNavigator = createBottomTabNavigator({

  ImagesTab: { screen: GalleryImages },
  VideosTab: { screen: GalleryVideos }
}, {
      tabBarPosition: 'bottom',
      animationEnabled: true,
      swipeEnabled: true,
      tabBarOptions: {
        style:{
          ...Platform.select({
            android: {
              backgroundColor: 'white'
            }
          })
        },
        activeTintColor:'gray',
        inactiveTintColor:'#d1cece',
        showLabel: false,
        showIcon: true
      }
  });


export default Tabnav;
