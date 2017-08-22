import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView
} from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { events } from '../config/data';

import { connect } from 'react-redux';
import {
  ActivityIndicator,
  RefreshControl,
  // ...others
} from 'react-native';
connect(
  state => ({
    movies: state.movies,
    loading: state.loading,
  }),
  dispatch => ({
    refresh: () => dispatch({type: 'GET_MOVIE_DATA'}),
  }),
)

class EventList extends Component {
  showEvent = (event) => {
    this.props.navigation.navigate('EventDetail', { ...event });
  };

  render() {
    const { movies, loading, refresh } = this.props;
    return (
      <ScrollView>
        <List>
          {events.map((event) => (
            <ListItem
              key={event.name}
              title={event.name}
              subtitle={event.name}
              onPress={() => this.showEvent(event)}
            />
          ))}
        </List>
      </ScrollView>
    );
  }
}

export default EventList;
