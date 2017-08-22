import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Login from '../screens/Login';
import EventList from '../screens/EventList';
import EventDetail from '../screens/EventDetail';

export const LoginStack = StackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      title: 'Login',
    },
  },
});

export const EventListStack = StackNavigator({
  EventList: {
    screen: EventList,
    navigationOptions: {
      title: 'Event List',
    },
  },
  EventDetail: {
    screen: EventDetail,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.name.toUpperCase()}`,
    }),
  },
});

export const Main = TabNavigator({
  EventList: {
    screen: EventListStack,
    navigationOptions: {
      tabBarLabel: '1',
      tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />,
    },
  },
  Me: {
    screen: Login,
    navigationOptions: {
      tabBarLabel: '2',
      tabBarIcon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />
    },
  },
});

export const Root = StackNavigator({
  Login: {
    screen: LoginStack,
  },
  Main: {
    screen: Main,
  },
}, {
  mode: 'modal',
  headerMode: 'none',
});