import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,FlatList,Pressable,Image,Button,TouchableOpacity,Linking } from 'react-native';
import React, {useState,useEffect} from 'react';

import { Ionicons } from '@expo/vector-icons';

const  Userprofile = (props) => {
  const callphone = () => {
    const url = "+84379085887"
    Linking.openURL(url);
  }
  const {navigation,route: {params:{id_users,usernames,emails,phones,addresss,admintors,imagess}}} = props;
  console.log(usernames + emails + addresss + phones + imagess);
  if(addresss==null ){
    return (
      <Pressable style={styles.item} >
        <Image source={{uri:imagess}} style={{width: 318, height: 300, marginLeft:35,marginTop:20}} />
        <Text style={styles.textinput1}> {emails}</Text>
        <Text style={styles.textinput}> {usernames}</Text>
        <Text style={styles.textinput}> {phones}</Text>
        <Text style={styles.textinput}> {admintors}</Text>
        <Text style={styles.textinput}> {addresss}</Text>
        <Button title='Logout'></Button>
    </Pressable>
      
    )
  } else {
    return(
      <View style={styles.item} >
        <Text>Hello </Text>
        <Button onPress={callphone} title='Liên hệ trung tâm 3shop gần nhất để mở hồ sơ' ></Button>
      </View>
    )
  }
}
export default Userprofile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent:'center',
    backgroundColor:'#84D6F3'
  },
  item: {
    backgroundColor: '#DBDBDB',
    marginVertical:8,
    borderRadius:25
  },
  textinput:{
    textAlign:'center',
    fontSize:16
  },
  textinput1:{
    textAlign:'center',
    fontSize:24
  },
  textinput2:{
    textAlign:'right',
    fontSize:16
  },
  fontxanh:{
    backgroundColor:'#CCF0CC'
  },
  hinhXe:{
    width:300,
    height:100
  },
  title: {
    fontSize: 16,
  },
  contain: {
    paddingLeft: 19,
    paddingRight: 16,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  image:{
    width:45,
    height:45,
    borderRadius:20,
    marginLeft:20
  },
  content: {
    marginLeft: 16,
    flex: 1,
  },
  contentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6
  },
  time:{
    fontSize:11,
    color:"#808080",
  },
  name:{
    fontSize:16,
    fontWeight:"bold",
  },
});