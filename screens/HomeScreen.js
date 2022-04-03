import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { LinearGradient } from 'expo-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';

let customFonts = {
  Roboto: require('../assets/Roboto-MediumItalic.ttf'),
};

export default class HomeScreen extends React.Component {
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
          <LinearGradient
            style={styles.fieldContainer}
            colors={['transparent', '#3DCAB7', '#31C0B4', 'transparent']}>
            <TouchableOpacity
              style={styles.plantInfo}
              onPress={() => {
                this.props.navigation.navigate('About Plants');
              }}>
              <Ionicons
                name="leaf-outline"
                size={25}
                color={'white'}
                style={styles.ionIcon}
              />
              <Text style={styles.plantInfoText}>About Plants</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.funFact}
              onPress={() => {
                this.props.navigation.navigate('Fun Facts');
              }}>
              <Ionicons
                name="happy-outline"
                size={25}
                color={'white'}
                style={styles.ionIcon}
              />
              <Text style={styles.funFactText}>Fun Facts</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </LinearGradient>
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
  droidSafeAreaView: {
    marginTop:
      Platform.OS === 'android' ? StatusBar.currentHeight : RFValue(35),
  },
  appContainer: {
    top: '-30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  appIconContainer: {
    top: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderRadius: 10,
    padding: 10,
  },
  appIcon: {
    width: 150,
    height: 150,
  },
  appTitleTextContainer: {
    top: '35%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  appTitle: {
    fontSize: 28,
    fontFamily: 'Roboto',
    textDecorationLine: 'underline',
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
  fieldContainer: {
    top: '40%',
    padding: 60,
    paddingVertical: '17%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  plantInfo: {
    borderWidth: 2,
    padding: 10,
    borderRadius: 10,
    marginBottom: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    textAlignVertical: 'center',
    borderColor: 'white',
  },
  plantInfoText: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    fontStyle: 'italic',
    color: 'white',
  },
  funFact: {
    borderWidth: 2,
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    textAlignVertical: 'center',
    borderColor: 'white',
  },
  funFactText: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    fontStyle: 'italic',
    color: 'white',
  },
  ionIcon: {
    marginRight: 10,
    margin: 2,
  },
});
