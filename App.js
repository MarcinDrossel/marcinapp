import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, } from 'react-native';

export default class FlexDimensionBasic extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: 'powderblue'}} />
        <View style={{flex: 2, height: 100, backgroundColor: 'skyblue'}} />
        <View style={{flex: 3, height: 150, backgroundColor: 'steelblue'}} />
      </View>
    )
  }
}