import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import Homescreen from './Homescreen';
import Newsscreen from './Newsscreen';
import Userscreen from './Usersscreen';
import Hoadon from './Hoadon';
const Tab = createBottomTabNavigator();
import { Ionicons } from '@expo/vector-icons';
export default function bottomTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen 
            name="Homescreen" 
            component={Homescreen} 
            options={{
                tabBarLabel:"Trang chủ",
                tabBarIcon:() =>(
                    <Entypo name="home" size={24} color="black" />
                ),
        }}/>
      <Tab.Screen 
            name="Newsscreen" 
            component={Newsscreen} 
            options={{
                tabBarLabel:"Bản tin",
                tabBarIcon:() =>(
                    <Entypo name="news" size={24} color="black" />
                ),
            }}
            />
      <Tab.Screen 
            name="Userscreen" 
            component={Userscreen} 
            options={{
                tabBarLabel:"Hồ sơ",
                tabBarIcon:() =>(
                    <Entypo name="user" size={24} color="black" />
                ),
            }}
            />
        <Tab.Screen
            name="Hoadon"
            component={Hoadon}
            options={{
                tabBarLabel:"Hóa đơn",
                tabBarIcon:() =>(
                    <MaterialIcons name="add-box" size={24} color="black" />
                ),
            }}
        />    
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});