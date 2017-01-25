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
import HoroscopeAquarius from './components/HoroscopeAquarius';
import HoroscopePisces from './components/HoroscopePisces';
import HoroscopeAries from './components/HoroscopeAries';
import HoroscopeTaurus from './components/HoroscopeTaurus';
import HoroscopeGemini from './components/HoroscopeGemini';
import HoroscopeCancer from './components/HoroscopeCancer';
import HoroscopeLeo from './components/HoroscopeLeo';
import HoroscopeVirgo from './components/HoroscopeVirgo';
import HoroscopeLibra from './components/HoroscopeLibra';
import HoroscopeScorpio from './components/HoroscopeScorpio';
import HoroscopeSagittarius from './components/HoroscopeSagittarius';
import HoroscopeCapricorn from './components/HoroscopeCapricorn';

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
        <Scene
               key="horoscopeAquarius"
               title="Aquarius"
               navigationBarStyle={styles.navBar}
               titleStyle={styles.navBarTitle}
               backButtonTextStyle={{ textDecorationColor: '#F16B6F' }}
               component={HoroscopeAquarius}
        />
        <Scene
               key="horoscopePisces"
               title="Pisces"
               navigationBarStyle={styles.navBar}
               titleStyle={styles.navBarTitle}
               backButtonTextStyle={{ textDecorationColor: '#F16B6F' }}
               component={HoroscopePisces}
        />
        <Scene
               key="horoscopeAries"
               title="Aries"
               navigationBarStyle={styles.navBar}
               titleStyle={styles.navBarTitle}
               backButtonTextStyle={{ textDecorationColor: '#F16B6F' }}
               component={HoroscopeAries}
        />
        <Scene
               key="horoscopeTaurus"
               title="Taurus"
               navigationBarStyle={styles.navBar}
               titleStyle={styles.navBarTitle}
               backButtonTextStyle={{ textDecorationColor: '#F16B6F' }}
               component={HoroscopeTaurus}
        />
        <Scene
               key="horoscopeGemini"
               title="Gemini"
               navigationBarStyle={styles.navBar}
               titleStyle={styles.navBarTitle}
               backButtonTextStyle={{ textDecorationColor: '#F16B6F' }}
               component={HoroscopeGemini}
        />
        <Scene
               key="horoscopeCancer"
               title="Cancer"
               navigationBarStyle={styles.navBar}
               titleStyle={styles.navBarTitle}
               backButtonTextStyle={{ textDecorationColor: '#F16B6F' }}
               component={HoroscopeCancer}
        />
        <Scene
               key="horoscopeLeo"
               title="Leo"
               navigationBarStyle={styles.navBar}
               titleStyle={styles.navBarTitle}
               backButtonTextStyle={{ textDecorationColor: '#F16B6F' }}
               component={HoroscopeLeo}
        />
        <Scene
               key="horoscopeVirgo"
               title="Virgo"
               navigationBarStyle={styles.navBar}
               titleStyle={styles.navBarTitle}
               backButtonTextStyle={{ textDecorationColor: '#F16B6F' }}
               component={HoroscopeVirgo}
        />
        <Scene
               key="horoscopeLibra"
               title="Libra"
               navigationBarStyle={styles.navBar}
               titleStyle={styles.navBarTitle}
               backButtonTextStyle={{ textDecorationColor: '#F16B6F' }}
               component={HoroscopeLibra}
        />
        <Scene
               key="horoscopeScorpio"
               title="Scorpio"
               navigationBarStyle={styles.navBar}
               titleStyle={styles.navBarTitle}
               backButtonTextStyle={{ textDecorationColor: '#F16B6F' }}
               component={HoroscopeScorpio}
        />
        <Scene
               key="horoscopeSagittarius"
               title="Sagittarius"
               navigationBarStyle={styles.navBar}
               titleStyle={styles.navBarTitle}
               backButtonTextStyle={{ textDecorationColor: '#F16B6F' }}
               component={HoroscopeSagittarius}
        />
        <Scene
               key="horoscopeCapricorn"
               title="Capricorn"
               navigationBarStyle={styles.navBar}
               titleStyle={styles.navBarTitle}
               backButtonTextStyle={{ textDecorationColor: '#F16B6F' }}
               component={HoroscopeCapricorn}
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
