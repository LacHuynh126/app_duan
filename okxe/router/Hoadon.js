import React, {useState,useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import Homehoadon from './hoadon/Homehoadon';
import Loginhoadon from './hoadon/Loginhoadon';
import Gethoadon from './hoadon/Gethoadon';
import Itemhoadon from './hoadon/Itemhoadon';
const Stack = createStackNavigator();
export default function Homescreen() {

  return (
    <Stack.Navigator
      initialRouteName="Homehoadon"
      screenOptions={{
        headerStyle: { backgroundColor: '#07C9D0' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
      }}>
      <Stack.Screen
        name="Homehoadon"
        component={Homehoadon}
        options={{ title: '3SHOP' }}
      />
      <Stack.Screen
        name="Loginhoadon"
        component={Loginhoadon}
        options={{ title: '3SHOP' }}
      />
      <Stack.Screen
        name="Gethoadon"
        component={Gethoadon}
        options={{ title: '3SHOP' }}
      />
      <Stack.Screen
        name="Itemhoadon"
        component={Itemhoadon}
        options={{ title: '3SHOP' }}
      />
    </Stack.Navigator>
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