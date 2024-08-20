import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoadingScreen from "./screens/LoadingScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import { SafeAreaView } from "react-native-safe-area-context";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.rootScreen}>
        <StatusBar barStyle="default" />
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="LoadingScreen"
            options={{ headerShown: false }}
          >
            <Stack.Screen name="LodingScreen" component={LoadingScreen} />
            <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    alignItems: "center",
    justifyContent: "center",
  },
  rootScreen: {
    flex: 1,
    // marginTop:StatusBar.currentHeight
  },
});
