import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Button } from 'react-native-elements';

class Login extends Component {
  handleLoginPress = () => {
    this.props.navigation.navigate('Main');
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
         Login!
        </Text>
        <Button
          title="Main"
          buttonStyle={{ marginTop: 20 }}
          onPress={this.handleLoginPress}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default Login;