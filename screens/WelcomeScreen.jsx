import { StyleSheet, Text, View, ActivityIndicator, Image } from "react-native";
import React from "react";
import hero from "../assets/images/hero.png";
import globalStyles from "../globalStyle";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeTabScreen from "./HomeTabScreen";
import RideTabScreen from "./RideTabScreen";
import ActivityTabScreen from "./ActivityTabScreen";
import ProfileTabScreen from "./ProfileTabScreen";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from './LoginScreen';
import RegScreen from './RegScreen';
import OtpPage from "./OtpPage";
const Tab = createBottomTabNavigator();
const WelcomeScreen = () => {
  const da = false;
  return (
        <Tab.Navigator >
          <Tab.Screen name="Home" component={HomeTabScreen} options={{ headerShown: false }} />
          <Tab.Screen name="Ride" component={RideTabScreen}  options={{ headerShown: false }} />
          <Tab.Screen name="Activity" component={ActivityTabScreen}  options={{ headerShown: false }} />
          <Tab.Screen name="Profile" component={ProfileTabScreen}  options={{ headerShown: false }}/>
          <Tab.Screen name="Login" component={LoginScreen}  options={{ headerShown: false }}/>
          <Tab.Screen name="Reg" component={RegScreen}  options={{ headerShown: false }}/>
          <Tab.Screen name="otp" component={OtpPage}  options={{ headerShown: false }}/>
        </Tab.Navigator>

    
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    color: "#000", // Set text color to black
    marginBottom: 20,
  },
});
