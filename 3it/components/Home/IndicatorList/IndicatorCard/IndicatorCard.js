import React from 'react';
import {
  View,
  Text,
  Pressable
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './styles';

const IndicatorCard = (props) => {
    const {indicator: i, goToIndicador, goToInfo} = props
    return (
        <View style={styles.container}>
            <Pressable style={{width: '80%'}} onPress={() => goToIndicador(i)}>
                <Text style={{fontSize: 16, marginVertical: 4}}>{i.nombre}</Text>
                <Text style={{color: '#1b85ec'}}>{i.unidad_medida}</Text>
            </Pressable>
            <Pressable style={styles.infoCont} onPress={() => goToInfo(i)}>
                <MaterialCommunityIcons name="information-outline" size={28} color="#1b85ec" />
                <MaterialCommunityIcons name="chevron-right" size={22} color="#aaa" />
            </Pressable>
        </View>
    );
};

export default IndicatorCard;