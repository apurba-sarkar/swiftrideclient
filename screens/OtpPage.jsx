import { StyleSheet, View } from "react-native";
import React from "react";
import globalStyles, { Colors } from "../globalStyle";
import { Button, Text, TextInput } from "react-native-paper";

const OtpPage = () => {
  const options = {
    mode: "outlined",
    secureTextEntry: true,
    keyboardType: "numeric",
    maxLength: 1,
    // padding:0
  };
  return (
    <View style={globalStyles.container}>
      <View style={styles.center}>
        <Text variant="titleLarge" style={{ color: Colors.primary }}>
          One Time Pin
        </Text>
        <Text>Please Enter your Six Digit Passwod </Text>
      </View>
      <View style={styles.inputsContainer}>
        <TextInput
          style={styles.input}
          {...options}
          //  right={<TextInput.Affix text="/100" />}s
        />
        <TextInput style={styles.input} {...options} />
        <TextInput style={styles.input} {...options} />
        <TextInput style={styles.input} {...options} />
        <TextInput style={styles.input} {...options} />
        <TextInput style={styles.input} {...options} />
      </View>
      <Button
          mode="contained"
          style={styles.squarred}
        //   onPress={showModal}
          buttonColor={Colors.primary}
        >
        Submit
        </Button>
    </View>
  );
};

export default OtpPage;

const styles = StyleSheet.create({
  center: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: 40,
    marginHorizontal: 5,
    textAlign: "center",
  },
  inputsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    // marginHorizontal: 5, // Space between each input
    // textAlign: 'center',
  },
  squarred: {
    borderRadius: 0,
    marginTop: 20,
    // padding: windowWidth < 450 ? 12 : 23,
    // marginHorizontal:30
    // width:windowHeight*0.4,
  },
});
