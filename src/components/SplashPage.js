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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#A112B2',
  },
  title: {
    // flex: 3,
    marginBottom: 50,
    fontSize: 60,
    fontFamily: 'Thonburi-Bold',
    color: '#FFC519',
    transform: [{ rotate: '-20deg' }],
  },
  message: {
    // flex: 2,
    fontSize: 20,
    fontFamily: 'Thonburi-Bold',
    color: '#ffffff'
  }
});

export default SplashPage;
