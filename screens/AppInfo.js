import * as React from 'react';
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
import { LinearGradient } from 'expo-linear-gradient';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';

let customFonts = {
  Roboto: require('../assets/Roboto-MediumItalic.ttf'),
};

export default class AppInfo extends React.Component {
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
      <LinearGradient style={styles.container} colors={[ 'transparent', '#D0F0C0', '#A8E4A0' ]}>
        <SafeAreaView style={styles.droidSafeAreaView} />
        <View style={styles.appContainer}>
          <Image
            source={require('../assets/logo.png')}
            style={styles.appIcon}
          />
          <Text style={styles.appText}>Plant Planet</Text>
        </View>
        <View style={styles.fieldContainer}>
          <View style={styles.field1}>
            <Text style={styles.fieldText1}>App Version: 1.0.0</Text>
          </View>
          <View style={styles.field2}>
            <Text style={styles.fieldText2}>Devloper: Bhavya</Text>
          </View>
          <View style={styles.field3}>
            <Text style={styles.fieldText3}>Contact: 90XXXXXXXX</Text>
          </View>
          <View style={styles.lastField}>
            <Text style={styles.lastFieldText}>
              Mail me at{' '}
              <Text style={{ textDecorationLine: 'underline' }}>
                abc@gmail.com
              </Text>
              , in case of any queries.
            </Text>
          </View>
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
    flex: 0.15,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 10,
  },
  appIcon: {
    width: 125,
    height: 125,
    marginRight: RFValue(10),
    marginLeft: RFValue(-15),
  },
  appText: {
    fontStyle: 'italic',
    fontWeight: 'bold',
    fontSize: RFValue(30),
    fontFamily: 'Roboto',
    textDecorationLine: 'underline',
  },
  fieldContainer: {
    flex: 0.85,
    justifyContent: 'center',
    alignItems: 'center',
  },
  field1: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginBottom: RFValue(15),
    borderRadius: 10,
    backgroundColor: '#E2E5DE',
    borderWidth: 1,
    borderColor: 'gray'
  },
  fieldText1: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: RFValue(17),
    fontFamily: 'Roboto',
  },
  field2: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E2E5DE',
    padding: 10,
    marginBottom: RFValue(15),
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gray'
  },
  fieldText2: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: RFValue(17),
    fontFamily: 'Roboto',
  },
  field3: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E2E5DE',
    padding: 10,
    marginBottom: RFValue(15),
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gray'
  },
  fieldText3: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: RFValue(17),
    fontFamily: 'Roboto',
  },
  lastField: {
    flex: 0.35,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: RFValue(20),
    padding: 10,
    marginBottom: RFValue(15),
    borderRadius: 10,
  },
  lastFieldText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: RFValue(17),
    fontFamily: 'Roboto',
  },
});
