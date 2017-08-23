import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Tile, List, ListItem } from 'react-native-elements';
import { connect } from 'react-redux';
// @connect(
//   state => ({
//     movie: state.movie
//   })
// )

class EventDetail extends Component {
  render() {
    console.log("EVENT DETAIL");
    console.log(this.props.navigation.state.params);
    console.log(this.props);
    const { movie } = this.props.navigation.state.params;
    console.log(movie);
    return (
      <ScrollView>
        <List>
          <ListItem
            title="Name"
            rightTitle={movie.title}
            hideChevron
          />
        </List>
      </ScrollView>
    );
  }
}

export default EventDetail;
