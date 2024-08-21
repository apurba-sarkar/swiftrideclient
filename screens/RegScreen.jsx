import { StyleSheet, Text, View, Image } from "react-native";
import React , {useState} from "react";
import globalStyles, { Colors } from "../globalStyle";
import { TextInput, Button, Modal } from "react-native-paper";
import hero from "../assets/images/hero.png";

const OtpModal = ({ modalVisible, onClose }) => {

  return (
    <Modal
      animationType="slide"
    transparent={true}
    visible={modalVisible}
    style={{...styles.center}}
    >
      <View>
        <Text>This is a modal</Text>
      </View>
      <Button>Back</Button>
    </Modal>
  );
};

const RegScreen = ({ navigation }) => {
  const [modalVisible,setModalVisible]=useState(false)
  return (
    <View style={globalStyles.container}>
      {/* <Text>RegScreen</Text> */}
      <View style={styles.center}>
        <Image source={hero} style={styles.image} />
      </View>
      <TextInput label="Full Name" />
      <TextInput label="Age" />
      <TextInput label="Pincode" />
      <TextInput label="Mobile" />
      <TextInput label="Email" />
      <TextInput label="Password" />
      <Button
        mode="contained"
        style={styles.squarred}
        onPress={() => setModalVisible(!modalVisible)}
        buttonColor={Colors.primary}
      >
        Register
      </Button>
      <View style={styles.center}>
        <Text>Or</Text>
      </View>
      <Button
        mode="outlined"
        style={styles.squarred}
        onPress={() => navigation.navigate("Login")}
        buttonColor={Colors.white}
        textColor={Colors.primary}
        theme={{
          colors: {
            outline: Colors.primary, // Change this to your desired outline color
          },
        }}
      >
        Login
      </Button>
      <OtpModal modalVisible={modalVisible} onClose={() => setModalVisible(false)}/>
    </View>
  );
};

export default RegScreen;

const styles = StyleSheet.create({
  image: {
    // fontSize:20
    height: 80,
    width: 300,
    marginTop: -100, // aspectRatio:1
  },
  center: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  squarred: {
    borderRadius: 0,
    marginTop: 20,
    // padding: windowWidth < 450 ? 12 : 23,
    // marginHorizontal:30
    // width:windowHeight*0.4,
  },
  modal:{
    height:40,
    width:60,
  }
});
