import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet
} from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { events } from '../config/data';

import { connect } from 'react-redux';
import {
  ActivityIndicator,
  RefreshControl,
  // ...others
} from 'react-native';

@connect(
  state => ({
    movies: state.movies,
    loading: state.loading,
  }),
  dispatch => ({
    refresh: () => dispatch({type: 'GET_MOVIE_DATA'}),
  }),
)

export default class EventList extends Component {

  state = {
    popupIsOpen: false,
    // Day chosen by user
    chosenDay: 0,       // choose first day by default
    // Time chosen by user
    chosenTime: null,
  }

  showEvent = (movie) => {
    console.log(' SHOW EVENT');
    this.setState({
        popupIsOpen: true,
        movie,
      });
    console.log(this.state);
    console.log(this.props);
    console.log(movie.title);
    this.props.navigation.navigate('EventDetail',  {movie:movie} );
  };

  render() {
    console.log('FOO1');
    console.log(this.props);
    const { movies, loading, refresh } = this.props;
    console.log(movies);
    console.log(loading);
    console.log(refresh);

    // movies ? movies.map((movie, index) => console.log(movie)) : console.log('NO movies');
    return (
       <View style={styles.container}>
        {movies
          ? <ScrollView
              contentContainerStyle={styles.scrollContent}
              // Hide all scroll indicators
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              refreshControl={
                <RefreshControl
                  refreshing={loading}
                  onRefresh={refresh}
                />
              }
            >
            <List>
              {movies.map((movie, index) => <ListItem
                key={index}
                title={movie.title}
                onPress={() => this.showEvent(movie)}
              />)}
            </List>
            </ScrollView>
          : <ActivityIndicator
              animating={loading}
              style={styles.loader}
              size="large"
            />
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,                // take up all screen
    paddingTop: 20,         // start below status bar
  },
  loader: {
    flex: 1,
    alignItems: 'center',     // center horizontally
    justifyContent: 'center', // center vertically
  }
});
