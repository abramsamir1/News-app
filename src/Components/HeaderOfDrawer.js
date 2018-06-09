import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Icon, Header, Body } from 'native-base';

class HeaderOfDrawer extends Component {
  render() {
    return (

        <Header style={styles.headerStyle}>
                <View style={styles.viewStyle}>
                        <Icon
                        onPress={() => this.props.navigation.openDrawer()}
                        name="md-menu"
                        style={styles.iconStyle}
                        />
                        <Body style={{ alignItems: 'center' }}>
                              <Text style={{ fontSize: 25 }}>
                                      MoWe Solutions
                              </Text>
                        </Body>
                </View>
          </Header>

    );
  }
}

const styles = {
  headerStyle: {
    backgroundColor: 'white',
    height: 55
  },
  viewStyle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  iconStyle: { color: 'black', marginRight: 10 }
};

export default HeaderOfDrawer;
