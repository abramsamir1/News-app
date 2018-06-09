import React, {Component} from 'react';
import { createStackNavigator } from 'react-navigation';
import Login from './Login';
import DrawerNav from './DrawerNav';
import ItemDetails from './ListFolder/ItemDetails';
import ChildItem from './ListFolder/ChildItem';

const StackNav = createStackNavigator({
    LoginScreen: {
      screen: Login,
      navigationOptions: ({
          header: null,
        })
},
    DrawerScreen: {
      screen: DrawerNav,
      navigationOptions: ({
        header: null
      })
    },
    DetailsScreen: {
      screen: ItemDetails,
    },
    ChilldScreen: {
      screen: ChildItem,
      navigationOptions: ({
          header: null,
        })
    },
  });


export default StackNav;
