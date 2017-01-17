import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';


class MagicEight extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.buttons}>Magic 8 Ball</Text>
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
    flex: 3,
    textAlign: 'center',
    margin: 10,
    color: '#FFC519',
  },
});

export default MagicEight;
