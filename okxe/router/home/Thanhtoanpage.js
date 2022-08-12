import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Pressable,Image,Button, TextInput, ScrollView } from 'react-native';
import React,{useState} from 'react';
import { Ionicons } from '@expo/vector-icons';

export default function Thanhtoanpage(props) {
  const {navigation,route: {params:{id_moto,id_users,usernames,tenXess,giaXess,hinhXess}}} = props;
  const dates = new Date(); 
  const [id_hoadon,setHoadon] = useState('');
  // const[giaXe,setgiaXE] = useState('');
 
  const onLogin = () => {
    (async () => {
        const rawResponse = await fetch('http://192.168.1.9:3000/api/hoadon/' + id_users , {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ngayMuahang:dates,ngayLaphoadon:dates,tenXe:tenXess,hinhXe:hinhXess,suDung:usernames,giaXe:giaXess,trangThai:"Chưa Thanh Toán",idXe:id_moto})
        });
        const check = await rawResponse.text();
        const datacheck = JSON.parse(check);
        console.log(datacheck);
        setHoadon(datacheck._id);
        navigation.navigate('Muahang',{id_userss:id_users,id_motos:id_moto,id_hoadons : datacheck._id,usernamess:usernames});
      })();
  }
  return (
    <ScrollView>
      <Pressable style={styles.item} >
        <Text style={styles.textinput1}>{tenXess}</Text>
        <Image source={{uri:hinhXess}} style={{width: 318, height: 300, marginLeft:35,marginTop:20}} />
        <Text style={styles.textinput}>{giaXess}</Text>
        <Button title='Chọn Mua' onPress={onLogin}></Button>
      </Pressable>
    </ScrollView>
  )
}

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