import React, { Component } from 'react';
import { Image, View, Text } from 'react-native';

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = {isShowingText: true};

    setInterval(() => {
      this.setState(previoursState => ({
        isShowingText: !previoursState.isShowingText, 
      }));
    }, 1000);
  }
 
  render() {
    const display = this.state.isShowingText ? this.props.text : '';
    return(
      <Text>{display}</Text>
    );
  }
}

export default class BlinkApp extends Component {
  render() {
    return (
      <View>
        <Blink text='I love Blink' />
      </View>
    );
  }
}