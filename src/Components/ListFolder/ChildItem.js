import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import { Card, CardItem, Container, Header, Content, Button, Icon, Left, Body} from 'native-base';
import { withNavigation } from 'react-navigation';

class ChildItem extends Component {

onRowPress() {
this.props.navigation.navigate('DetailsScreen', {
  ImageUrl: this.props.item.urlToImage,
  description: this.props.item.description,
  Author: this.props.item.author,
  Article: this.props.item.url
 });
}

  render() {
    return (

<TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
      <Card>
          <CardItem>

                  <Body>
                  <Text style={{fontSize: 18}}>Read from: {this.props.item.author}</Text>
                  <Text>Published at: {this.props.item.publishedAt}</Text>
                  </Body>

          </CardItem>
          <CardItem cardBody>
              <Image
              source={{ uri: this.props.item.urlToImage }}
              style={styles.imageStyle}
              />
        </CardItem>
        <CardItem>
            <Text>Title:  {this.props.item.title}</Text>
        </CardItem>
      </Card>
  </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
imageStyle: {
   height: 200,
   width: null,
   flex: 1
}
});


export default withNavigation(ChildItem);
