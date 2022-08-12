import { StatusBar } from "expo-status-bar";
import { StyleSheet,Text,View,ImageBackground,Button,TouchableOpacity,TextInput,FlatList,Image } from "react-native";
import {Asset} from 'expo-asset';

import React,{useState,useEffect} from "react";

export default function Listchat(props) {
  const {navigation, route: { params: { id_xes,id_users,usernames,emails,phones,addresss,imagess,item_nguoibanss}}} = props;
  const [comments, setComment] = useState([]);
  const [text, onChangeText]=useState('');
  const [starts, setStart] = useState(0);
  const [id_Chats,setId_Chats] = useState('');
  const [numbers,setNumbers] = useState(0);
  const today = new Date();
  const yyyy = today.getFullYear();
    const mm = today.getMonth() + 1;
    const dd = today.getDate();
    const hh = today.getHours();
    const minu = today.getMinutes();
    const formdate = dd + '/' + mm + '/' + yyyy;
    const formhouse = hh + ":"+ minu;
    const size =0;
    useEffect(()=>{
        (async () => {
            const rawResponse = await fetch('http://192.168.1.9:3000/api/chat/listchat', {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({names_get:usernames})
            });
            // const status = await rawResponse.json();
            const check = await rawResponse.json();
            setComment(check);
        })();
    },[starts])
  const renderItemComment = ({ item }) => (
    <TouchableOpacity style={styles.contain} onPress={() => {
        navigation.navigate('Nguoibanchat',{
            id_userss:id_users,
            usernamess:usernames,
            emailss:emails,
            phoness:phones,
            addressss:addresss,
            imagesss:imagess,
            item_nguoibansss:item_nguoibanss,
            id_Chatss:item._id,
            id_namepost:item.content[0].names_post
        });
      }} >
      <TouchableOpacity>
        <Image style={styles.image} source={{ uri: item.content[0].images_post }} />
      </TouchableOpacity>
      <View style={styles.content}>
        <View style={styles.contentHeader}>
            <Text rkType='primary3 mediumLine'>{item.content[0].content}</Text>
        </View>
        <Text rkType='primary3 mediumLine'>{item.content[0].date}  {item.content[0].house}</Text>
      </View>
    </TouchableOpacity>
  );
    // if(id_Chats==''){
    //   return(
    //     <View style={styles.container}>
    //       <Text>loading</Text>
    //     </View>
    //   )
    // } else{
      return (
        <View>
            <FlatList
                data={comments}
                renderItem={renderItemComment}
                keyExtractor={item => item._id}
            />
        </View>
      );
    }
// }

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
    },
    input: {
        height: 40,
        borderWidth: 1,
        padding: 10,
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