import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { RFValue } from 'react-native-responsive-fontsize';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import firebase from 'firebase';
import { LinearGradient } from 'expo-linear-gradient';

let customFonts = {
  Roboto: require('../assets/Roboto-MediumItalic.ttf'),
};

export default class PlantCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
      plant_data: this.props.plant.value,
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
    let plant = this.state.plant_data;

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
                <Text style={styles.plantTitleText}>{plant.title}</Text>
                <Text
                  style={[
                    styles.plantText,
                    {
                      marginBottom: RFValue(10),
                      marginTop: RFValue(5),
                      borderWidth: 0,
                    },
                  ]}>
                  {plant.description}
                </Text>
                <Text style={[styles.plantText, { marginBottom: RFValue(7) }]}>
                  Scientific Name: {plant.scientificName}
                </Text>
                <Text
                  style={[
                    styles.plantText,
                    { marginBottom: RFValue(7), marginTop: RFValue(4) },
                  ]}>
                  Family: {plant.family}
                </Text>
                <Text
                  style={[
                    styles.plantText,
                    { marginBottom: RFValue(7), marginTop: RFValue(4) },
                  ]}>
                  Species: {plant.species}
                </Text>
                <Text
                  style={[
                    styles.plantText,
                    { marginBottom: RFValue(7), marginTop: RFValue(4) },
                  ]}>
                  Benefits: {plant.benefits}
                </Text>
                <Text
                  style={[
                    styles.plantText,
                    { marginBottom: RFValue(7), marginTop: RFValue(4) },
                  ]}>
                  Places Found: {plant.places}
                </Text>
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
  },
  plantTitleText: {
    marginTop: RFValue(-5),
    marginBottom: RFValue(12),
    fontFamily: 'Roboto',
    fontSize: RFValue(27),
    color: '#ffdead',
    textDecorationLine: 'underline',
  },
  plantText: {
    fontFamily: 'Roboto',
    fontSize: RFValue(20),
    color: '#Ffffe4',
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#Ffffe4',
    padding: RFValue(10),
  },
});
