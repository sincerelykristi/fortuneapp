import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

class FortuneCookie extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={{ uri: 'https://lh3.ggpht.com/ivrjenAgfdYeqIJwl4KFlZ_FEQyw0Ftaz_PYdA9E24EKaIDSfXCjAlYMKKUkH3He8oc=w300' }} style={{ width: 300, height: 300 }} />
        <Text style={styles.crack}>Tap to open your Fortune Cookie</Text>
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
  crack: {
    fontSize: 20,
    fontFamily: 'Thonburi-Bold',
    marginBottom: 40,
    color: '#FFFFFF',
    justifyContent: 'flex-end',
    textAlign: 'center',
  },

});

export default FortuneCookie;
