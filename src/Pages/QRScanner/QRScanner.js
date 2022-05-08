import React,{useState} from 'react';
import { Text,View,Button,TouchableOpacity,SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';

import routes from '../../Navigation/routes';
import useFetch from '../../hooks/useFetch';
import styles from './QRScanner.styles';
const QRScanner = () => {
    const navigation=useNavigation();

    function handleNavigation(){
        navigation.navigate(routes.DETAIL_STACK)
    }

    const onSuccess = e => {
        Linking.openURL(e.data).catch(err =>
          console.error('An error occured', err)
        );
      };
    

  return (
      <SafeAreaView>
      <View style={styles.qr_container}>
          
          <QRCodeScanner
        onRead={onSuccess}
        flashMode={RNCamera.Constants.FlashMode.torch}
        topContent={
          <Text style={styles.centerText}>
            Go to{' '}
            <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on
            your computer and scan the QR code.
          </Text>
        }
        bottomContent={
          <TouchableOpacity style={styles.buttonTouchable}>
            <Text style={styles.buttonText}>OK. Got it!</Text>
          </TouchableOpacity>
        }
      />
      </View>
      </SafeAreaView>
     
    );
};

export default QRScanner;
