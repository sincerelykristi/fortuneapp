import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';
import SplashPage from './components/SplashPage';
import FortuneList from './components/FortuneList';
import MagicEight from './components/MagicEight';

class App extends Component {
  render() {
    return (
    <Router>
      <Scene key="root" hideNavBar={'true'}>
        <Scene key="splash" component={SplashPage} initial />
      </Scene>
      <Scene key="apps">
        <Scene
               key="list"
               title="Fortune!"
               navigationBarStyle={styles.navBar}
               component={FortuneList}
               initial
        />
        <Scene
               key="magicEight"
               title="Magic Eight Ball"
               navigationBarStyle={styles.navBar}
               titleStyle={styles.navBarTitle}
               backButtonTextStyle={{ textDecorationColor: '#F16B6F' }}
               component={MagicEight}
        />
      </Scene>
    </Router>
    );
  }
}

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: '#14CC9C',
  },
  navBarTitle: {
    fontFamily: 'Thonburi-Bold',
  }
});


export default App;
