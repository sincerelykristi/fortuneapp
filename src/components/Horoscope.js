import React, { Component } from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
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
        <Text style={styles.button} onPress={Actions.horoscopeAquarius}>
          Aquarius
        </Text>
          <Text style={styles.button} onPress={Actions.horoscopePisces}>
            Pisces
          </Text>
          <Text style={styles.button} onPress={Actions.horoscopeAries}>
            Aries
          </Text>
          <Text style={styles.button} onPress={Actions.horoscopeTaurus}>
            Taurus
          </Text>
          <Text style={styles.button} onPress={Actions.horoscopeGemini}>
            Gemini
          </Text>
          <Text style={styles.button} onPress={Actions.horoscopeCancer}>
            Cancer
          </Text>
          <Text style={styles.button} onPress={Actions.horoscopeLeo}>
            Leo
          </Text>
          <Text style={styles.button} onPress={Actions.horoscopeVirgo}>
            Virgo
          </Text>
          <Text style={styles.button} onPress={Actions.horoscopeLibra}>
            Libra
          </Text>
          <Text style={styles.button} onPress={Actions.horoscopeScorpio}>
            Scorpio
          </Text>
          <Text style={styles.button} onPress={Actions.horoscopeSagittarius}>
            Sagittarius
          </Text>
          <Text style={styles.button} onPress={Actions.horoscopeCapricorn}>
            Capricorn
          </Text>
      </ScrollView>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#A112B2',
    paddingTop: 70,
  },
  date: {
    flex: 1,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    paddingBottom: 30,
  },
  button: {
    flex: 1,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#FFC519',
    marginBottom: 3,
    marginTop: 3,
    paddingTop: 5,
    paddingBottom: 5,
    fontSize: 16,
    backgroundColor: '#660198',
    width: 200,
  }
});


export default Horoscope;
