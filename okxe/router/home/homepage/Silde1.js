import { StatusBar } from "expo-status-bar";
import { StyleSheet,Text,View,ImageBackground,Button,TouchableOpacity,FlatList,ScrollView } from "react-native";
import {Asset} from 'expo-asset';
import AppLoading from 'expo-app-loading';
import Unorderedlist from 'react-native-unordered-list';
import React from "react";
import Introductpage from "./Introductpage";
export default function Silde_1(props) {
  const {navigation} = props;
  const data = [
    {_id:2,title:'Bán xe giá cao:',content:'OKXE sẽ giúp bạn kiểm tra đảm bảo chất lượng của xe, tư vấn giá bán chính xác giá trị chiếc xe của bạn để bán được với giá cao nhất.' },
    {_id:3,title:'Bán xe giá cao:',
    content:'Trong tháng đầu tiên hoạt động, OKXE Station mang đến ưu đãi cực sốc. Cụ thể:<li>Giảm đến 45% cho các dịch vụ đơn lẻ như rửa xe, kiểm tra chất lượng, chụp ảnh và hỗ trợ đăng tin bán xe trên ứng dụng OKXE. Mức giá ưu đãi còn 29.000-179.000 đồng.</li>'},
  ]
  const renderItems = ({ item }) => (
    <View>
      <Text><Text style={{fontWeight:'bold'}}>{item.title}</Text>{item.content}</Text>
    </View>
  );
    return (
        ///https://ibb.co/g6TcF2V
        <ScrollView>
          <View style={{alignItems: 'center',justifyContent: 'center'}}>
            <Text style={{fontSize:16,fontWeight:'bold'}}>BÁN XE CŨ GIÁ CAO - BÁN NHANH BÁN KHỎE</Text>
          </View>
          <View>
              <Text style={{fontWeight:'bold'}}>Làm sao để bán được xe cũ với giá cao, lại còn bán nhanh bán khỏe? Đó là bạn chưa tìm đến OKXE Station - Trạm Dịch Vụ Xe Máy OKXE.</Text>
          </View>
          <View>
            <Text>Trạm dịch vụ OKXE hiện 
              <Text style={{fontWeight:'bold'}}> hoạt động duy nhất tại TP. Hồ Chí Minh.</Text> 
              Dự kiến hệ thống sẽ được mở rộng trong thời gian tới</Text>
          </View>
          <ImageBackground 
                source={require("../../../public/silde1.jpg")}
                style={{width:400,height:180,resizeMode:'cover',alignItems: 'center',}}>
          </ImageBackground>
          <View>
            <Text>
              <Text style={{fontWeight:'bold'}}>Bán xe nhanh:</Text>
                Tất tần tật việc bán xe, từ tân trang, chụp ảnh, quảng bá tin đăng trên ứng dụng OKXE, thương lượng giá đến sang tên đổi chủ, hãy để OKXE làm thay bạn.
            </Text>
          </View>
          <View>
            <Text>
              <Text style={{fontWeight:'bold'}}>Bán xe giá cao:</Text>
              OKXE sẽ giúp bạn kiểm tra đảm bảo chất lượng của xe, tư vấn giá bán chính xác giá trị chiếc xe của bạn để bán được với giá cao nhất.
            </Text>
          </View>
          <View>
            <Text>
              <Text style={{fontWeight:'bold'}}>Tiết kiệm chi phí:</Text>
              Trong tháng đầu tiên hoạt động, OKXE Station mang đến ưu đãi cực sốc. Cụ thể:
            </Text>
          </View>
          <View>
            <Unorderedlist style={{fontSize:20}} bulletUnicode={0x2022}>
                  <Text>
                    Giảm đến 45% cho các dịch vụ đơn lẻ như rửa xe, kiểm tra chất lượng, chụp ảnh và hỗ trợ đăng tin bán xe trên ứng dụng OKXE. Mức giá ưu đãi còn 29.000-179.000 đồng.
                  </Text>
            </Unorderedlist>
          </View>
          <View>
            <Unorderedlist style={{fontSize:20}} bulletUnicode={0x2022}>
                  <Text>
                  Phí kiểm tra đảm bảo chất lượng xe tại OKXE Station giảm còn 79.000 đồng thay vì mức niêm yết 299.000 đồng.
                  </Text>
            </Unorderedlist>
          </View>
          <View>
            <Unorderedlist style={{fontSize:20}} bulletUnicode={0x2022}>
                  <Text>
                  Đặc biệt, dịch vụ trọn gói “Bán nhanh, bán giá tốt” có mức thu phí chỉ 2,5% giá xe khi bán thành công.
                  </Text>
            </Unorderedlist>
          </View>
          <View>
            <Text>
              <Text style={{fontWeight:'bold'}}>Nghỉ ngơi và thư giãn:</Text>
              Khi đăng ký sử dụng dịch vụ thông qua website okxe.vn, bạn sẽ được tặng thức uống miễn phí. Thời gian áp dụng duy nhất trong tháng khai trương của OKXE Station, từ ngày 27/5 đến 27/6/2022.
            </Text>
          </View>
          <View>
            <Text>
              Đừng quên nhấn nút “<Text style={{fontWeight:'bold'}}>Đăng Ký</Text>” bên dưới để OKXE đón tiếp bạn ở Trạm Dịch Vụ OKXE, địa chỉ tại 40 Út Tịch, Phường 4, Quận Tân Bình, Thành phố Hồ Chí Minh.
            </Text>
          </View>
          <Introductpage/>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textinput:{
    textAlign:'center',
    fontSize:16
  },
  item: {
    marginVertical:4,
    borderBottomWidth:1,
    borderBottomColor:'#DBDBDB'
  }
});