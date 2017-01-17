import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';

const SplashPage = () => {
  return (
    <View style={styles.container} onPress={Actions.apps}>
      <Text style={styles.title} onPress={Actions.apps}>Fortune!</Text>
      <Text style={styles.message} onPress={Actions.apps}>Tap to continue...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A112B2',
  },
  title: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 60,
    fontFamily: 'Thonburi-Bold',
    textAlign: 'center',
    margin: 10,
    color: '#FFC519',
    transform: [{ rotate: '-20deg' }],
  },
  message: {
    justifyContent: 'flex-end',
    fontSize: 20,
    fontFamily: 'Thonburi-Bold',
    textAlign: 'center',
    color: '#ffffff'
  }
});

export default SplashPage;
