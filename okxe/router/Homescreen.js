import React, {useState,useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Homepage from './home/Homepage';
import Thanhtoanpage from './home/Thanhtoanpage';
import Motopage from './home/Motopage';
import Loginmuahang from './home/Loginmuahang';
import Muahang from './home/Muahang';
import Silde_1 from './home/homepage/Silde1';
import Silde_2 from './home/homepage/Silde2';
import Silde_4 from './home/homepage/Silde4';
import Silde_5 from './home/homepage/Silde5';
import Sildepage from './home/homepage/Slidepage';
import Loginbinhluan from './home/Loginbinhluan';
import Comment from './home/Comment';
import Loginchat from './home/Loginchat';
import Chat from './home/Chat';
import Listchat from './home/Listchat';
import Nguoibanchat from './home/Nguoibanchat';


const Stack = createStackNavigator();

function LogoTitle() {
  return (
    <View style={styles.container}>
      <Image
        style={{ width: 125, height: 125 }}
        source={require('../public/images/3shop.png')}
      />
      <View style={{backgroundColor:'#42f44b',width:420,marginTop:-43,marginLeft:-16}}>
          <TextInput
            style={{fontSize:16,textAlign:'center',backgroundColor:'#42f44b'}}
            placeholder='Xe cần tìm kiếm?'
          />
      </View>
    </View>
  );
}

export default function Homescreen() {
  return (
    <Stack.Navigator
      initialRouteName="Homepage"
      screenOptions={{
        headerStyle: { backgroundColor: '#07C9D0' },
        headerTitleAlign:'center',
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold',textAlign:'center' },
      }}>
      <Stack.Screen
        name="Homepage"
        component={Homepage}
        options={{ title: '3SHOP' }}
      />
      <Stack.Screen
        name="Motopage"
        component={Motopage}
        options={{ title: '3SHOP' }}
      />
      <Stack.Screen
        name="Thanhtoanpage"
        component={Thanhtoanpage}
        options={{ title: '3SHOP' }}
      />
      <Stack.Screen
        name="Loginmuahang"
        component={Loginmuahang}
        options={{ title: '3SHOP' }}
      />
      <Stack.Screen
        name="Loginbinhluan"
        component={Loginbinhluan}
        options={{ title: '3SHOP' }}
      />
      <Stack.Screen
        name="Comment"
        component={Comment}
        options={{ title: '3SHOP' }}
      />
      <Stack.Screen
        name="Muahang"
        component={Muahang}
        options={{ title: '3SHOP' }}
      />
       <Stack.Screen
        name="Sildepage"
        component={Sildepage}
        options={{ title: '3SHOP' }}
      />
      <Stack.Screen
        name="Silde_1"
        component={Silde_1}
        options={{ title: '3SHOP' }}
      />
      <Stack.Screen
        name="Silde_2"
        component={Silde_2}
        options={{ title: '3SHOP' }}
      />
      <Stack.Screen
        name="Silde_4"
        component={Silde_4}
        options={{ title: '3SHOP' }}
      />
      <Stack.Screen
        name="Silde_5"
        component={Silde_5}
        options={{ title: '3SHOP' }}
      />
      <Stack.Screen
        name="Loginchat"
        component={Loginchat}
        options={{ title: '3SHOP' }}
      />
      <Stack.Screen
        name="Chat"
        component={Chat}
        options={{ title: '3SHOP' }}
      />
      <Stack.Screen
        name="Listchat"
        component={Listchat}
        options={{ title: '3SHOP' }}
      />
      <Stack.Screen
        name="Nguoibanchat"
        component={Nguoibanchat}
        options={{ title: '3SHOP' }}
      />

    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#42f44b',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});