import { StatusBar } from "expo-status-bar";
import { StyleSheet,Text,View,ImageBackground,Button,TouchableOpacity,TextInput,FlatList,Image } from "react-native";
import {Asset} from 'expo-asset';
import AppLoading from 'expo-app-loading';
import React,{useState,useEffect} from "react";

export default function Comment(props) {
  const {navigation, route: { params: { id_xes,id_users,usernames,emails,phones,addresss,imagess,item_nguoibanss}}} = props;
  const [comments, setComment] = useState([]);
  const [text, onChangeText]=useState('hello');
  const [starts, setStart] = useState(0);
  const datenow = new Date();
  const onPostComments = () => {
        (async () => {
          const rawResponse = await fetch('http://192.168.1.9:3000/api/moto/' + id_xes, {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({comment:text, dates:datenow, names:usernames,images:imagess,news:id_xes})
          });
          // const status = await rawResponse.json();
          const check = await rawResponse.json();
          navigation.navigate('Motopage',{id:id_xes,item_nguoiban:item_nguoibanss});
          console.log(check);
        })();
  }
  useEffect(() => {
    (async () => {
      const rawResponse = await fetch('http://192.168.1.9:3000/api/moto/' + id_xes + "/comment", {
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
    return (
        ///https://ibb.co/g6TcF2V
        <View>
            <FlatList
                data={comments.content}
                renderItem={renderItemComment}
                keyExtractor={item => item._id}
            />
            <View style={styles.contain} >
                <TouchableOpacity onPress={()=>{}}>
                    <Image style={styles.image} source={{ uri: imagess }} />
                </TouchableOpacity>
                <View style={styles.content}>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeText}
                        value={text}
                    />
                </View>
                {/* <Image source={{uri:item.hinhXe}} style={{width: 318, height: 200, marginLeft:35,marginTop:20}} /> */}
            </View>
            <Button title="Comment" onPress={onPostComments}></Button>
        </View>
    );
}

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