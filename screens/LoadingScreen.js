import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Platform,
  StatusBar,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { RFValue } from 'react-native-responsive-fontsize';
import firebase from 'firebase';

export default class LoadingScreen extends Component {
  componentDidMount() {
    this.checkIfLoggedIn();
  }

  checkIfLoggedIn = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.props.navigation.navigate('DashboardScreen');
      } else {
        this.props.navigation.navigate('LoginScreen');
      }
    });
  };

  render() {
    return (
      <LinearGradient
        style={styles.container}
        colors={['#a2f7b8', '#83F3B4', '#94F4BE']}>
        <SafeAreaView style={styles.droidSafeAreaView} />
        <View style={styles.appContainer}>
          <LinearGradient
            style={styles.appIconContainer}
            colors={['transparent', '#93E9BE']}>
            <Image
              style={styles.appIcon}
              source={require('../assets/logo.png')}
            />
          </LinearGradient>
          <View style={styles.appTitleTextContainer}>
            <Text style={styles.appTitle}>Plant Planet</Text>
          </View>
        </View>
        <View style={styles.screenName}>
          <Text style={styles.screenText}>Loading..</Text>
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  droidSafeAreaView: {
    marginTop:
      Platform.OS === 'android' ? StatusBar.currentHeight : RFValue(35),
  },
  appContainer: {
    top: '-28%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  appIconContainer: {
    top: '25%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderRadius: 10,
    padding: 10,
  },
  appIcon: {
    width: 175,
    height: 175,
  },
  appTitleTextContainer: {
    top: '35%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  appTitle: {
    fontSize: 40,
    textDecorationLine: 'underline',
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
  screenName: {
    justifyContent: 'center',
    alignItems: 'center',
    top: '-2%',
  },
  screenText: {
    color: '#000000',
    fontSize: RFValue(35),
    textAlign: 'center',
    marginTop: -10,
    marginBottom: 10,
    fontStyle: 'italic',
  },
});
