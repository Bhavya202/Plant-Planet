import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  ScrollView,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';

let customFonts = {
  Roboto: require('../assets/Roboto-MediumItalic.ttf'),
};

export default class FactCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
    };
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    if (!this.state.fontsLoaded) {
      return <AppLoading />;
    } else {
      return (
        <View style={styles.container}>
          <SafeAreaView style={styles.droidSafeArea} />
          <ScrollView>
            <LinearGradient
              style={styles.cardContainer}
              colors={['#3DCAB7', '#31C0B4']}>
              <View style={styles.titleContainer}>
                <Text style={styles.factTitleNo}>
                  {this.props.fact.fact_no}
                </Text>
                <Text style={styles.factTitleText}>
                  {this.props.fact.genres}
                </Text>
              </View>
              <View style={styles.factContainer}>
                <Text style={styles.factText}>{this.props.fact.fact}</Text>
              </View>
            </LinearGradient>
          </ScrollView>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  droidSafeArea: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  cardContainer: {
    marginHorizontal: RFValue(23),
    marginBottom: RFValue(25),
    borderRadius: RFValue(10),
    shadowColor: 'rgb(0, 0, 0)',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: RFValue(0.5),
    shadowRadius: RFValue(5),
    elevation: RFValue(2),
    padding: RFValue(30),
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  factTitleText: {
    marginTop: RFValue(-5),
    marginBottom: RFValue(12),
    fontFamily: 'Roboto',
    fontSize: RFValue(27),
    color: '#ffdead',
    textDecorationLine: 'underline',
    textAlign: 'center',
  },
  factTitleNo: {
    marginTop: RFValue(-10),
    marginBottom: RFValue(12),
    fontFamily: 'Roboto',
    fontSize: RFValue(20),
    color: '#ffdead',
    marginRight: RFValue(10),
    borderWidth: 3,
    borderColor: '#ffdead',
    padding: 7,
    borderRadius: RFValue(40),
  },
  factText: {
    fontFamily: 'Roboto',
    fontSize: RFValue(20),
    color: '#Ffffe4',
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#Ffffe4',
    padding: RFValue(10),
  },
});
