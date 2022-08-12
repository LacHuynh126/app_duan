import { StatusBar } from "expo-status-bar";
import { StyleSheet,Text,View,ImageBackground,Button,TouchableOpacity,TextInput,FlatList,Image } from "react-native";
import {Asset} from 'expo-asset';

import React,{useState,useEffect} from "react";

export default function Nguoibanchat(props) {
  const {navigation, route: { params: { id_userss,usernamess,emailss,phoness,addressss,imagesss,item_nguoibansss,id_Chatss,id_namepost}}} = props;
  const [comments, setComment] = useState([]);
  const [text, onChangeText]=useState('');
  const [starts, setStart] = useState(0);
  const [id_Chats,setId_Chats] = useState('');
  const [replayComment,setReplay] = useState([]);
  const today = new Date();
  const yyyy = today.getFullYear();
    const mm = today.getMonth() + 1;
    const dd = today.getDate();
    const hh = today.getHours();
    const minu = today.getMinutes();
    const formdate = dd + '/' + mm + '/' + yyyy;
    const formhouse = hh + ":"+ minu;
    useEffect(()=>{
        (async () => {
            const rawResponse = await fetch('http://192.168.1.9:3000/api/chat/chat/chat', {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({idChat:id_Chatss})
            });
            // const status = await rawResponse.json();
            const check = await rawResponse.json();
            setComment(check[0].content)
            
        })();
    },[starts])
   
  useEffect(()=>{
    (async () => {
        const rawResponse = await fetch('http://192.168.1.9:3000/api/chat/postcommetchat', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({id_get:id_Chatss})
        });
        // const status = await rawResponse.json();
        const check = await rawResponse.json();
        setReplay(check[0].content);
        console.log(check[0].content);
      })();
  },[starts]);
  const onPostComments = () => {
    (async () => {
      const rawResponse = await fetch('http://192.168.1.9:3000/api/chat/chat', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({idChat:id_Chatss,comment:text,dates:formdate,house:formhouse,like:0,names_post:usernamess,images_post:imagesss,names_get:id_namepost})
      });
      // const status = await rawResponse.json();
      const check = await rawResponse.json();
    })();
}
  const renderItemComment = ({ item }) => (
    <View style={styles.contain} >
      <TouchableOpacity onPress={() => { }}>
        <Image style={styles.image} source={{ uri: item.images_post }} />
      </TouchableOpacity>
      <View style={styles.content}>
        <View style={styles.contentHeader}>
          <Text rkType='primary3 mediumLine'>{item.content}</Text>
          <Text style={{fontSize:8}}>{item.house}</Text>
        </View>
        
      </View>
    </View>
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
                keyExtractor={item => item.id}
            />
            <View style={styles.contain} >
                {/* <TouchableOpacity onPress={()=>{}}>
                    <Image style={styles.image} source={{ uri: imagess }} />
                </TouchableOpacity> */}
                <View style={styles.content}>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeText}
                        value={text}
                    />
                </View>
                {/* <Image source={{uri:item.hinhXe}} style={{width: 318, height: 200, marginLeft:35,marginTop:20}} /> */}
            </View>
            {/* <Button title="Comment" onPress={onPostComments}></Button> */}
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
      marginBottom: 6,
      backgroundColor:'#DBDBDB',
      borderRadius:10,
      padding:5
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