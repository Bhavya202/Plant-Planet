import React, { Component } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import CustomSidebarMenu from './CustomSideBarMenu';
import TabNavigator from './TabNavigator';
import Logout from '../screens/Logout';
import AppInfo from '../screens/AppInfo';
import FunFacts from '../screens/FunFacts';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

export default class DrawerNavigator extends Component {
  render() {
    let props = this.props;

    return (
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContentOptions={{
          activeTintColor: '#e91e63',
          inactiveTintColor: 'white',
          itemStyle: { marginVertical: 5 },
        }}
        drawerContent={(props) => <CustomSidebarMenu {...props} />}>
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{
            unmountOnBlur: true,
            drawerIcon: ({ color }) => (
              <Ionicons name="home-outline" size={22} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="About Plants"
          component={TabNavigator}
          options={{
            unmountOnBlur: true,
            drawerIcon: ({ color }) => (
              <Ionicons name="leaf-outline" size={22} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Fun Facts"
          component={FunFacts}
          options={{
            unmountOnBlur: true,
            drawerIcon: ({ color }) => (
              <Ionicons name="happy-outline" size={22} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="App Info"
          component={AppInfo}
          options={{
            unmountOnBlur: true,
            drawerIcon: ({ color }) => (
              <Ionicons
                name="information-circle-outline"
                size={22}
                color={color}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Logout"
          component={Logout}
          options={{
            unmountOnBlur: true,
            drawerIcon: ({ color }) => (
              <Ionicons name="exit-outline" size={22} color={color} />
            ),
          }}
        />
      </Drawer.Navigator>
    );
  }
}
