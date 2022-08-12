import React, {useState,useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Newsitem from './news/Newsitem';
import Newspage from './news/Newspage';
const Stack = createStackNavigator();

export default function Newsscreen() {
  return (
    <Stack.Navigator
    initialRouteName="Newspage"
    screenOptions={{
      headerStyle: { backgroundColor: '#07C9D0' },
      headerTintColor: '#fff',
      headerTitleStyle: { fontWeight: 'bold' },
    }}>
    <Stack.Screen
      name="Newspage"
      component={Newspage}
      options={{ title: '3SHOP' }}
    />
    <Stack.Screen
      name="Newsitem"
      component={Newsitem}
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
