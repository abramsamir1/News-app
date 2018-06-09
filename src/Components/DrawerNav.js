import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { createDrawerNavigator, DrawerItems } from 'react-navigation';
import { Container, Content, Header, Body } from 'native-base';
import Tabnav from './TabNav';
import ListItems from './ListItems';


const CustomDrawerContentComponent = (props) => (

<Container>
    <Header style= {{height: 180 }}>
        <Body>
            <Image
            style={styles.drawerImage}
            source={require('../icons/DrawerPic.png')}
            />
        </Body>
    </Header>

    <Content>
        <DrawerItems {...props} />
    </Content>

</Container>
)

const DrawerNav = createDrawerNavigator ({
  News: { screen: ListItems },
  Gallery: { screen: Tabnav },
},

{
  drawerPosition: 'left',
  contentComponent: CustomDrawerContentComponent,
  drawerOpenRoute: 'DrawerOpen',
  drawerCloseRoute: 'DrawerClose',
  drawerToggleRoute: 'DrawerToggle'
});


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  drawerImage: {
    height: 150,
    width: 150,
    borderRadius: 75,
    alignSelf: 'center'
  }
});

export default DrawerNav;
