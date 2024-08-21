import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  KeyboardAvoidingView,
} from "react-native";
import React from "react";
import { TextInput, Button } from "react-native-paper";
import { useState } from "react";
import globalStyles from "../globalStyle";
import hero from "../assets/images/hero.png";
import { Colors } from "../globalStyle";
// import RegScreen from './RegScreen';
// const { width, height } = Dimensions.get('window');
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const LoginScreen = ({navigation}) => {
  const [loginDetails, setLoginDetails] = useState();
  // console.log(windowWidth);
  return (
    <View style={globalStyles.container}>
      {/* <KeyboardAvoidingView> */}
      <View style={styles.center}>
        <Image source={hero} style={styles.image} />
      </View>
      <TextInput label="Email" />
      <TextInput label="Password" />
      <Button
        mode="contained"
        style={styles.squarred}
        onPress={() => console.log("hello")}
        buttonColor={Colors.primary}
      >
        Login
      </Button>
      <View style={styles.center}>
        <Text>or</Text>
      </View>
      <Button
        mode="outlined"
        style={styles.squarred}
        onPress={() => navigation.navigate("Reg")}
        buttonColor={Colors.white}
        textColor={Colors.primary}
        theme={{
          colors: {
            outline: Colors.primary, // Change this to your desired outline color
          },
        }}
      >
        Register
      </Button>
      {/* </KeyboardAvoidingView> */}
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  squarred: {
    borderRadius: 0,
    marginTop: 20,
    // padding: windowWidth < 450 ? 12 : 23,
    // marginHorizontal:30
    // width:windowHeight*0.4,
  },
  center: {
    // flex:1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    // fontSize:20
    height: 80,
    width: 300,
    marginTop: -200, // aspectRatio:1
  },
});
