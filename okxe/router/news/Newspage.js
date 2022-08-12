import React, {useState,useEffect} from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SectionList,FlatList,Pressable,TouchableOpacity,Image,Button } from 'react-native';
import GridFlatList from 'grid-flatlist-react-native';

import { Ionicons } from '@expo/vector-icons';

const Newspage = (props) => {
  const {navigation} = props;
  const [products,setProduct] = useState([]);
  const [id_news,setID_news] = useState('');
  const [starts,setStart] = useState(0);

  useEffect(()=>{
    (async () => {
          const rawResponse = await fetch('http://192.168.1.9:3000/api/admin/listnews/', {
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
      <TouchableOpacity style={styles.item}
        onPress={()=>{navigation.navigate('Newsitem',{id_news:item._id})}}>
        <Text style={styles.textinput}>{item.title}</Text>
      </TouchableOpacity>
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
export default Newspage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems:'flex-start',
  },
  item: {
    marginVertical:4,
    borderBottomWidth:1,
    borderBottomColor:'#DBDBDB'
  },
  textinput:{
    textAlign:'center',
    fontSize:16
  },
  hinhXe:{
    width:300,
    height:100
  },
  title: {
    fontSize: 16,
  },
});