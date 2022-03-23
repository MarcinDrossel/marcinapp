import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, } from 'react-native';

export default class LotsOfStyles extends Component {
  render() {
    return (
      <View>
        <Text style={Styles.red}>To jest czerwone</Text>
        <Text style={Styles.bigblue}>To jest pogrubione i niebieskie</Text>
        <Text style={[Styles.bigblue, Styles.red]}>To jest niebieski z czerownym</Text>
        <Text style={[Styles.red, Styles.bigblue]}>To jest czerwony z niebieskim</Text>
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});