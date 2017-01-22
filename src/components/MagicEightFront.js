import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class MagicEightFront extends Component {
  render() {
    const answers = [
    'It is certain',
    'It is decidedly so',
    'Without a doubt',
    'Yes definitely',
    'You may rely on it',
    'As I see it, yes',
    'I guess...',
    'Yas queen',
    'Yes',
    '\u2639',
    'The stars say yes',
    'How am I supposed to know?',
    'I can\'t be bothered, try again later',
    'Better not tell you now',
    'Dumb Question Ask Another',
    'Concentrate and ask again',
    'Do not count on it',
    'No.',
    'DEAR GOD NO',
    'Outlook not so good',
    '...'
  ];

    return (
        <View style={styles.container}>
          <View style={styles.blackball}>
            <View style={styles.window}>
              <Text style={styles.answer}>{ answers[Math.floor(Math.random() * (21 - 1))] }</Text>
            </View>
          </View>
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
  window: {
    width: 120,
    height: 120,
    borderRadius: 120 / 2,
    backgroundColor: '#2E0854',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 5,
    paddingRight: 5,
  },
  triangle: {
    backgroundColor: '#660198',
  },
  answer: {
    fontSize: 17,
    alignItems: 'center',
    backgroundColor: 'transparent',
    color: '#EED2EE',
    shadowColor: '#B23AEE',
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowRadius: 8,
    shadowOpacity: 1.0,
    textAlign: 'center',
    fontFamily: 'Thonburi-Bold',
    borderRadius: 17 / 2,
  },
});

export default MagicEightFront;
