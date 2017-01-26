import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';
import SplashPage from './components/SplashPage';
import FortuneList from './components/FortuneList';
import MagicEight from './components/MagicEight';
import MagicEightFront from './components/MagicEightFront';
import FortuneCookie from './components/FortuneCookie';
import FortuneCookieCracked from './components/FortuneCookieCracked';
import Horoscope from './components/Horoscope';
import HoroscopeA from './components/HoroscopeA';
import data from './data';

class App extends Component {

  renderHoroscopes(){
    return data.map(horoscope => {
      return (
        <Scene
          key={horoscope.key}
          title={horoscope.title}
          navigationBarStyle={styles.navBar}
          titleStyle={styles.navBarTitle}
          backButtonTextStyle={{ textDecorationColor: '#F16B6F' }}
          component={HoroscopeA}
        />
      );
    });
  }

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
        <Scene
               key="magicEightFront"
               navigationBarStyle={styles.navBar}
               titleStyle={styles.navBarTitle}
               backButtonTextStyle={{ textDecorationColor: '#F16B6F' }}
               component={MagicEightFront}
        />
        <Scene
               key="fortuneCookie"
               title="Fortune Cookie"
               navigationBarStyle={styles.navBar}
               titleStyle={styles.navBarTitle}
               backButtonTextStyle={{ textDecorationColor: '#F16B6F' }}
               component={FortuneCookie}
        />
        <Scene
               key="fortuneCookieCracked"
               navigationBarStyle={styles.navBar}
               titleStyle={styles.navBarTitle}
               backButtonTextStyle={{ textDecorationColor: '#F16B6F' }}
               component={FortuneCookieCracked}
        />
        <Scene
               key="horoscope"
               title="Horoscope"
               navigationBarStyle={styles.navBar}
               titleStyle={styles.navBarTitle}
               backButtonTextStyle={{ textDecorationColor: '#F16B6F' }}
               component={Horoscope}
        />

        { this.renderHoroscopes() }

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
