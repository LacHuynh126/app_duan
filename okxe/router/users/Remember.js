import { StatusBar } from "expo-status-bar";
import { StyleSheet,Text,View,ImageBackground,Button,TouchableOpacity,Alert, TextInput,Pressable,Image  } from "react-native";
import {Asset} from 'expo-asset';
import AppLoading from 'expo-app-loading';
import { firebaseConfig } from "../google/firebase";
import firebase from "firebase/compat/app";
import { FirebaseRecaptchaVerifierModal, FirebaseRecaptchaBanner } from 'expo-firebase-recaptcha';
import React,{useEffect,useState,useRef} from "react";



export default function Remember(props) {
  const {navigation} = props;
  const [numberPhone,setnumberPhone] = useState('');
  const [codePhone,setcodePhone] = useState('');
  const [configms,setConfigms] = useState(null);
  const reCap = useRef(null);
  const sendOTP = async () => {
    
    var regx = '^[\+84]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$'
    if(numberPhone == ""){
      alert('Not null')
    } else {
      if(numberPhone.match(regx)){
        const phoneProvice = new firebase.auth.PhoneAuthProvider();
        phoneProvice.verifyPhoneNumber(numberPhone,reCap.current).then(setConfigms);
        setnumberPhone('');
      } else {
        alert('chua du so')
      }
      // const phoneProvice = new firebase.auth.PhoneAuthProvider();
      // phoneProvice.verifyPhoneNumber(numberPhone,reCap.current).then(setConfigms);
      // setnumberPhone('');
    }
  }
  const getOTP = async () => {
    const cre = firebase.auth.PhoneAuthProvider.credential(
      configms,codePhone
    );
    navigation.navigate('Updatepass');
    if(configms!=null){
      navigation.navigate('Updatepass');
    }
  }
  useEffect( ()=>{
    firebase.initializeApp(firebaseConfig);
  })
    return (
        <ImageBackground style={styles.container}>   
            <Image
              style={styles.imgae}
              source={require("../../public/3shop.png")}
            />
            <FirebaseRecaptchaVerifierModal
                  ref={reCap}
                  firebaseConfig={firebaseConfig}
            />  
            <TextInput
                style={styles.inputvalue}
                placeholder="Phone Number"
                onChangeText={setnumberPhone}
            />
            <TextInput
                style={styles.inputvalue}
                placeholder="Very OTP"
                autoCompleteType='tel'
                keyboardType="phone-pad"
            />
            <TouchableOpacity style={styles.buttonvalue}  onPress={sendOTP}>
              <Text style={styles.textvalue}>Send OTP</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonvalue}  onPress={getOTP}>
              <Text style={styles.textvalue}>Remember</Text>
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