import React, {useState,useEffect} from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button,Text, View,SectionList,FlatList,Pressable,TouchableOpacity,Image } from 'react-native';
import GridFlatList from 'grid-flatlist-react-native';

import { Ionicons } from '@expo/vector-icons';

const Gethoadon = (props) => {
  const {navigation,route: {params:{id_moto,id_users,usernames,tenXess,giaXess,hinhXess}}} = props;
  const [products,setProduct] = useState([]);
  const [idnav,setID] = useState('');
  const [starts,setStart] = useState(0);
  const [trangThai,setTrangthai] = useState('');
  useEffect(()=>{
    (async () => {
          const rawResponse = await fetch('http://192.168.1.9:3000/api/listhoadon/' +id_users, {
            method: 'GET',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }
          });
          const content = await rawResponse.json();
          setProduct(content);
        })();
    },[starts]);

    const renderItem = ({ item }) => (
    
      <Pressable style={styles.item} >
        <View style={styles.contain} >
        <TouchableOpacity onPress={() => {}}>
            <Image style={styles.image} source={{uri: item.hinhXe}}/>
        </TouchableOpacity>
        <View style={styles.content}>
          <View style={styles.contentHeader}>
            <Text style={styles.name}>
                {item.tenXe}
            </Text>
            <Text style={styles.time}>
              Số Lượng: {item.soLuong}
            </Text>
          </View>
          <Text style={styles.name}>
              Giá mua: {item.giaTien} VNĐ
            </Text>
            <Text style={styles.time}>
              Ngày mua hàng {item.ngayMuahang}
            </Text>
            <Text style={styles.name}>
              Người mua: {item.suDung}
            </Text>
            </View>
            
    {/* <Image source={{uri:item.hinhXe}} style={{width: 318, height: 200, marginLeft:35,marginTop:20}} /> */}
            </View>
            <TouchableOpacity 
                style={styles.trangThai}  
                onPress={()=>{navigation.navigate('Itemhoadon',{
                  trang_Thai:item.trangThai,
                  id_motos:item.id_Xe,
                  id_hoadons:item._id,
                  id_hinhxe:item.hinhXe,
                  id_nguoiMua:item.suDung,
                  id_giaXe:item.giaTien,
                  id_tenXe:item.tenXe
                })}}      
            >
                <Text style={{fontSize:16}}>{item.trangThai}</Text>
            </TouchableOpacity>
      </Pressable>
    );
  return (
    <View style={styles.container}>
        <FlatList
          data={products.content}
          renderItem={renderItem}
          keyExtractor={item => item._id}
        />
    </View>
  );
}
export default Gethoadon;

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
     
      },
      textinput:{
        textAlign:'center',
        fontSize:16
      },
      textinput1:{
        textAlign:'center',
        fontSize:32
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
        paddingVertical: 12,
        flexDirection: 'row',
        alignItems: 'flex-start'
      },
      image:{
        width:75,
        height:75,
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
      trangThai:{
        backgroundColor:'#AAC2E3',
        alignItems:'center',
        justifyContent:'center',
      }
});