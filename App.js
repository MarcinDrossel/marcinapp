import React, { Component } from 'react';
import { Alert, StyleSheet, View, Button, } from 'react-native'

export default class ButtonBasic extends Component {
  onPressButton() {
    Alert.alert('Nacisłeś guzik!');
  }
  render() {
    return(
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
        <Button 
        onPress={this.onPressButton} 
        title='Nasiśnij mnie' 
        />
      </View>
        <View style={styles.buttonContainer}>
          <Button 
            onPress={this.onPressButton}
            title='Naciśnij mnie'
            color='#841584'
          />
        </View>
        <View style={styles.alternativeLayoutButtonContainer}>
          <Button
            onPress={this.onPressButton}
            title='To wygląda dobrze'
          />
          <Button
            onPress={this.onPressButton}
            title='OK!'
            color='#841584'
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20,
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});