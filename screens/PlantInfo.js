import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import PlantCard from './PlantCard';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import { FlatList } from 'react-native-gesture-handler';
import firebase from 'firebase';
import { LinearGradient } from 'expo-linear-gradient';

let customFonts = {
  Roboto: require('../assets/Roboto-MediumItalic.ttf'),
};

export default class PlantInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
      plants: [],
    };
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
    this.fetchPlants();
  }

  fetchPlants = () => {
    firebase
      .database()
      .ref('/plants/')
      .on(
        'value',
        (snapshot) => {
          let plants = [];
          if (snapshot.val()) {
            Object.keys(snapshot.val()).forEach(function (key) {
              plants.push({
                key: key,
                value: snapshot.val()[key],
              });
            });
          }
          this.setState({ plants: plants });
        },
        function (errorObject) {
          console.log('The read failed: ' + errorObject.code);
        }
      );
  };

  renderItem = ({ item: plant }) => {
    return <PlantCard plant={plant} navigation={this.props.navigation} />;
  };

  keyExtractor = (item, index) => index.toString();

  render() {
    if (!this.state.fontsLoaded) {
      return <AppLoading />;
    } else {
      return (
        <LinearGradient
          style={styles.container}
          colors={['#E5E4E2', '#C0C0C0']}>
          <SafeAreaView style={styles.droidSafeArea} />
          <View style={styles.appTitle}>
            <View style={styles.appIcon}>
              <Image
                source={require('../assets/logo.png')}
                style={styles.iconImage}></Image>
            </View>
            <View style={styles.appTitleTextContainer}>
              <Text style={styles.appTitleText}>Plant Planet</Text>
            </View>
          </View>
          {!this.state.plants[0] ? (
            <View style={styles.noplants}>
              <Text style={styles.noplantsText}>No Plants Available</Text>
            </View>
          ) : (
            <View style={styles.cardContainer}>
              <FlatList
                keyExtractor={this.keyExtractor}
                data={this.state.plants}
                renderItem={this.renderItem}
              />
            </View>
          )}
          <View style={{ flex: 0.08 }} />
        </LinearGradient>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  droidSafeArea: {
    marginTop:
      Platform.OS === 'android' ? StatusBar.currentHeight : RFValue(35),
  },
  appTitle: {
    flex: 0.07,
    flexDirection: 'row',
    marginBottom: RFValue(13),
    marginTop: RFValue(10),
  },
  appIcon: {
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconImage: {
    width: '175%',
    height: '175%',
    resizeMode: 'contain',
    marginTop: -10,
    marginBottom: 10,
    marginRight: RFValue(-20),
  },
  appTitleTextContainer: {
    flex: 0.6,
    justifyContent: 'center',
  },
  appTitleText: {
    color: 'black',
    fontSize: RFValue(28),
    fontFamily: 'Roboto',
    marginTop: -10,
    marginBottom: 10,
  },
  cardContainer: {
    flex: 0.85,
  },
  noplants: {
    flex: 0.85,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noplantsText: {
    color: 'black',
    fontSize: RFValue(35),
    fontFamily: 'Roboto',
  },
});
