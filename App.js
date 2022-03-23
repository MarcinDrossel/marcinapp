import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, TextInput, } from 'react-native';

export default class Translation extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

render () {
  return(
    <View style={{padding: 10}}>
      <TextInput 
      xstyle={{height: 40}}
      placeholder='Wpisz cokolwiek...'
      onChangeText={(text) => this.setState({text})} 
      />
      <Text style={{padding: 40, fontSize: 42}}>
        {this.state.text.split(' ').map(word => word && 'X').join(' ')}
      </Text>
    </View>
    );
  }
}