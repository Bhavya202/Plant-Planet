import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from '../navigation/DrawerNavigator';

export default class DashboardScreen extends React.Component {
  render() {
    return(
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    );
  }
}