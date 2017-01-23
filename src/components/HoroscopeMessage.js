import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import fetch from 'isomorphic-fetch';


class HoroscopeMessage extends Component {
constructor() {
    super();
    this.state = {
      date: '',
      sunsign: 'virgo',
      horoscope: ''
    };
  }

  componentWillMount() {
    fetch(
      'http://horoscope-api.herokuapp.com/horoscope/today/virgo')
      .then((response) => response.json())
      .then((responseData) => {
        console.log('a');
        this.setState({
          date: responseData.date });
      })
      .done();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Today's date is { this.state.date }</Text>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#A112B2',
  }
});


export default HoroscopeMessage;
