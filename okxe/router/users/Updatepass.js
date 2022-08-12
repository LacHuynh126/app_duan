import { StatusBar } from "expo-status-bar";
import { StyleSheet,Text,View,ImageBackground,Button,TouchableOpacity,Alert, TextInput,Pressable,Image  } from "react-native";
import {Asset} from 'expo-asset';
import AppLoading from 'expo-app-loading';
import { firebaseConfig } from "../google/firebase";
import firebase from "firebase/compat/app";
import { FirebaseRecaptchaVerifierModal, FirebaseRecaptchaBanner } from 'expo-firebase-recaptcha';
import React,{useEffect,useState,useRef} from "react";



export default function Updatepass(props) {
  const {navigation} = props;
  const [email,setEmail] = useState('');
  const [phone,setPhone] = useState('');
  const [password,setPassword] = useState('');
  const [configPass,setconfigPassword] = useState('');
  const [username,setUserName] = useState('');
  const [configms,setConfigms] = useState(null);
  const reCap = useRef(null);
  const sendOTP = async () => {
    (async () => {
        const rawResponse = await fetch('http://192.168.1.9:3000/api/remember/', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({email,phone,password,configPass,username})
        });
        
        // const status = await rawResponse.json();
        const check = await rawResponse.text();
        const datacheck = JSON.parse(check);
        console.log(datacheck);
        if(datacheck == "Updapte Thành Công"){
            navigation.navigate("Homepage");
        }
        alert(datacheck);
        // if(datacheck == "Tạo Tài Khoản Thành Công"){
        //   navigation.navigate("Homepage");
        // }
      })();
    }
  
  // useEffect( ()=>{
  //   firebase.initializeApp(firebaseConfig);
  // })
    return (
      
        <ImageBackground style={styles.container}>   
            <Image
              style={styles.imgae}
              source={require("../../public/3shop.png")}
            />  
            <TextInput
                style={styles.inputvalue}
                placeholder="Email"
                onChangeText={email => setEmail(email)}
            />
            <TextInput
                style={styles.inputvalue}
                placeholder="User Name"
                onChangeText={username => setUserName(username)}
            />
             <TextInput
                style={styles.inputvalue}
                placeholder="Phone"
                onChangeText={phone => setPhone(phone)}
            />
            <TextInput
                style={styles.inputvalue}
                placeholder="Pass Word" 
                onChangeText={password => setPassword(password)}
            />
            <TextInput
                style={styles.inputvalue}
                placeholder="Config Pass" 
                onChangeText={configPass => setconfigPassword(configPass)}
            />
            <TouchableOpacity style={styles.buttonvalue} onPress={sendOTP} >
              <Text style={styles.textvalue}>Change Pass</Text>
            </TouchableOpacity>
        </ImageBackground>
      );
        ///https://ibb.co/g6TcF2V
            // <ImageBackground
            //     style={styles.container}
            //     source={require("../../public/3shop.png")}>
            //     <FirebaseRecaptchaVerifierModal
            //       ref={reCap}
            //       firebaseConfig={firebaseConfig}
            //     />
            //     <View style={{backgroundColor:'#DBDBDB', width:300,marginBottom:5}}>
            //       <TextInput
               
            //         autoCompleteType='tel'
            //       />
            //     </View>
            //     <View style={{backgroundColor:'#DBDBDB', width:300}}>
            //       <TextInput

            //       />
            //     </View>
            //     <Button title="sendOTP" onPress={sendOTP}></Button>
            //     <Pressable 
            //        onPress={()=>{navigation.navigate('Signin')}}
            //         style={styles.button_inputs}>
            //         <Text style={{fontSize:16}}>Sign in</Text>
            //     </Pressable>
            //     <Button title="Remember" onPress={getOTP}></Button>
            // </ImageBackground>
       
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