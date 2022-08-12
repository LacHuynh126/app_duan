import { StatusBar } from "expo-status-bar";
import { StyleSheet,Text,View,ImageBackground,Button,TouchableOpacity, Pressable } from "react-native";
import {Asset} from 'expo-asset';
import AppLoading from 'expo-app-loading';
import React from "react";

export default function Homeuser(props) {
  const {navigation} = props;
    return (
        ///https://ibb.co/g6TcF2V
            <ImageBackground
                style={styles.container}
                source={require("../../public/3shop.png")}>
                <Pressable 
                    onPress={()=>{navigation.navigate('Login')}}
                    style={styles.button_inputs}>
                    <Text style={{fontSize:16}}>Login</Text>
                </Pressable>
                <Pressable 
                   onPress={()=>{navigation.navigate('Signin')}}
                    style={styles.button_inputs}>
                    <Text style={{fontSize:16}}>Sign in</Text>
                </Pressable>
                <Pressable 
                   onPress={()=>{navigation.navigate('Remember')}}
                    style={styles.button_inputs}>
                    <Text style={{fontSize:16}}>Remember</Text>
                </Pressable>
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
  button_inputs:{
    alignItems: 'center',
    justifyContent: 'center',
    width:160,
    height:40,
    backgroundColor:'#42f44b',
    borderRadius:8,
    marginTop:5
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