import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View,Image, ScrollView,ImageBackground,TouchableOpacity,TextInput } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

export default function Signin(props) {
  const images = [
    'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/104842/bmw-vehicle-ride-bike-104842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/159192/vespa-roller-motor-scooter-cult-159192.jpeg?cs=srgb&dl=pexels-pixabay-159192.jpg&fm=jpg',
    'https://images.pexels.com/photos/1325735/pexels-photo-1325735.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/9054774/pexels-photo-9054774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/4063861/pexels-photo-4063861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  ]
  const {navigation} = props;

  const [email,setEmali] = useState('');
  const [id_user,setId_user] = useState('');
  const [username,setUserName] = useState('');
  const [password, setPassWord] = useState('');
  const [configpassword, setconfigPassWord] = useState('');
  const onRegister = () => {
    (async () => {
        const rawResponse = await fetch('http://192.168.1.9:3000/api/signup/', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({email,phone,username,configpassword})
        });
        
        // const status = await rawResponse.json();
        const check = await rawResponse.text();
        const datacheck = JSON.parse(check);
        alert(datacheck);
        if(datacheck == "Tạo Tài Khoản Thành Công"){
          navigation.navigate("Homepage");
        }
      })();
  }
  return (
    <ImageBackground style={styles.container}>   
        <Image
          style={styles.imgae}
          source={require("../../public/3shop.png")}
        />  
        <TextInput
            style={styles.inputvalue}
            onChangeText={email => setEmali(email)}
            placeholder='Email'
        />
        <TextInput
            style={styles.inputvalue}
            onChangeText={username => setUserName(username)}
            placeholder='User Name'
        />
        <TextInput
            style={styles.inputvalue1}
            onChangeText={password => setPassWord(password)}
            placeholder='Password'
        />
         <TextInput
            style={styles.inputvalue1}
            onChangeText={configpassword => setconfigPassWord(configpassword)}
            placeholder='Config Password'
        />
        <TouchableOpacity style={styles.buttonvalue} onPress={onRegister}>
          <Text style={styles.textvalue}>Register</Text>
        </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  imgae:{
    width:300,
    height:300,
    marginTop:-150
  },
  container: {
    flex:1,
    backgroundColor: '#7BD5F5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputvalue:{
    width:300,
    height:40,
    borderRadius:15,
    textAlign:'center',
    backgroundColor:'#DBDBDB',
    marginTop:0,
    marginBottom:5
  },
  inputvalue1:{
    width:300,
    height:40,
    borderRadius:15,
    textAlign:'center',
    backgroundColor:'#DBDBDB',
    marginBottom:5,
    marginTop:0
  },
  buttonvalue:{
    backgroundColor:'#1F2F98',
    width:200,
    height:40,
    borderRadius:15,
    justifyContent:'center',
    marginTop:7,
  },
  textvalue:{
    fontSize:16,
    textAlign:'center',
    color:'white'
  }
  ,input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
  inputext: {
    width: 200,
    height: 44,
    padding: 10,
    textAlign:'center',
    fontWeight:'bold',
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  }
});