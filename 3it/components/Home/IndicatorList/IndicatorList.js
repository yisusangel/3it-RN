import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  View,
  Text,
  Image
} from 'react-native';
import axios from 'axios';
import {Card, ProgressBar} from 'react-native-paper';
import styles from './styles';
import IndicatorCard from './IndicatorCard/IndicatorCard'

const IndicatorList = (props) => {
    const [indicators, setIndicators] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios.get('https://mindicador.cl/api')
        .then((res) => {
            const data = res.data;
            delete data.fecha;
            delete data.autor;
            delete data.version;
            setIndicators(Object.values(data));
            setLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);

    const goToIndicador = (indicator) => {
        props.navigation.navigate('IndicatorDetail', {indicator})
    }

    const goToInfo = (indicator) => {
        props.navigation.navigate('IndicatorInfo', {indicator})
    }

    return (
        <View style={styles.container}>
            <Card style={styles.card}>
                <Card.Content>
                    <ScrollView style={{height: '100%'}}>
                        <Text style={styles.title}>Indicadores</Text>
                        {loading ? (
                            <ProgressBar indeterminate={true} color={"#425ba6"}/>
                        ) : (
                            <>
                            {indicators.map((val, i) => (
                                <IndicatorCard indicator={val} key={i} goToIndicador={goToIndicador} goToInfo={goToInfo}/>
                            ))}
                            </>
                        )}
                    </ScrollView>
                </Card.Content>
            </Card>
        </View>
    );
};

export default IndicatorList;