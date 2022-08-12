import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, ScrollView,ImageBackground,TouchableOpacity } from 'react-native';
import { SvgUri } from 'react-native-svg';
import Icon1 from '../../home/icon/Icon1';
import Icon2 from '../../home/icon/Icon2';
import Icon3 from '../../home/icon/Icon3';
import Icon4 from '../../home/icon/Icon4';
import Icon5 from '../../home/icon/Icon5';
import { Ionicons } from '@expo/vector-icons';
export default function Sildepageloai() {
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
        style={{width:400,height:60,marginTop:5}} >
        <TouchableOpacity style={{width:80,height:60,alignItems:'center',justifyContent:'center'}}>
            <View style={{width:60,height:60,backgroundColor:'#DBDBDB',borderRadius:30}}>
                <View style={{width:30,height:30,marginLeft:15,marginTop:15}}>
                    <Icon1/>
                </View>    
            </View>  
        </TouchableOpacity>
        <TouchableOpacity style={{width:80,height:60,alignItems:'center',justifyContent:'center'}}>
            <View style={{width:60,height:60,backgroundColor:'#DBDBDB',borderRadius:30}}>
                <View style={{width:30,height:30,marginLeft:15,marginTop:15}}>
                    <Icon2/>
                </View>    
            </View>  
        </TouchableOpacity>
        <TouchableOpacity style={{width:80,height:60,alignItems:'center',justifyContent:'center'}}>
            <View style={{width:60,height:60,backgroundColor:'#DBDBDB',borderRadius:30}}>
                <View style={{width:30,height:30,marginLeft:15,marginTop:15}}>
                    <Icon3/>
                </View>    
            </View>  
        </TouchableOpacity>
        <TouchableOpacity style={{width:80,height:60,alignItems:'center',justifyContent:'center'}}>
            <View style={{width:60,height:60,backgroundColor:'#DBDBDB',borderRadius:30}}>
                <View style={{width:30,height:30,marginLeft:15,marginTop:15}}>
                    <Icon4/>
                </View>    
            </View>  
        </TouchableOpacity>
        <TouchableOpacity style={{width:80,height:60,alignItems:'center',justifyContent:'center'}}>
            <View style={{width:60,height:60,backgroundColor:'#DBDBDB',borderRadius:30}}>
                <View style={{width:30,height:30,marginLeft:15,marginTop:15}}>
                    <Icon5/>
                </View>    
            </View>  
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