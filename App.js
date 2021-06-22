import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import VegetableScreen from './Screens/VegetableScreen.js'
import ReviewScreen from "./Screens/ReviewScreen.js";
import {createSwitchNavigator, createAppContainer} from 'react-navigation'


const App = () => (
  <AppContainer/>
);


const switchNavigator = createSwitchNavigator({
  VegetableScreen:VegetableScreen, 
  ReviewScreen:ReviewScreen
})
const AppContainer = createAppContainer(switchNavigator)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
 
});

export default App;