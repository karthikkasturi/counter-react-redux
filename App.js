/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import CounterContainer from './containers/counterContainer'
import {Provider} from 'react-redux'
import store from './store/store'


export default class App extends Component {
  render() {
    return (
      <Provider store = {store}>
        <View style = {styles.container}>
          <CounterContainer/>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
