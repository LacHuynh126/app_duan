import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,FlatList,Pressable,Image,Button,TouchableOpacity } from 'react-native';
import React, {useState,useEffect} from 'react';

import { Ionicons } from '@expo/vector-icons';

const  Newsitem = (props) => {
  const {navigation,route: {params:{id_news}}} = props;
  const [products,setProduct] = useState([]);
  const [comments,setComment] = useState([]);
  const [idnav,setID] = useState('');
  const [starts,setStart] = useState(0);
  useEffect(()=>{
    (async () => {
        const rawResponse = await fetch('http://192.168.1.9:3000/api/item_news/' + id_news, {
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
  useEffect(()=>{
    (async () => {
        const rawResponse = await fetch('http://192.168.1.9:3000/api/item_news/' + id_news + "/comment", {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        });
        const content1 = await rawResponse.json();
        console.log(content1.content._id);
        setComment(content1);
      })();
  },[starts])
    const renderItemComment = ({ item }) => (
      <View style={styles.contain} >
        <TouchableOpacity onPress={() => {}}>
            <Image style={styles.image} source={{uri: item.images}}/>
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
  
  const renderItem = ({ item }) => (
    <Pressable style={styles.item} >
      <Text style={styles.textinput}> {item.date}</Text>
      <Image source={{uri:item.images}} style={{width: 318, height: 200, marginLeft:35,marginTop:20}} />
      <Text style={styles.textinput1}> {item.title}</Text>
      <Text style={styles.textinput}> {item.content}</Text>
      <Text style={styles.textinput2}> {item.author}</Text>
      <FlatList
        data={comments.content}
        renderItem={renderItemComment}
        keyExtractor={item => item._id}
      />
    </Pressable>
  );
  return (
    <View style={styles.container}>
    <FlatList
      data={products.content}
      renderItem={renderItem}
      keyExtractor={item => item._id}
    />
    {/* <Button title='Thanh Toán' onPress={() => {navigation.navigate('Userscreen')}}></Button> */}
</View>
  );
}
export default Newsitem;

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