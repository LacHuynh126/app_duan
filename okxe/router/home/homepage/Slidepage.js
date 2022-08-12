import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, ScrollView,ImageBackground,TouchableOpacity } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

export default function Sildepage(props) {
  const {navigation} = props;
  const images = [
    'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/104842/bmw-vehicle-ride-bike-104842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/159192/vespa-roller-motor-scooter-cult-159192.jpeg?cs=srgb&dl=pexels-pixabay-159192.jpg&fm=jpg',
    'https://images.pexels.com/photos/1325735/pexels-photo-1325735.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/9054774/pexels-photo-9054774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/4063861/pexels-photo-4063861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  ]
  const onAccess = () => {
    navigation.navigate('Silde_1')
  }
  // <ImageBackground
  //               style={styles.container}
  //               source={require("../../public/3shop.png")}>
  //             <Button title="Login" onPress={()=>{navigation.navigate('Login')}}></Button>
  //           </ImageBackground>
  return (
    <View>
      <ScrollView
        pagingEnabled
        horizontal 
        style={{width:400,height:180,backgroundColor:'#DBDBDB'}} >
        <TouchableOpacity onPress={onAccess}>
          <ImageBackground 
                source={require("../../../public/silde1.jpg")}
                style={{width:400,height:180,resizeMode:'cover',alignItems: 'center',}}>
          </ImageBackground>  
        </TouchableOpacity>
        <TouchableOpacity>
          <ImageBackground 
                source={require("../../../public/silde2.jpg")}
                style={{width:400,height:180,resizeMode:'cover',alignItems: 'center',}}>
          </ImageBackground>  
        </TouchableOpacity>
        <TouchableOpacity>
          <ImageBackground 
                source={require("../../../public/silde3.jpg")}
                style={{width:400,height:180,resizeMode:'cover',alignItems: 'center',}}>
          </ImageBackground>  
        </TouchableOpacity>
        <TouchableOpacity>
          <ImageBackground 
                source={require("../../../public/silde4.jpg")}
                style={{width:400,height:180,resizeMode:'cover',alignItems: 'center',}}>
          </ImageBackground>  
        </TouchableOpacity>
        <TouchableOpacity>
          <ImageBackground 
                source={require("../../../public/silde5.jpg")}
                style={{width:400,height:180,resizeMode:'cover',alignItems: 'center',}}>
          </ImageBackground>  
        </TouchableOpacity>
      </ScrollView>
    </View>
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