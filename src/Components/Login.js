import React, { Component } from 'react';
import { Item, Input } from 'native-base';
import { View, Text, Button, ActivityIndicator, ImageBackground } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, logIn } from '../Actions';

 class Login extends Component {

   componentWillReceiveProps(nextProps){
    if (nextProps.success) {
      this.props.navigation.navigate('DrawerScreen');
    }
}


onButtonPress() {
  const { email, password } = this.props;
  console.log(email);
  this.props.logIn({ email, password });
}

onEmailChange(text) {
  this.props.emailChanged(text);
    }
onPasswordChange(text) {
  this.props.passwordChanged(text);
    }


renderButton() {
  if (this.props.loading) {
    return <ActivityIndicator size="small" />;
  }
  return (
    <Button
      title='Sign In'
      onPress={this.onButtonPress.bind(this)}
    />
  );
}


  render() {
    return (
      <ImageBackground
      source={require('../icons/Login.jpg')}
      style={styles.imageBackground}
       >

      <View style={styles.container}>
            <View style={styles.viewStyle}>
                <Item rounded style={styles.roundedItem}>
                    <Input
                     placeholder='Email'
                     onChangeText={this.onEmailChange.bind(this)}
                     value={this.props.email}
                     />
                  </Item>
                </View>
                <View style={styles.viewStyle}>
                  <Item rounded style={styles.roundedItem} >
                    <Input
                    placeholder='Password'
                    onChangeText={this.onPasswordChange.bind(this)}
                    value={this.props.password}
                    />
                    </Item>
                </View>
                <View style={{paddingTop: 15}}>
                  {this.renderButton()}

                 </View>
                 <Text style={styles.errorTextStyle}>
                      {this.props.error}
                 </Text>
      </View>
      </ImageBackground>


    );
  }
}

const styles =({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    justifyContent: 'center'
  },
  roundedItem: {
    backgroundColor: 'white',
    paddingTop: 10
  },
  viewStyle: {
    paddingTop: 7
  },
  errorTextStyle: {
  fontSize: 20,
  alignSelf: 'center',
  color: 'red'
},
imageBackground: {
   width: '100%',
   height: '100%'
}
});

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading, success } = auth;
  console.log('successProp', success);
  return { email, password, error, loading, success };
};


export default connect(mapStateToProps, { emailChanged, passwordChanged, logIn })(Login);
