import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
// import fetch from 'fetch';


class HoroscopeAries extends Component {
constructor() {
    super();
    this.state = {
      date: '',
      sunsign: 'aries',
      horoscope: ''
    };
  }

  componentWillMount() {
    fetch(
      'http://horoscope-api.herokuapp.com/horoscope/today/aries')
      .then((response) => response.json())
      .then((responseData) => {
        console.log('a');
        const messyDate = responseData.date;
        const section = messyDate.split('-');
        const formattedDate = section[1] + '/' + section[0] + '/' + section[2];
        this.setState({
          date: formattedDate,
          horoscope: responseData.horoscope });
      })
      .done();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.date}>{ this.state.date }</Text>
        <Text style={styles.horoscope}>{ this.state.horoscope }</Text>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#A112B2',
    paddingTop: 80,
  },
  date: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    paddingBottom: 30,
  },
  horoscope: {
    textAlign: 'center',
    fontSize: 16,
    backgroundColor: '#660198',
    padding: 10,
    width: 275,
  }
});


export default HoroscopeAries;
