import React, { Component } from 'react';
import { Image, View, Text } from 'react-native';

class Greeting extends Component {
  render() {
    return (
      <Text>Cześć! {this.props.name}</Text>
    );
  }
}

export default class HelloWorldApp extends Component {
  render(){
  return (
    <View style={{alignItems: 'center'}}>
      <Greeting name='Ala' />
      <Greeting name='Marcin' />
      <Greeting name='Filip' />
      <Greeting name='Asia' />
      <Greeting name='Olek' />
      <Greeting name='Andrzej' />
      <Greeting name='Marcin' />
    </View>
  );
 };
}
