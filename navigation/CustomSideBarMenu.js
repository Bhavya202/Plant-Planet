import React, { Component } from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  Platform,
  StatusBar,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

export default class CustomSidebarMenu extends Component {
  render() {
    let props = this.props;

    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
        }}>
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
        <DrawerContentScrollView {...props}>
          <DrawerItemList {...props} />
        </DrawerContentScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  droidSafeArea: {
    marginTop:
      Platform.OS === 'android' ? StatusBar.currentHeight : RFValue(35),
  },
  appTitle: {
    flex: 0.25,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: RFValue(50),
  },
  appIcon: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: RFValue(20),
    marginBottom: 10,
  },
  iconImage: {
    width: RFValue(100),
    height: RFValue(100),
    resizeMode: 'contain',
    marginTop: -20,
    marginBottom: 20,
  },
  appTitleTextContainer: {
    flex: 0.7,
    justifyContent: 'center',
  },
  appTitleText: {
    color: 'black',
    fontSize: RFValue(28),
    fontStyle: 'italic',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    marginBottom: 5,
  },
});
