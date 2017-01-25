import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';


class MagicEight extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.blackball} onPress={Actions.magicEightFront}>
          <View style={styles.whiteball} onPress={Actions.magicEightFront}><Text style={styles.eight} onPress={Actions.magicEightFront}>8</Text></View>
        </View>
        <Text
          style={styles.shake}
          onPress={Actions.magicEightFront}
        >
          Tap to ask your question!
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#A112B2',
    paddingTop: 150,
  },
  blackball: {
    width: 250,
    height: 250,
    borderRadius: 250 / 2,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  whiteball: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  eight: {
    fontSize: 50,
    fontFamily: 'Thonburi-Bold',
  },
  shake: {
    fontSize: 20,
    fontFamily: 'Thonburi-Bold',
    marginBottom: 40,
    color: '#FFFFFF',
    justifyContent: 'flex-end',
  },
});

export default MagicEight;
