import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';


class HoroscopeA extends Component {
constructor() {
    super();
    this.state = {
      date: '',
      sunsign: '',
      horoscope: ''
    };
  }

  componentWillMount() {
    fetch(
      `http://horoscope-api.herokuapp.com/horoscope/today/${this.props.title}`)
      .then((response) => response.json())
      .then((responseData) => {
        const messyDate = responseData.date;
        const section = messyDate.split('-');
        const formattedDate = section[1] + '/' + section[0] + '/' + section[2];
        this.setState({
          date: formattedDate,
          horoscope: responseData.horoscope.replace(/\[|\'/g, ''),
          sunsign: this.props.title
        });
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
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    backgroundColor: '#660198',
    padding: 10,
    width: 275,
  }
});


export default HoroscopeA;
