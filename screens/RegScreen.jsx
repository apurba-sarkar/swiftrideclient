import { StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";
import globalStyles, { Colors } from "../globalStyle";
import {
  TextInput,
  Button,
  PaperProvider,
  Modal,
  Portal,
  ActivityIndicator,
} from "react-native-paper";
import axios from "axios";
import hero from "../assets/images/hero.png";

const RegScreen = ({ navigation }) => {
  const [visible, setVisible] = useState(false);
  const [formData, setFormData] = useState({
    fullname: "",
    age: "",
    pincode: "",
    mobile: "",
    email: "",
    password: "",
  });

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const postSubmit = async () => {
    try {
      // Use the full URL with protocol
      const response = await axios.post("http://localhost:5000/reg", formData);
      console.log('Data submitted successfully:', response.data);
      // Optionally hide the modal after successful submission
      hideModal();
    } catch (error) {
      console.error('There was an error submitting the data:', error);
    }
  };

  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    console.log(formData);
    postSubmit(); // Call the postSubmit function to handle form submission
  };

  return (
    <PaperProvider>
      <View style={globalStyles.container}>
        <View style={styles.center}>
          <Image source={hero} style={styles.image} />
        </View>
        <TextInput
          label="Full Name"
          onChangeText={(text) => handleChange("fullname", text)}
          value={formData.fullname}
        />
        <TextInput
          label="Age"
          onChangeText={(text) => handleChange("age", text)}
          value={formData.age}
        />
        <TextInput
          label="Pincode"
          onChangeText={(text) => handleChange("pincode", text)}
          value={formData.pincode}
        />
        <TextInput
          label="Mobile"
          onChangeText={(text) => handleChange("mobile", text)}
          value={formData.mobile}
        />
        <TextInput
          label="Email"
          onChangeText={(text) => handleChange("email", text)}
          value={formData.email}
        />
        <TextInput
          label="Password"
          secureTextEntry
          onChangeText={(text) => handleChange("password", text)}
          value={formData.password}
        />
        <Button
          mode="contained"
          style={styles.squarred}
          onPress={submitForm} // Use submitForm for button press
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
              outline: Colors.primary,
            },
          }}
        >
          Login
        </Button>
        <Portal>
          <Modal
            visible={visible}
            onDismiss={hideModal}
          >
            <ActivityIndicator
              animating={true}
              size="large"
              color={Colors.primary}
            />
          </Modal>
        </Portal>
      </View>
    </PaperProvider>
  );
};

export default RegScreen;

const styles = StyleSheet.create({
  image: {
    height: 80,
    width: 300,
    marginTop: -100,
  },
  center: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  squarred: {
    borderRadius: 0,
    marginTop: 20,
  },
  modal: {
    height: 40,
    width: 60,
  },
});
