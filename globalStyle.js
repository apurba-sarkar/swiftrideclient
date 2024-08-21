import { StyleSheet } from "react-native";
const globalStyles = StyleSheet.create({
    container: {
      flex: 1,
      // display:"flex",
      backgroundColor: '#fff', // Set background to white
      justifyContent: 'center',
      gap:10,
      paddingLeft:20,
      paddingRight:20,
      // alignItems: 'center',
    }, 
  });
  const Colors = { 
    primary: "#c3cc1f",
    secondary:"#1C1E35",
    white:"#ffff"
  }

  export default globalStyles;
  export {Colors}