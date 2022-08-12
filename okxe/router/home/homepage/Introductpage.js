import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, ScrollView,ImageBackground,TouchableOpacity } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Zocial } from '@expo/vector-icons'; 
import { WebView } from 'react-native-webview';
export default function Introductpage() {
  const webchplay = () => {
    alert('successs');
  }
  return (
    <View style={{height:380,backgroundColor:'#DBDBDB',padding:15}}>
    <Text style={{fontSize:24,color:'grey'}}>OKXE.VN</Text>
    <ScrollView horizontal>
        <View style={{width:150}}>
            <Text style={{fontSize:16,fontStyle:'normal'}}>
              Công ty TNHH OKXE Việt Nam
            </Text>
            <Text>
              Hà Nội: Tòa nhà Sao Mai - Tầng 11, số 19 Lê Văn Lương, P. Nhân Chính, Q. Thanh Xuân.
            </Text>
            <Text>
              Điện thoại: (024) 73 077 889
            </Text>
            <Text>
              Hồ Chí Minh: Tòa nhà TTC - Tầng 17, số 253 Hoàng Văn Thụ, P.2, Q. Tân Bình.
              
            </Text>
            <Text>
              Điện thoại: (028) 73 057 057
            </Text>
        </View>
        <View style={{width:100}}>
            <Text style={{fontSize:16,fontStyle:'normal'}}>
              HỖ TRỢ KHÁCH HÀNG
            </Text>
            <Text>
              Hotline: 1900 636 135 (9:00 - 21:00)
            </Text>
            <Text>
              Email: support@okxe.vn
            </Text>
        </View>
        <View style={{width:'30%'}}>
            <Text style={{fontSize:16,fontStyle:'normal'}}>
              VỀ CHÚNG TÔI
            </Text>
            <Text>
              Giới thiệu
            </Text>
            <Text>
              Điều khoản sử dụng
            </Text>
            <Text>
              Quy chế hoạt động
            </Text>
            <Text>
              Trung tâm khách hàng
            </Text>
            <Text>
              Hỏi đáp
            </Text>
        </View>
    </ScrollView>
    <ScrollView horizontal style={{marginHorizontal:55}}>
      <TouchableOpacity onPress={webchplay}>
        <ScrollView horizontal style={{width:118,height:45,backgroundColor:'#494949',padding:5,borderRadius:9,marginHorizontal:5,marginVertical:5}}>
          <Zocial name="appstore" size={30} color="white" />
          <View>
            <Text style={{color:'white'}}>Tải về trên</Text>
          </View>
          <View style={{marginLeft:-65,marginTop:15}}>
            <Text style={{fontWeight:'bold',color:'white'}}>Google Play</Text>
          </View>
        </ScrollView>
      </TouchableOpacity>
      <TouchableOpacity>
        <ScrollView horizontal style={{width:118,height:45,backgroundColor:'#494949',padding:5,borderRadius:9,marginHorizontal:5,marginVertical:5}}>
          <Entypo name="google-play" size={30} color="white" />
          <View>
            <Text style={{color:'white'}}>Tải về trên</Text>
          </View>
          <View style={{marginLeft:-65,marginTop:15}}>
            <Text style={{fontWeight:'bold',color:'white'}}>Google Play</Text>
          </View>
        </ScrollView>
      </TouchableOpacity>
    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DBDBDB',
  },
});