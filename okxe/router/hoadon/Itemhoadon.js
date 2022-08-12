import { StatusBar } from "expo-status-bar";
import { StyleSheet,Text,View,ImageBackground,Button,TouchableOpacity,Dimensions,Pressable,Image, ScrollView } from "react-native";
import {Asset} from 'expo-asset';
import AppLoading from 'expo-app-loading';
import MapView,{Marker, Polyline } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import React, { Component, useRef, useState,useEffect } from "react";
import {Map,GoogleApiWrapper} from "google-maps-react";
import * as Location from 'expo-location';
import { NativeModules } from "react-native";
export default function Itemhoadon(props) {
  const {navigation,route: {params:{trang_Thai,id_motos,id_hoadons,id_hinhxe,id_giaXe,id_nguoiMua,id_tenXe}}} = props;
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [laTille1,setlaTittle1] = useState(null);
  const [laTille2,setlaTittle2] = useState(null);
  const [hoadonnhan,setHoadonnhan] = useState([]);
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);
  const huyDon = () => {
    (async () => {
        const rawResponse = await fetch('http://192.168.1.9:3000/api/admin/huyhoadon', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({id_moto:id_motos,nguoiMua:"",id_hoadon:id_hoadons})
        });
        // const status = await rawResponse.json();
        const check = await rawResponse.text();
      
        NativeModules.DevSettings.reload();
      })();
  }
  useEffect(()=>{
    (async () => {
          const rawResponse = await fetch('http://192.168.1.9:3000/api/chat/hoadonnhan/nhan',{
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({id_hoadon:id_hoadons})
          });
          const content = await rawResponse.json();
          setHoadonnhan(content);
          
        })();
  },[2]);
  console.log(hoadonnhan.length);
  const daNhan = () => {
    (async () => {
        const rawResponse = await fetch('http://192.168.1.9:3000/api/chat/hoadonnhan', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({id_hoadon:id_hoadons,trangThaisss:"Đã nhận"})
        });
        const check = await rawResponse.text();
        NativeModules.DevSettings.reload();
      })();
  }

  const thanhToan = () => {
    (async () => {
        const rawResponse = await fetch('http://192.168.1.9:3000/api/admin/thanhtoanhoadon', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({id_moto:id_motos,nguoiMua:id_nguoiMua,id_hoadon:id_hoadons,trangThai:"Đã Thanh Toán"})
        });
        // const status = await rawResponse.json();
        const check = await rawResponse.text();
        NativeModules.DevSettings.reload();
        // navigation.navigate("Gethoadon");
      })();
  }
 
  let text = 'Waiting..';

  if (errorMsg) {
    text = errorMsg;
    console.log(errorMsg);
  } else if (location) {
    
    text = JSON.stringify(location);
    // console.log(location);
    // console.log(location.coords.latitude);
    // console.log(location.coords.longitude);
    // setlaTittle1(location.coords.latitude)
    // setlaTittle2(location.coords.longitude)
  }
  // console.log(hoadonnhan[0]);
    if(trang_Thai=="Đã Thanh Toán"){
      if(hoadonnhan==""){
        return (
          <View style={{flex:1}}>
            <View style={{height:30,marginBottom:10}}>
              <ScrollView horizontal>
                  <View style={styles.scroll_view_1}>
                    <Text>1</Text>
                  </View>
                  <View style={styles.scroll_view_2}>
                    <Text>Hệ thống đang xác nhận đơn hàng</Text>
                  </View>
              </ScrollView>
            </View>
            <View style={{height:30,marginBottom:10}}>
              <ScrollView horizontal>
                  <View style={styles.scroll_view_1}>
                    <Text>2</Text>
                  </View>
                  <View style={styles.scroll_view_2}>
                    <Text>Đã nhận đơn hàng</Text>
                  </View>
              </ScrollView>
            </View>
            <View style={{height:30,marginBottom:10}}>
              <ScrollView horizontal>
                  <View style={styles.scroll_view_1}>
                    <Text>3</Text>
                  </View>
                  <View style={styles.scroll_view_2}>
                    <Text>{trang_Thai}</Text>
                  </View>
              </ScrollView>
            </View>
            <View style={{height:30,marginBottom:10}}>
              <ScrollView horizontal>
                  <View style={styles.scroll_view_1}>
                    <Text>4</Text>
                  </View>
                  <View style={styles.scroll_view_2}>
                    <Text>Đang Vận Chuyển</Text>
                  </View>
              </ScrollView>
            </View>
            <MapView style={styles.map} 
              initialRegion={{
                latitude: 10.853936998207702,
                longitude: 106.62784985509252,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
            >
              <Marker
                coordinate={{ latitude: 10.853936998207702,longitude: 106.62784985509252}}/>
              <Marker
                coordinate={{ latitude: 10.853936998207702,longitude: 106.62784985509252}}/>
                <Polyline
        coordinates={[
          { latitude: 10.853936998207702,longitude: 106.62784985509252},
          { latitude: 10.853936998207702,longitude:  106.62784985509252}
      
        ]}
        strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
        strokeColors={[
          '#7F0000',
          '#00000000', // no color, creates a "long" gradient between the previous and next coordinate
          '#B24112',
          '#E5845C',
          '#238C23',
          '#7F0000'
        ]}
        strokeWidth={3}
      />    
            </MapView>
            <View style={{height:120,marginBottom:10,marginTop:10}}>
              <ScrollView horizontal>
                  <Pressable style={{width:170,marginRight:10}}>
                    <Button title="Huỷ đơn" onPress={huyDon}></Button>
                  </Pressable>
                  <Pressable style={{width:170}}>
                    <Button title="Đã Nhận" onPress={daNhan}></Button>
                  </Pressable>
              </ScrollView>
            </View>
            {/* <Button title="HỦY ĐƠN" onPress={huyDon}></Button> */}
          </View>
        );
      } else {
        return(
        <View style={{flex:1}}>
        <View style={{height:30,marginBottom:10}}>
          <ScrollView horizontal>
              <View style={styles.scroll_view_1}>
                <Text>1</Text>
              </View>
              <View style={styles.scroll_view_2}>
                <Text>Hệ thống đang xác nhận đơn hàng</Text>
              </View>
          </ScrollView>
        </View>
        <View style={{height:30,marginBottom:10}}>
          <ScrollView horizontal>
              <View style={styles.scroll_view_1}>
                <Text>2</Text>
              </View>
              <View style={styles.scroll_view_2}>
                <Text>Đã nhận đơn hàng</Text>
              </View>
          </ScrollView>
        </View>
        <View style={{height:30,marginBottom:10}}>
          <ScrollView horizontal>
              <View style={styles.scroll_view_1}>
                <Text>3</Text>
              </View>
              <View style={styles.scroll_view_2}>
                <Text>{trang_Thai}</Text>
              </View>
          </ScrollView>
        </View>
        <View style={{height:30,marginBottom:10}}>
          <ScrollView horizontal>
              <View style={styles.scroll_view_1}>
                <Text>4</Text>
              </View>
              <View style={styles.scroll_view_2}>
                <Text>Đang Vận Chuyển</Text>
              </View>
          </ScrollView>
        </View>
        <MapView style={styles.map} 
          initialRegion={{
            latitude: 10.853936998207702,
            longitude: 106.62784985509252,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            coordinate={{ latitude: 10.853936998207702,longitude: 106.62784985509252}}/>
          <Marker
            coordinate={{ latitude: 10.853936998207702,longitude: 106.62784985509252}}/>
            <Polyline
		coordinates={[
      { latitude: 10.853936998207702,longitude: 106.62784985509252},
			{ latitude: 10.853936998207702,longitude:  106.62784985509252}
	
		]}
		strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
		strokeColors={[
			'#7F0000',
			'#00000000', // no color, creates a "long" gradient between the previous and next coordinate
			'#B24112',
			'#E5845C',
			'#238C23',
			'#7F0000'
		]}
		strokeWidth={3}
	/>    
        </MapView>
        <View style={{height:30,marginBottom:10,marginTop:10}}>
          <ScrollView horizontal>
              <View style={styles.scroll_view_1}>
                <Text>5</Text>
              </View>
              <View style={styles.scroll_view_2}>
                <Text>Đã nhận hàng</Text>
              </View>
          </ScrollView>
        </View>
        {/* <Button title="HỦY ĐƠN" onPress={huyDon}></Button> */}
      </View>
        )
      }
  } else{
    return(
      <View style={{flex:1}}>
        <View style={{height:30,marginBottom:10}}>
          <ScrollView horizontal>
              <View style={styles.scroll_view_1}>
                <Text>1</Text>
              </View>
              <View style={styles.scroll_view_2}>
                <Text>Hệ thống đang xác nhận đơn hàng</Text>
              </View>
          </ScrollView>
        </View>
        <View style={{height:30,marginBottom:10}}>
          <ScrollView horizontal>
              <View style={styles.scroll_view_1}>
                <Text>2</Text>
              </View>
              <View style={styles.scroll_view_2}>
                <Text>Đã nhận đơn hàng</Text>
              </View>
          </ScrollView>
        </View>
        <View style={{height:30,marginBottom:10}}>
          <ScrollView horizontal>
              <View style={styles.scroll_view_1}>
                <Text>3</Text>
              </View>
              <View style={styles.scroll_view_2}>
                <Text>{trang_Thai}</Text>
              </View>
          </ScrollView>
        </View>
      <View style={{justifyContent:"center",alignItems:"center"}}>
        <Text>{id_tenXe}</Text>
      </View>
      <Image
        source={{uri:id_hinhxe}} 
        style={{width: 318, height: 200, marginLeft:20,marginTop:20}}
      ></Image>
       <View style={{justifyContent:"center",alignItems:"center"}}>
        <Text>{id_giaXe}</Text>
      </View>
        <View style={{height:120,marginBottom:10,marginTop:10}}>
              <ScrollView horizontal>
                  <Pressable style={{width:170,marginRight:10}}>
                    <Button title="Huỷ đơn" onPress={huyDon}></Button>
                  </Pressable>
                  <Pressable style={{width:170}}>
                    <Button title="Thanh Toán" onPress={thanhToan}></Button>
                  </Pressable>
              </ScrollView>
            </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text_so:{
    backgroundColor:'#DBDBDB'
  },
  text_view:{
    width:400,
    height:30
  },
  scroll_view_1:{
    height:30,
    width:30,
    backgroundColor:'#DBDBDB',
    borderRadius:15,
    alignItems: 'center',
    marginRight:5
  },
  scroll_view_2:{
    height:30,
    width:370
  },
  map: {
    width: 350,
    height: 250,
  },
  textinput:{
    textAlign:'center',
    fontSize:16
  },
  item: {
    marginVertical:4,
    borderBottomWidth:1,
    borderBottomColor:'#DBDBDB'
  },
  item1: {
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
});