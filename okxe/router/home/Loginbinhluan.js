import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput,Button,ImageBackground,Image,TouchableOpacity } from 'react-native';

const Loginbinhluan = (props) => {
  const {navigation,route: {params:{id_xe,item_nguoibans}}} = props;
  const [email,setEmali] = useState('');
  const [id_user,setId_user] = useState('');
  const [password, setPassWord] = useState('');
  const onLogin = () => {
    (async () => {
        const rawResponse = await fetch('http://192.168.1.9:3000/api/login', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({email,password})
        });
       
        // const status = await rawResponse.json();
        const check = await rawResponse.json();
        console.log(check);
        if(check.status == true){
          onLogin1();
        } else {
          alert("Dang nhap that bai")
        }
      })();
  }
  const onLogin1 = () => {
    (async () => {
        const rawResponse = await fetch('http://192.168.1.9:3000/api/login/comment', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({email,password})
        });
        // const status = await rawResponse.json();
        const check = await rawResponse.text();
        const datacheck = JSON.parse(check);
        navigation.navigate('Comment',{
          id_users:datacheck.status._id,
          usernames:datacheck.status.username,
          emails:datacheck.status.email,
          phones:datacheck.status.phone,
          addresss:datacheck.status.address,
          admintors:datacheck.status.admintor,
          imagess:datacheck.status.images,
          id_xes:id_xe,
          item_nguoibanss:item_nguoibans
        });
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
            style={styles.inputvalue1}
            onChangeText={password => setPassWord(password)}
            placeholder='Password'
        />
        <TouchableOpacity style={styles.buttonvalue} onPress={onLogin}>
          <Text style={styles.textvalue}>Login</Text>
        </TouchableOpacity>
    </ImageBackground>
  );
}
export default Loginbinhluan;

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
