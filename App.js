import React, { Component } from 'react';
import {
  FlatList,
  StyleSheet,
  View,
  Text,
} from 'react-native';

export default class FlatListBasic extends Component {
  render() {
    return(
      <View style={styles.container}>
        <FlatList
        data={[
          {key: 'Devin'},
          {key: 'Jackson'},
          {key: 'Joel'},
          {key: 'John'},
          {key: 'Jilliam'},
          {key: 'Julie'},
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});