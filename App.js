import React, { Component } from 'react';
import {
  FlatList,
  ActivityIndicator,
  View,
  Text,
} from 'react-native';

export default class FetchExample extends Component {
  constructor(props) {
    super(props);
    this.state = {isLoading: true};
  }
  
  async componentDidMount() {
    try {
      const response = await fetch ('https://facebook.github.io/react-native/movies.json');
      const responseJson = await response.json();

      this.setState({
        isLoading: false,
        dataSource: responseJson.movies,
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    if (this.state.isLoading) {
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator />
        </View>
      );
    }

    return(
      <View style={{flex: 1, paddingTop: 20}}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => <Text>{item.title}, {item.releaseYear}</Text>}
          keyExtractor={(item, index) => index}
          />
      </View>
    );
  }
}