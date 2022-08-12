import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button,ImageBackground } from 'react-native';
import React,{useState} from 'react';
import { RadioButton } from 'react-native-paper';
import QRCode from 'react-native-qrcode-svg';
import { Ionicons } from '@expo/vector-icons';
import { NativeModules } from "react-native";

export default function Muahang(props) {
  const {navigation,route:{params:{id_userss,id_motos,id_hoadons,usernamess}}} = props;
  const [trangthai,settrangthai] = useState(true);
  const [check,setCheck] = useState('first');
  const [buttons,setButtons] = useState(true);
  const [qrvalue, setQrvalue] = useState('');
  const [nones,setNones] = useState('');
  if(trangthai){
    const { checked } = check;
    const onLogin = () => {
      (async () => {
          const rawResponse = await fetch('http://192.168.1.9:3000/api/hoadon/' + id_userss + '/thanhtoan' , {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({idHoadon:id_hoadons,trangThaihoadon:'Đã Thanh Toán',maXee:id_motos,nguoiMua:usernamess})
          });
          const check = await rawResponse.text();
          const datacheck = JSON.parse(check);
          NativeModules.DevSettings.reload();
          console.log(datacheck);
        })();
        if (buttons==true){
          setQrvalue("http://192.168.1.9:3000/api/hoadon/' + id_userss + '/thanhtoan'");
        }
    }
    return (
        <RadioButton.Group>
          <View>
            <Text>Thanh toán bằng tiền mặt</Text>
            <RadioButton 
              value=""
              onPress={() => { setCheck('Thanh toán bằng tiền mặt');
                  setButtons(false);
      
              }} 
            />
          </View>
          <View>
            <Text>Thanh toán bằng Zalopay</Text>
            <RadioButton 
              value=""
              onPress={() => { setCheck('Thanh toán bằng zalopay');
                  setButtons(true);
            }} 
            />
          </View>
          <View>
            <QRCode
              value={qrvalue ? qrvalue : 'NA'}
              size={250}
              color="black"
              
              backgroundColor="white"
              logo={{
                url:
                  'https://binhtan.hochiminhcity.gov.vn/documents/10217/8939190/1572261642995unnamcghghged.jpg/ea4afe53-1b96-4fe8-9c15-41931692ed1d',
              }}
              logoSize={60}
              logoMargin={4}
              logoBorderRadius={30}
              logoBackgroundColor="gray"
            />
          </View>
          <Button disabled={buttons}  title="Thanh Toán" onPress={onLogin}></Button> 
          {/* <RadioButton
            value=""
            label="Carto Base MAp"
            status={checked === 'first' ? 'checked' : 'unchecked'}
            onPress={() => { setCheck('first');}}
          />
          <RadioButton
            value={check}
            status={checked === 'second' ? 'checked' : 'unchecked'}
            onPress={() => { setCheck('second');}}
          />

          <RadioButton
            value="third"
            status={checked === 'third' ? 'checked' : 'unchecked'}
            onPress={() => { setCheck('third');}}
          /> */}
        </RadioButton.Group>
        // {/*  */}
    );
  } else {
    return (
      <View style={styles.container}>
        <RadioButton
          value="first"
          label="Carto Base MAp"
          status={checked === 'first' ? 'checked' : 'unchecked'}
          // onPress={() => { this.setState({ checked: 'first' }); }}
        />
        <RadioButton
          value="second"
          status={checked === 'second' ? 'checked' : 'unchecked'}
          // onPress={() => { this.setState({ checked: 'second' }); }}
        />

        <RadioButton
          value="third"
          status={checked === 'third' ? 'checked' : 'unchecked'}
          // onPress={() => { this.setState({ checked: 'third' }); }}
        />
        {/* <Ionicons name='md-checkmark-circle' size={32} color='green' />; */}
        <StatusBar style="auto" />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
 
  },
});