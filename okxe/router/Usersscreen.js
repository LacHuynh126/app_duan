import React, {useState,useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import Login from './users/Login';
import Signin from './users/Signin';
import Userprofile from './users/Userprofile';
import Homeuser from './users/Homeuser';
import Remember from './users/Remember';
import Updatepass from './users/Updatepass';
const Stack = createStackNavigator();
export default function Usersscreen() {

  return (
    <Stack.Navigator
      initialRouteName="Homeuser"
      screenOptions={{
        headerStyle: { backgroundColor: '#07C9D0' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
      }}>
      <Stack.Screen
        name="Homeuser"
        component={Homeuser}
        options={{ title: '3SHOP' }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ title: '3SHOP' }}
      />
       <Stack.Screen
        name="Remember"
        component={Remember}
        options={{ title: '3SHOP' }}
      />
      <Stack.Screen
        name="Signin"
        component={Signin}
        options={{ title: '3SHOP' }}
      />
       <Stack.Screen
        name="Userprofile"
        component={Userprofile}
        options={{ title: '3SHOP' }}
      />
      <Stack.Screen
        name="Updatepass"
        component={Updatepass}
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