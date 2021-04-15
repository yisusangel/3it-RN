import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  View,
  Text,
  Image
} from 'react-native';
import axios from 'axios';
import moment from 'moment';
import {Card, Button, ProgressBar} from 'react-native-paper';
import styles from './styles';

const IndicatorDetail = (props) => {
    const [details, setDetails] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios.get(`https://mindicador.cl/api/${props.route.params.indicator.codigo}`)
        .then((res) => {
            setLoading(false);
            setDetails(res.data)
        })
        .catch((error) => {
          console.log(error);
        });
    }, [props.route.params.indicator]);

    return (
        <View style={styles.container}>
            <Card style={styles.card}>
                <Card.Content>
                    <ScrollView style={{height: '100%'}}>
                        {loading ? (
                            <ProgressBar indeterminate={true} color={"#425ba6"}/>
                        ) : (
                        <>
                            {details.serie &&
                            <>
                                <Text style={styles.title}>{details.nombre}</Text>
                                {details.serie.map((val, i) => (
                                    <View style={styles.detailCont} key={i}>
                                        <Text style={[styles.detailText, {color: '#1b85ec'}]}>{moment(val.fecha).format('YYYY-MM-DD')}</Text>
                                        <Text style={styles.detailText}>{val.valor}</Text>
                                    </View>
                                ))}
                            </>
                            }
                        </>
                        )}
                    </ScrollView>
                </Card.Content>
            </Card>
        </View>
    );
};

export default IndicatorDetail;