import React, { useState, useEffect } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SectionList, ScrollView, FlatList, Pressable, TouchableOpacity, Image, Button, TextInput, SafeAreaView,ImageBackground } from 'react-native';
import GridFlatList from 'grid-flatlist-react-native';
import Sildepage from '../home/homepage/Slidepage';
import Introductpage from '../home/homepage/Introductpage';
import Sildepageloai from '../home/homepage/Slidepageloai';
import { NativeModules } from "react-native";
import { Ionicons } from '@expo/vector-icons';
const Homepage = (props) => {
  const { navigation } = props;
  const [products, setProduct] = useState([]);
  const [idnav, setID] = useState('');
  const [starts, setStart] = useState(0);
  const [trademaske, setTrademaske] = useState('');
  const [historys, setHistorys] = useState('');
  const [honda, setHonda] = useState('');
  const [news, setNews] = useState('');
  const [piaggo, setPiaggo] = useState('');

  useEffect(() => {
    (async () => {
      const rawResponse = await fetch('http://192.168.1.9:3000/api/admin/listmoto/', {
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
      const rawResponse = await fetch('http://192.168.1.9:3000/api/admin/listnews/', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });
      const content = await rawResponse.json();
      setNews(content);
    })();
  }, [starts]);
  useEffect(() => {
    (async () => {
      const rawResponse = await fetch('http://192.168.1.9:3000/api/admin/listtrasmake', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });
      const content = await rawResponse.json();
      setTrademaske(content);
    })();
  }, [starts]);
  useEffect(() => {
    (async () => {
      const rawResponse = await fetch('http://192.168.1.9:3000/api/admin/historys', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });
      const content = await rawResponse.json();
      setHistorys(content);
    })();
  }, [starts]);
  useEffect(() => {
    (async () => {
      const rawResponse = await fetch('http://192.168.1.9:3000/api/admin/honda', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });
      const content = await rawResponse.json();
      setHonda(content);
    })();
  }, [starts]);
  // console.log(products.content[0]._id);
  const onAccess = () => {
    navigation.navigate('Motopage', { id: idnav })
  }
  const renderNews = ({ item }) => (
    <TouchableOpacity style={styles.item_news} >
      <Text style={{ fontSize: 16 }}>
        <View style={{ backgroundColor: '#07C9D0' }}>
          <Text>Tin Tức !</Text>
        </View>
        {item.title}
      </Text>
    </TouchableOpacity>
  );
  const renderHonda = ({ item }) => (
    <Pressable style={styles.item_history} >
      <Image source={{ uri: item.hinhXe }} style={{ width: 95, height: 85 }} />
      <Text>{item.hangXe}</Text>
      <Text>{item.giaXe}</Text>
    </Pressable>
  );
  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => { navigation.navigate('Motopage', { id: item._id,loaiXeitem:item.loaiXe,item_nguoiban:item.nguoiBan }) }}
      style={styles.item} >
      <Image source={{ uri: item.hinhXe }} style={{ width: 159, height: 100, marginTop: 5, marginLeft: 15 }} />
      <Text style={styles.textinput}>{item.tenXe}</Text>
      <Text style={styles.textinput}>{item.hangXe}</Text>
      <Text style={styles.textinput}>Số Km đã đi: {item.soKm} Km</Text>
      <Text style={styles.textinput}>{item.giaXe} VND</Text>
    </TouchableOpacity>
  );
  const renderItems = ({ item }) => (
    <Pressable style={styles.item1} >
      <Image source={{ uri: item.images }} style={{ width: 95, height: 85 }} />
    </Pressable>
  );
  const renderHistorys = ({ item }) => (
    <View style={styles.item_history} >
      <Image source={{ uri: item.hinhXe }} style={{ width: 100, height: 100 }} />
      <Text>{item.giaTien}</Text>
      <Text>{item.suDung}</Text>
    </View>
  );
  const onAccess1 = () => {
    navigation.navigate('Silde_1')
  }
  const onAccess2 = () => {
    navigation.navigate('Silde_2')
  }
  const onAccess3 = () => {
    NativeModules.DevSettings.reload();
  }
  const onAccess4 = () => {
    navigation.navigate('Silde_4')
  }
  const onAccess5 = () => {
    navigation.navigate('Silde_5')
  }
  const Sildepageone = () => {
    return (
      <View>
        <ScrollView
          pagingEnabled
          horizontal
          style={{ width: 400, height: 180, backgroundColor: '#DBDBDB' }} >
          <TouchableOpacity onPress={onAccess1}>
            <ImageBackground
              source={require("../../public/silde1.jpg")}
              style={{ width: 400, height: 180, resizeMode: 'cover', alignItems: 'center', }}>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity onPress={onAccess2}>
            <ImageBackground
              source={require("../../public/silde2.jpg")}
              style={{ width: 400, height: 180, resizeMode: 'cover', alignItems: 'center', }}>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity onPress={onAccess3}>
            <ImageBackground
              source={require("../../public/silde3.jpg")}
              style={{ width: 400, height: 180, resizeMode: 'cover', alignItems: 'center', }}>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity onPress={onAccess4}>
            <ImageBackground
              source={require("../../public/silde4.jpg")}
              style={{ width: 400, height: 180, resizeMode: 'cover', alignItems: 'center', }}>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity onPress={onAccess5}>
            <ImageBackground
              source={require("../../public/silde5.jpg")}
              style={{ width: 400, height: 180, resizeMode: 'cover', alignItems: 'center', }}>
            </ImageBackground>
          </TouchableOpacity>
        </ScrollView>
      </View>
    )
  }
  const GetHeader = () => {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1, backgroundColor: '#07C9D0', height: 30 }}>
          <TextInput
            placeholder='Nhập Từ Khóa Cần Tìm ?'
            style={{
              backgroundColor: '#DBDBDB',
              margin: 3,
              fontSize: 16,
              textAlign: 'center'
            }}>
          </TextInput>
        </View>
        <Sildepageone/>
        <Sildepageloai />
        <FlatList
          horizontal
          data={trademaske.content}
          renderItem={renderItems}
          keyExtractor={item => item._id}
        />
        <FlatList
          horizontal
          data={historys.contents}
          renderItem={renderHistorys}
          keyExtractor={item => item._id}
        />
        <Sildepage />
        <FlatList
          style={{ overflow: 'hidden', margin: 10 }}
          data={news.content}
          renderItem={renderNews}
          keyExtractor={item => item._id}
        />
        <View style={styles.container1}>
          <Text style={{ fontSize: 3 }}></Text>
        </View>
        <Text style={styles.textinput}>Hãng xe được yêu thích nhất</Text>
        <FlatList
          horizontal
          data={honda.content}
          renderItem={renderHonda}
          keyExtractor={item => item._id}
        />
        <View style={styles.container2}>
          <Text style={{ fontSize: 3 }}></Text>
        </View>
        <Text style={{ fontSize: 16 }}>Tất cả sản phẩm</Text>
      </View>
    )
  };
  const Getfooter = () => {
    return (
      <View style={styles.container}>
        <Introductpage />
      </View>
    )
  }
  return (
    <View style={styles.container}>

      <FlatList
        data={products.content}
        renderItem={renderItem}
        keyExtractor={item => item._id}
        numColumns={2}
        ListHeaderComponent={
          <GetHeader />
        }
        ListFooterComponent={
          <Getfooter />
        }
      />
    </View>
  );
}
export default Homepage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

    backgroundColor: '#F0F0F0'
  },
  container1: {
    flex: 1,
    marginTop: 5,
    backgroundColor: '#DBDBDB',
  },
  container2: {
    flex: 1,
    backgroundColor: '#DBDBDB',
    marginTop: 5
  },
  container3: {
    flex: 1,
    marginTop: 5,
    marginBottom: 8,
    backgroundColor: '#DBDBDB',
  },
  item: {
    width: 200,
    backgroundColor: '#DBDBDB',
    marginVertical: 8,
    marginHorizontal: 4
  },
  item1: {
    backgroundColor: '#DBDBDB',
    marginTop: 10,
    marginLeft: 5,
    marginBottom: 5
  },
  item_history: {
    backgroundColor: '#DBDBDB',
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginLeft: 5,
    marginTop: 10,
    padding: 20,
    borderRadius: 25,
    marginBottom: 10
  },
  item_news: {
    width: 400,
    margin: 5
  },
  textinput: {
    textAlign: 'center',
    fontSize: 16
  },
  hinhXe: {
    width: 300,
    height: 100
  },
  title: {
    fontSize: 16,
  },
});