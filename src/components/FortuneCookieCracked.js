import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

class FortuneCookieCracked extends Component {
  render() {
    const fortunes = [
    'Always keep your words soft & sweet, just in case you have to eat them.',
    'When everything’s coming your way, you’re in the wrong lane.',
    'You can\'t always get what you want. But If you try sometimes, you get what you need',
    'The greatest danger could be your stupidity.',
    'A cynic is only a frustrated optimist.',
    'The greatest risk is not taking one.',
    'Fortune favors the bold.',
    'To be old and wise, you must first be young and stupid.',
    'Try? No! Do or do not, there is no try.',
    '\uD83D\uDE26 \uD83D\uDE26 \uD83D\uDE26 \uD83D\uDE26',
    '☺ ☺ ☺ ☺',
    '❤ ❤ ❤ ❤',
    'Stop thinking about the road not taken and pave over the one you did.',
    'Do not seek so much to find the answer as much as to understand the question better.',
    'Two small jumps are sometimes better than one big leap.',
    'Beauty is simply beauty. Originality is magical.',
    'Plan your work and work your plan.',
    'The best is yet to come.',
    'There are no shortcuts to any place worth going',
    'Consume less. Share more. Enjoy life.',
    'Hooray for most things!'
  ];
    return (
      <View style={styles.container}>
        <Image style={styles.cookie} source={{ uri: 'https://lh3.ggpht.com/ivrjenAgfdYeqIJwl4KFlZ_FEQyw0Ftaz_PYdA9E24EKaIDSfXCjAlYMKKUkH3He8oc=w300' }} style={{ width: 350, height: 350 }} />
        <View style={styles.paper}>
        <Text>{ fortunes[Math.floor(Math.random() * (21 - 1))] }</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A112B2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cookie: {
    position: 'relative',
  },
  paper: {
    backgroundColor: '#FFFFFF',
    width: 270,
    height: 60,
    marginLeft: 20,
    marginRight: 20,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{ rotate: '-10deg' }],
    bottom: 75,
  },
  message: {
    fontSize: 18,
    width: 240,
    fontFamily: 'Thonburi-Bold',
  },

});

export default FortuneCookieCracked;
