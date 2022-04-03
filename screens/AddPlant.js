import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  ScrollView,
  TextInput,
  Dimensions,
  Button,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import firebase from 'firebase';
import { LinearGradient } from 'expo-linear-gradient';

let customFonts = {
  Roboto: require('../assets/Roboto-MediumItalic.ttf'),
};

export default class AddPlant extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
      title: '',
      description: '',
      scientificName: '',
      family: '',
      species: '',
      benefits: '',
      places: '',
    };
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  async addPlant() {
    if (
      this.state.title &&
      this.state.description &&
      this.state.scientificName &&
      this.state.family &&
      this.state.species &&
      this.state.benefits &&
      this.state.places
    ) {
      let plantData = {
        title: this.state.title,
        description: this.state.description,
        scientificName: this.state.scientificName,
        family: this.state.family,
        species: this.state.species,
        benefits: this.state.benefits,
        places: this.state.places,
      };
      await firebase
        .database()
        .ref('/plants/' + Math.random().toString(36).slice(2))
        .set(plantData)
        .then(function (snapshot) {});
      this.props.navigation.navigate('Plant Info');
      alert('Plant Added!!');
    } else {
      alert(
        'Error!' + ' All Fields Are Required!!',
        [{ text: 'Okay', onPress: () => console.log('Okay Pressed!') }],
        { cancelable: false }
      );
    }
  }

  render() {
    if (!this.state.fontsLoaded) {
      return <AppLoading />;
    } else {
      return (
        <LinearGradient
          style={styles.container}
          colors={['#E5E4E2', '#3DCAB7', '#31C0B4', 'transparent']}>
          <SafeAreaView style={styles.droidSafeArea} />
          <View style={styles.appTitle}>
            <View style={styles.appIcon}>
              <Image
                source={require('../assets/logo.png')}
                style={styles.iconImage}></Image>
            </View>
            <View style={styles.appTitleTextContainer}>
              <Text style={styles.appTitleText}>New Plant</Text>
            </View>
          </View>
          <View style={styles.fieldsContainer}>
            <ScrollView>
              <View style={{ marginHorizontal: RFValue(10) }}>
                <TextInput
                  style={[styles.inputFont, { backgroundColor: '#ffdead' }]}
                  onChangeText={(title) => this.setState({ title })}
                  placeholder={'Title..'}
                  placeholderTextColor={'black'}
                />
                <TextInput
                  style={[styles.inputFont, styles.inputBox]}
                  onChangeText={(description) => this.setState({ description })}
                  placeholder={'Description..'}
                  multiline={true}
                  numberOfLines={5}
                  placeholderTextColor={'black'}
                />
                <TextInput
                  style={[styles.inputFont, styles.inputBox]}
                  onChangeText={(scientificName) =>
                    this.setState({ scientificName })
                  }
                  placeholder={'Scientific Name..'}
                  multiline={true}
                  numberOfLines={5}
                  placeholderTextColor={'black'}
                />
                <TextInput
                  style={[styles.inputFont, styles.inputBox]}
                  onChangeText={(family) => this.setState({ family })}
                  placeholder={'Family Name..'}
                  multiline={true}
                  numberOfLines={5}
                  placeholderTextColor={'black'}
                />
                <TextInput
                  style={[styles.inputFont, styles.inputBox]}
                  onChangeText={(species) => this.setState({ species })}
                  placeholder={'Species..'}
                  multiline={true}
                  numberOfLines={5}
                  placeholderTextColor={'black'}
                />
                <TextInput
                  style={[styles.inputFont, styles.inputBox]}
                  onChangeText={(benefits) => this.setState({ benefits })}
                  placeholder={'Benefits..'}
                  multiline={true}
                  numberOfLines={5}
                  placeholderTextColor={'black'}
                />
                <TextInput
                  style={[styles.inputFont, styles.inputBox]}
                  onChangeText={(places) => this.setState({ places })}
                  placeholder={'Places Found..'}
                  multiline={true}
                  numberOfLines={5}
                  placeholderTextColor={'black'}
                />
              </View>
              <View style={[styles.submitButton, styles.lastBox]}>
                <Button
                  onPress={() => {
                    this.addPlant();
                  }}
                  title="Submit"
                />
              </View>
            </ScrollView>
          </View>
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
    marginBottom: RFValue(23),
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
    textDecorationLine: 'underline',
  },
  fieldsContainer: {
    flex: 0.85,
  },
  inputFont: {
    height: RFValue(40),
    borderColor: 'black',
    borderWidth: RFValue(1),
    borderRadius: RFValue(5),
    paddingLeft: RFValue(10),
    color: 'black',
    fontFamily: 'Roboto',
  },
  inputBox: {
    marginTop: RFValue(20),
    paddingTop: RFValue(10),
    textAlignVertical: 'center',
    padding: RFValue(5),
    backgroundColor: '#ffdead',
  },
  lastBox: {
    marginTop: RFValue(10),
    marginBottom: RFValue(20),
  },
  submitButton: {
    marginTop: RFValue(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
