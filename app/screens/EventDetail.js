import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Tile, List, ListItem } from 'react-native-elements';

class EventDetail extends Component {
  render() {
    const { name } = this.props.navigation.state.params;

    return (
      <ScrollView>
        <List>
          <ListItem
            title="Name"
            rightTitle={name}
            hideChevron
          />
        </List>
      </ScrollView>
    );
  }
}

export default EventDetail;
