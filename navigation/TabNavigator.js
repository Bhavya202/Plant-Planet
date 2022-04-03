import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { RFValue } from 'react-native-responsive-fontsize';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PlantInfo from '../screens/PlantInfo';
import AddPlant from '../screens/AddPlant';
import firebase from 'firebase';

const Tab = createMaterialBottomTabNavigator();

export default class BottomTabNavigator extends Component {
  render() {
    return (
      <Tab.Navigator
        initialRouteName="Plant Info"
        labeled={false}
        shifting={true}
        barStyle={styles.bottomTabStyle}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Plant Info') {
              iconName = focused ? 'leaf' : 'leaf-outline';
            } else if (route.name === 'Add Plants') {
              iconName = focused ? 'add-circle' : 'add-circle-outline';
            }
            return (
              <Ionicons
                name={iconName}
                size={RFValue(25)}
                color={color}
                style={styles.icons}
              />
            );
          },
        })}
        activeColor={'#ee8249'}
        inactiveColor={'gray'}>
        <Tab.Screen
          name="Plant Info"
          component={PlantInfo}
          options={{ unmountOnBlur: true }}
        />
        <Tab.Screen
          name="Add Plants"
          component={AddPlant}
          options={{ unmountOnBlur: true }}
        />
      </Tab.Navigator>
    );
  }
}

const styles = StyleSheet.create({
  bottomTabStyle: {
    backgroundColor: '#eaeaea',
    height: '9%',
    borderTopLeftRadius: RFValue(30),
    borderTopRightRadius: RFValue(30),
    overflow: 'hidden',
    position: 'absolute',
  },
  icons: {
    width: RFValue(30),
    height: RFValue(30),
  },
});
