import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/Home';
import IssLocationScreen from './screens/IssLocation';
import MeteorScreen from './screens/Meteors';


const Stack1 = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack1.Navigator
          initialRouteName="IssLocation"
          screenOptions={{ headerShown: false }}>
          <Stack1.Screen name="Home" component={HomeScreen} />
          <Stack1.Screen name="IssLocation" component={IssLocationScreen} />
          <Stack1.Screen name="Meteors" component={MeteorScreen} />
        </Stack1.Navigator>
      </NavigationContainer>
    );
  }
}
