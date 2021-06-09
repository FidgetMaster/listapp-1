import React from 'react';
import { Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Homescreen from './screens/homescreen';
import Formscreen from './screens/formscreen';

export default function App() {
  return (
    <AppContainer/>
  )
}
const TabNavigator = createBottomTabNavigator({
  Homescreen:Homescreen,
  Formscreen:Formscreen
})
const AppContainer = createAppContainer(TabNavigator)