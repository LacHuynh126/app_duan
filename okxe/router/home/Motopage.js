import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Pressable, Image, Button, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import React, { useState, useEffect } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons'; 
import Icon6 from './icon/Icon6';
import Icon2 from './icon/Icon2';
import { MaterialIcons } from '@expo/vector-icons';
import Sildepage from './homepage/Slidepage'; 
import Introductpage from './homepage/Introductpage';
const Motopage = (props) => {
  const { navigation, route: { params: { id,item_nguoiban } } } = props;
  const [hosonguoiBan,sethosonguoiBan] = useState([]);
  const [products, setProduct] = useState([]);
  const [comments, setComment] = useState([]);
  const [idnav, setID] = useState('');
  const [giaXe, setgiaXe] = useState('');
  const [starts, setStart] = useState(0);
  useEffect(() => {
    (async () => {
      const rawResponse = await fetch('http://192.168.1.9:3000/api/admin/nguoiBan', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({nguoiBan1:item_nguoiban})
      });
      // const status = await rawResponse.json();
      const check = await rawResponse.json();
      sethosonguoiBan(check);
    })();
  },[0]);
  useEffect(() => {
    (async () => {
      const rawResponse = await fetch('http://192.168.1.9:3000/api/moto/' + id, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });
      const content = await rawResponse.json();
      setProduct(content);
    })();
  }, [starts]);
  useEffect(() => {
    (async () => {
      const rawResponse = await fetch('http://192.168.1.9:3000/api/moto/' + id + "/comment", {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });
      const content1 = await rawResponse.json();
      setComment(content1);
    })();
  }, [starts]);
  const LoaiXeView = () => {
    return (
      <ScrollView
        pagingEnabled
        horizontal
        style={{
          borderTopColor: '#DBDBDB',
          borderTopWidth: 1,
          width: 400,
          height: 100,
          marginTop: 10
        }} >
        <View style={{
          borderRightColor: '#DBDBDB',
          borderRightWidth: 1,
          marginTop: 5,
          width: 100,
          height: 75
        }}>
          <View style={{ marginLeft: 10 }}>
            <Icon6 />
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ marginHorizontal: 15 }}>{products.content[0].tinhTrang}</Text>
          </View>
        </View>
        <View style={{
          borderRightColor: '#DBDBDB',
          borderRightWidth: 1,
          marginTop: 5,
          width: 100,
          height: 75
        }}>
          <View style={{ marginLeft: 10 }}>
            <Icon2 />
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            
            <Text style={{ marginHorizontal: 15 }}>{products.content[0].loaiXe}</Text>
          </View>
        </View>
        <View style={{
          borderRightColor: '#DBDBDB',
          borderRightWidth: 1,
          marginTop: 5,
          width: 100,
          height: 75
        }}>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Entypo name="calendar" size={85} color="black" />
            <Text style={{ marginHorizontal: 15 }}>{products.content[0].namSudung}</Text>
          </View>
        </View>
        <View style={{
          borderRightColor: '#DBDBDB',
          borderRightWidth: 1,
          marginTop: 5,
          width: 100,
          height: 75
        }}>
         
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <MaterialCommunityIcons name="speedometer-slow" size={96} color="black" />
            <Text style={{ marginHorizontal: 15 }}>{products.content[0].soKm}</Text>
          </View>
        </View>
      </ScrollView>
    )

  }
  const renderItem = ({ item }) => (
    <Pressable style={styles.item} >
      <ScrollView
        pagingEnabled
        horizontal
        style={{ width: 400, height: 250, backgroundColor: '#DBDBDB' }} >
        <ImageBackground source={{ uri: item.hinhSilder[0] }} style={{ width: 400, height: 250 }} />
        <ImageBackground source={{ uri: item.hinhSilder[1] }} style={{ width: 400, height: 250 }} />
        <ImageBackground source={{ uri: item.hinhSilder[2] }} style={{ width: 400, height: 250 }} />
        <ImageBackground source={{ uri: item.hinhSilder[3] }} style={{ width: 400, height: 250 }} />
        <ImageBackground source={{ uri: item.hinhSilder[4] }} style={{ width: 400, height: 250 }} />
        <ImageBackground source={{ uri: item.hinhSilder[5] }} style={{ width: 400, height: 250 }} />
        <ImageBackground source={{ uri: item.hinhSilder[6] }} style={{ width: 400, height: 250 }} />
      </ScrollView>
      <View>
        <Text>
          <Text style={{ fontSize: 24 }}>
            {item.tenXe}
          </Text>
          <Text style={{ color: 'gray', fontSize: 11 }}> {item.phanKhoi}</Text>
        </Text>
        <Text style={{ fontSize: 24 }}>
          {item.giaXe}
        </Text>
        <Text style={{ fontSize: 24 }}>
          Giá thị trường
        </Text>
        <Text style={{ fontSize: 11 }}>
          {item._id}   35 phút trước     <AntDesign name="heart" size={11} color="black" />0  <Feather name="eye" size={11} color="gray" />20
        </Text>
        <LoaiXeView />
        <View style={{height:5,marginTop:5,width:400,backgroundColor:'#DBDBDB'}}></View>
        <View style={{width:400,justifyContent:'center',alignItems:'center',marginTop:15}}>
          <Text style={{fontSize:24}}>Mô Tả Chi Tiết</Text>
        </View>
        <ScrollView horizontal>
          <View style={{width:200}}>
            <Text style={{fontSize:14}}>Năm sản xuất</Text>
            <Text style={{fontSize:14}}>Fuel / Transmission</Text>
            <Text style={{fontSize:14}}>Động cơ (phân khối)</Text>
            <Text style={{fontSize:14}}>Màu sắc</Text>
            <Text style={{fontSize:14}}>Nơi giao dịch</Text>
            <Text style={{fontSize:14}}>Loại Hình Bán</Text>
          </View>
          
          <View style={{width:200,justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontSize:14}}>{item.namSanxuat}</Text>
            <Text style={{fontSize:14}}>Gasolin / Auto</Text>
            <Text style={{fontSize:14}}>{item.phanKhoi}</Text>
            <Text style={{fontSize:14}}>{item.mauSac}</Text>
            <Text style={{fontSize:14}}>Thành phố Hồ Chí Minh</Text>
            <Text style={{fontSize:14}}>{item.loaiHinhban}</Text>
          </View>
        </ScrollView>
      </View>
      <View style={{width:400,justifyContent:'center',alignItems:'center',marginTop:5}}>
        <TouchableOpacity onPress={()=>(navigation.navigate('Loginbinhluan',{id_xe: products.content[0]._id,item_nguoibans:item_nguoiban}))}>
          <Text style={{fontSize:24}}>Bình Luận</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={comments.content}
        renderItem={renderItemComment}
        keyExtractor={item => item._id}
      />
    </Pressable>
  );
  const Getfooter = () => {
    return (
        <View>
        <TouchableOpacity onPress={()=>{navigation.navigate("Loginchat",{id_xe: products.content[0]._id,item_nguoibans:item_nguoiban})}} style={{width:400,justifyContent:'center',alignItems:'center',marginTop:5}}>
          <Text style={{fontSize:24}}>Liên Hệ Người Bán</Text>
        </TouchableOpacity>
        <ScrollView horizontal style={{width:400}}>
          <ImageBackground source={{ uri: hosonguoiBan.content.images }} style={{ width: 75, height: 75 }} />
          <View style={{width:135}}>
              <Text style={{fontSize:14}}>{hosonguoiBan.content.username}</Text>
              <Text style={{fontSize:14}}>{hosonguoiBan.content.email}</Text>
              <Text style={{fontSize:14}}>{hosonguoiBan.content.phone}</Text>
              <Text style={{fontSize:14}}>{hosonguoiBan.content.address}</Text>
          </View>
          <View style={{width:205}}>
            <Text>
              <Entypo name="facebook" size={24} color="black" />https://www.facebook.com/MetaVietnam/
            </Text>
            <Text>
            <AntDesign name="google" size={24} color="black" />https://www.google.com.vn/?hl=vi
            </Text>
          </View>
        </ScrollView>
        <Introductpage/>
        </View>
    )
  }
  const renderItemComment = ({ item }) => (
    <View style={styles.contain} >
      <TouchableOpacity onPress={() => { }}>
        <Image style={styles.image} source={{ uri: item.images }} />
      </TouchableOpacity>
      <View style={styles.content}>
        <View style={styles.contentHeader}>
          <Text style={styles.name}>
            {item.names}
          </Text>
          <Text style={styles.time}>
            {item.date}
          </Text>

        </View>
        <Text rkType='primary3 mediumLine'>{item.content}</Text>
      </View>
      {/* <Image source={{uri:item.hinhXe}} style={{width: 318, height: 200, marginLeft:35,marginTop:20}} /> */}
    </View>
  );
  if(hosonguoiBan==""){
    return (
      <View style={styles.container}>
        <FlatList
          data={products.content}
          renderItem={renderItem}
          keyExtractor={item => item._id}
        />
        <Text>Loading.............</Text>
        <Button title='Mua' onPress={
          () => {
            navigation.navigate('Loginmuahang', {
              id_xe: products.content[0]._id,
              tenXes: products.content[0].tenXe,
              giaXes: products.content[0].giaXe,
              hinhXes: products.content[0].hinhXe
            });
          }}>
        </Button>
       
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <FlatList
          data={products.content}
          renderItem={renderItem}
          keyExtractor={item => item._id}
          ListFooterComponent={
            <Getfooter />
          }
        />
        <Button title='Mua' onPress={
          () => {
            navigation.navigate('Loginmuahang', {
              id_xe: products.content[0]._id,
              tenXes: products.content[0].tenXe,
              giaXes: products.content[0].giaXe,
              hinhXes: products.content[0].hinhXe
            });
          }}>
        </Button>

      </View>
    );
  }
}
export default Motopage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  item: {
    marginVertical: 8,
  },
  textinput: {
    textAlign: 'center',
    fontSize: 16
  },
  fontxanh: {
    backgroundColor: '#CCF0CC'
  },
  hinhXe: {
    width: 300,
    height: 100
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
  image: {
    width: 45,
    height: 45,
    borderRadius: 20,
    marginLeft: 20
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
  time: {
    fontSize: 11,
    color: "#808080",
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
});