import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import { TextInput, Button } from "react-native-paper";
import { useState } from "react";
import globalStyles from "../globalStyle";
// const { width, height } = Dimensions.get('window');
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const LoginScreen = () => {
  const [loginDetails, setLoginDetails] = useState();
  console.log(windowWidth);
  return (
    <View style={globalStyles.container}>
      <Text>LoginScreen</Text>
      <TextInput label="Email" />
      <TextInput label="Password" />
      <Button
        mode="contained"
        style={styles.squarred}
        onPress={() => console.log("hello")}
      >
        Login
      </Button>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  squarred: {
    borderRadius: 0,
    marginTop:20
    // padding: windowWidth < 450 ? 12 : 23,
    // marginHorizontal:30
    // width:windowHeight*0.4,
  },
});
