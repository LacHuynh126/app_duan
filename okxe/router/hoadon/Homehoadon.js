import { StatusBar } from "expo-status-bar";
import { StyleSheet,Text,View,ImageBackground,Button,TouchableOpacity } from "react-native";
import {Asset} from 'expo-asset';
import AppLoading from 'expo-app-loading';
import React from "react";

export default function Homehoadon(props) {
  const {navigation} = props;
    return (
        ///https://ibb.co/g6TcF2V
            <ImageBackground
                style={styles.container}
                source={require("../../public/3shop.png")}>
              <Button title="Login" onPress={()=>{navigation.navigate('Loginhoadon')}}></Button>
            </ImageBackground>
       
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textinput:{
    textAlign:'center',
    fontSize:16
  },
  item: {
    marginVertical:4,
    borderBottomWidth:1,
    borderBottomColor:'#DBDBDB'
  }
});