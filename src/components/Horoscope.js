import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Horoscope extends Component {


  render() {
    return (
      <View style={styles.container}>
        <Text>Horoscopes!</Text>
        <Text>
          { fetch('http://horoscope-api.herokuapp.com/horoscope/today/Libra', {method: 'GET'})
          .then((response) => response.json())
          .then((responseData) => {
            return responseData.sunsign;
          })
        }
        </Text>
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


export default Horoscope;
