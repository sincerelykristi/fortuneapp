import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';

class FortuneList extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.buttons} onPress={Actions.magicEight}>Magic 8 Ball</Text>
        <Text style={styles.buttons} onPress={Actions.fortuneCookie}>Fortune Cookie</Text>
        <Text style={styles.buttons} onPress={Actions.horoscope}>Horoscope</Text>
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
  },
  buttons: {
    fontSize: 20,
    fontWeight: 'bold',
    width: 200,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    textAlign: 'center',
    backgroundColor: '#660198',
    margin: 10,
    color: '#FFC519',
  },
});

export default FortuneList;
