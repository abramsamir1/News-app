import React, { Component } from 'react';
import { FlatList, ActivityIndicator } from 'react-native';
import { Icon, Container } from 'native-base';
import { connect } from 'react-redux';
import { fetchList } from '../Actions';
import ChildItem from './ListFolder/ChildItem';
import HeaderOfDrawer from './HeaderOfDrawer';

class ListItems extends Component {

static navigationOptions = {
  drawerIcon: ({ tintColor }) => {
    return (
        <Icon name="bookmarks" style={{ color: tintColor }} />
    );
  }
}




componentWillMount() {
  this.props.fetchList();
}

renderFlatlist() {
  if(this.props.loading) {
    return (

        <ActivityIndicator style={{ flex: 1, justifyContent: 'center' }} size='large' />

  );
  }

return (
<Container>

<HeaderOfDrawer navigation={this.props.navigation} />

  <FlatList
        data={this.props.data.articles}
        keyExtractor={(item, index) => item.id   }
        renderItem={({ item, index }) => {
          return (
            <ChildItem item={item} index={index} />
          );
        }}
  />
</Container>
);
}

  render() {
    return (
      <Container>
                  {this.renderFlatlist()}
      </Container>
    );
  }
}

const mapStateToProps = ({ listData }) => {
const { loading, error, data, success } = listData;
return { loading, error, data, success };
};

const styles = {
  icon: {
  width: 24,
  height: 24
  },

  opacity: {
    marginLeft: 10
  }
};

export default connect(mapStateToProps, { fetchList })(ListItems);
