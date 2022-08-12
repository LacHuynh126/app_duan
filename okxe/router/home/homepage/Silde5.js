import { StatusBar } from "expo-status-bar";
import { StyleSheet,Text,View,ImageBackground,Button,TouchableOpacity } from "react-native";
import {Asset} from 'expo-asset';
import AppLoading from 'expo-app-loading';
import React from "react";
import { WebView } from 'react-native-webview';
export default function Silde4(props) {
  const {navigation} = props;
  return (
    <WebView 
      style={styles.container}
      source={{ uri: 'https://play.google.com/store/apps/details?id=com.okxe.app' }}
    />
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