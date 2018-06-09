import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, Button, Linking } from 'react-native';
import { Card, CardItem, Container, Header, Content, Icon, Left, Body} from 'native-base';

class ItemDetails extends Component {

  render() {

     const { navigation } = this.props;
     const description = navigation.getParam('description', 'defaultDesc');
     const ImageUrl = navigation.getParam('ImageUrl','http://www.stickpng.com/img/miscellaneous/symbols/refresh-icon');
     const Author = navigation.getParam('Author','Abram Samir');
     const Article = navigation.getParam('Article','https://techcrunch.com/2018/06/09/accenture-wants-to-beat-unfair-ai-with-a-professional-toolkit/');


    return (
      <Card>
      <CardItem>
          <Text style={{ fontSize: 16 }}>By :{Author}</Text>
      </CardItem>
          <CardItem cardBody>
              <Image
              source={{ uri: ImageUrl }}
              style={{ height: 200, width: null, flex: 1 }}
              />
        </CardItem>
        <CardItem>
          <Text style={{fontWeight: 'bold'}}>Detailed description:</Text>
        </CardItem>
        <CardItem>

            <Text>{description}</Text>
        </CardItem>

        <View style={{ paddingHorizontal: 5 }}>
            <Button
            onPress={() => Linking.openURL(Article)}
            title='GO to full article'
             />
         </View>

      </Card>
    );
  }
}

const styles = StyleSheet.create({

});


export default ItemDetails;
