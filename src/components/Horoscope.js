import React, { Component } from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import fetch from 'isomorphic-fetch';
import { Actions } from 'react-native-router-flux';

class Horoscope extends Component {
constructor() {
    super();
    this.state = {
      date: '',
      sunsign: '',
      horoscope: ''
    };
  }

  componentWillMount() {
    fetch('http://horoscope-api.herokuapp.com/horoscope/today/Libra')
      .then((response) => response.json())
      .then((responseData) => {
        console.log('a');
        const messyDate = responseData.date;
        const section = messyDate.split('-');
        const formattedDate = section[1] + '/' + section[0] + '/' + section[2];
        this.setState({
          date: formattedDate });
      })
      .done();
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.date}>
          Get your horoscope for today, { this.state.date }
        </Text>
        <Text style={styles.button}>
          Aquarius
        </Text>
          <Text style={styles.button}>
            Pisces
          </Text>
          <Text style={styles.button}>
            Aries
          </Text>
          <Text style={styles.button}>
            Taurus
          </Text>
          <Text style={styles.button}>
            Gemini
          </Text>
          <Text style={styles.button}>
            Cancer
          </Text>
          <Text style={styles.button}>
            Leo
          </Text>
          <Text style={styles.button}>
            Virgo
          </Text>
          <Text style={styles.button}>
            Libra
          </Text>
          <Text style={styles.button}>
            Scorpio
          </Text>
          <Text style={styles.button}>
            Sagittarius
          </Text>
          <Text style={styles.button}>
            Capricorn
          </Text>
      </ScrollView>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 500,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#A112B2',
    paddingTop: 80,
  },
  date: {
    flex: 1,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    paddingBottom: 40,
  },
  button: {
    flex: 1,
    textAlign: 'center',
    marginBottom: 5,
    marginTop: 5,
    // marginLeft: 5,
    // marginRight: 5,
    // paddingTop: 5,
    paddingBottom: 5,
    fontSize: 18,
    backgroundColor: '#660198',
    width: 100,
  }
});


export default Horoscope;
