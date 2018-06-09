import React, { Component } from 'react';
import { Text, View, PermissionsAndroid  } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import Reducers from './src/Reducers';
import firebase from 'firebase';
import StackNav from './src/Components/StackNav';


export default class App extends Component {
componentWillMount() {
  const config = {
   apiKey: 'AIzaSyCLp5P8M7_lf7JqpufxBqYHgzaWiusUNbc',
   authDomain: 'mowe-c2978.firebaseapp.com',
   databaseURL: 'https://mowe-c2978.firebaseio.com',
   projectId: 'mowe-c2978',
   storageBucket: 'mowe-c2978.appspot.com',
   messagingSenderId: '662688403992'
 };
 firebase.initializeApp(config);
}

constructor() {
super();
console.disableYellowBox =  true;
}


  render() {
    const store = createStore(Reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <StackNav />
      </Provider>
    );
  }
}
