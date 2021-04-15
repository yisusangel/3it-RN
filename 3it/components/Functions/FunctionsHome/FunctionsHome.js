import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  View,
  Text
} from 'react-native';
import {useDispatch, useSelector } from "react-redux";
import { BarCodeScanner } from 'expo-barcode-scanner';
import {Card, Button, Modal, TextInput} from 'react-native-paper';
import { setUser } from "../../../actions/userActions";
import styles from './styles';

const FunctionsHome = (props) => {

  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [scan, setScan] = useState('');
  const [visibleUser, setVisibleUser] = useState(false);
  const [visibleQr, setVisibleQr] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    requestCameraPermission();
  },[]);

  const requestCameraPermission = async() => {
    const { status } = await BarCodeScanner.requestPermissionsAsync();
    setHasCameraPermission(status === 'granted');
  };

  return (
    <>
    <View style={styles.container}>
        <Card style={styles.card}>
          <Card.Content>
            <Text style={styles.title}>Funciones Generales</Text>
            <Button
                mode="contained"
                color="#01788F"
                style={{paddingVertical: 5, marginVertical: 10}}
                onPress={() => setVisibleUser(true)}
                labelStyle={{ color: "white", fontSize: 16 }}
              >cambiar usuario</Button>
              <Button
                mode="contained"
                color="#425ba6"
                style={{paddingVertical: 5, marginVertical: 10}}
                onPress={() => setVisibleQr(true)}
                labelStyle={{ color: "white", fontSize: 16 }}
              >escanear qr o barcode</Button>
          </Card.Content>
        </Card>
        
    </View>
    <Modal visible={visibleUser} onDismiss={() => setVisibleUser(false)} contentContainerStyle={[styles.modalStyle, {marginTop: '-50%'}]}>
      <Text style={styles.title}>Cambie su nombre de usuario</Text>
      <TextInput
          label="Nombre de usuario"
          value={user}
          style={styles.textInput}
          onChangeText={val => dispatch(setUser(val))}
          returnKeyType={'done'}
          theme={{ colors: { text: '#425ba6' }}}
          />
        <Button
          mode="contained"
          color="#01788F"
          style={{paddingVertical: 5, marginVertical: 10}}
          onPress={() => setVisibleUser(false)}
          labelStyle={{ color: "white", fontSize: 16 }}
        >guardar</Button>
    </Modal>
    <Modal visible={visibleQr} onDismiss={() => setVisibleQr(false)} contentContainerStyle={[styles.modalStyle, {height: '98%'}]}>
      {hasCameraPermission === null
            ? <Text>Requesting for camera permission</Text>
            : hasCameraPermission === false
                ? <Text style={{ color: 'black' }}>
                    Camera permission is not granted
                    </Text>
                : <BarCodeScanner
                    onBarCodeScanned={(e) => setScan(e.data)}
                    style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
                >
                    <View style={styles.frame}>
                        <View style={{width: '20%', height: '20%', borderTopWidth: 4, borderLeftWidth: 4, borderRadius: 4, borderColor: 'white'}}></View>
                        <View style={{width: '20%', height: '20%', borderTopWidth: 4, borderRightWidth: 4, borderRadius: 4, borderColor: 'white'}}></View>
                        <View style={{width: '100%', height: '60%'}}></View>
                        <View style={{width: '20%', height: '20%', borderBottomWidth: 4, borderLeftWidth: 4, borderRadius: 4, borderColor: 'white'}}></View>
                        <View style={{width: '20%', height: '20%', borderBottomWidth: 4, borderRightWidth: 4, borderRadius: 4, borderColor: 'white'}}></View>
                    </View>
                </BarCodeScanner>
          }
          <Text style={{alignSelf: 'center', fontSize: 16, marginVertical: 5}}>Código: {scan}</Text>
          <Button
            mode="contained"
            color="#425ba6"
            style={{paddingVertical: 5, marginVertical: 10}}
            onPress={() => setVisibleQr(false)}
            labelStyle={{ color: "white", fontSize: 16 }}
          >cerrar</Button>
      </Modal>
    </>
  );
};

export default FunctionsHome;