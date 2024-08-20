import { Button,Image, StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import React , {useEffect} from 'react'
import hero from "../assets/images/hero.png";
import globalStyles from "../globalStyle";

const LoadingScreen = ({navigation}) => {
  
  useEffect(()=>{
    setTimeout(() => {
      navigation.replace('WelcomeScreen');
    }, 3000);
  })
  return (
    <View style={globalStyles.container}>
      {/* <Text>LoadingScreen</Text> */}
      <Image source={hero} />
      {/* <Button title="Go" onPress={()=>navigation.navigate("WelcomeScreen")} /> */}
    </View>
  )
}

export default LoadingScreen

const styles = StyleSheet.create({})