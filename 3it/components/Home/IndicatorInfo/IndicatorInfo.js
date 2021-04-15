import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  View,
  Text,
  Image
} from 'react-native';
import axios from 'axios';
import moment from 'moment';
import { LineChart, Grid, XAxis, YAxis } from 'react-native-svg-charts'
import {Card, Button, ProgressBar} from 'react-native-paper';
import styles from './styles';

const IndicatorInfo = (props) => {
    const [loading, setLoading] = useState(false);
    const [chartValues, setChartValues] = useState({});
    const [hasValue, setHasValue] = useState(false);
    const axesSvg = { fontSize: 10, fill: 'grey' };
    const verticalContentInset = { top: 10, bottom: 10 }
    
    useEffect(() => {
        if(props.route.params.indicator && !hasValue){
            setLoading(true);
            setHasValue(true)
            const {codigo} = props.route.params.indicator;
            axios.get(`https://mindicador.cl/api/${codigo}`)
            .then((res) => {
                setLoading(false);
                setChartValues(res.data)
            })
            .catch((error) => {
            console.log(error);
            });
        }
    });
    return (
        <View style={styles.container}>
            <Card style={styles.card}>
                <Card.Content>
                    <ScrollView>
                    {loading ? (
                            <ProgressBar indeterminate={true} color={"#425ba6"}/>
                        ) : (
                            <>
                            {(chartValues.serie && chartValues.serie.length > 0 )&&
                                <>
                                <Text style={styles.title}>{chartValues.serie[0].valor}</Text>
                                <View style={{marginVertical: 10}}>
                                    <View style={styles.infoCont}>
                                        <Text style={styles.infoTitle}>Nombre</Text>
                                        <Text style={styles.infoValue}>{chartValues.nombre}</Text>
                                    </View>
                                    <View style={styles.infoCont}>
                                        <Text style={styles.infoTitle}>Fecha</Text>
                                        <Text style={styles.infoValue}>{moment(chartValues.serie[0].fecha).format('YYYY-MM-DD')}</Text>
                                    </View>
                                    <View style={styles.infoCont}>
                                        <Text style={styles.infoTitle}>Unidad de Medida</Text>
                                        <Text style={styles.infoValue}>{chartValues.unidad_medida}</Text>
                                    </View>
                                </View>
                                <View style={{ height: 250, flexDirection: 'row' }}>
                                    <YAxis
                                        data={chartValues.serie}
                                        contentInset={verticalContentInset}
                                        svg={axesSvg}
                                        yAccessor={ ({ item }) => item.valor }
                                    />
                                    <View style={{ flex: 1, marginLeft: 10 }}>
                                        <LineChart
                                            style={{ flex: 1 }}
                                            data={chartValues.serie}
                                            yAccessor={ ({ item }) => item.valor }
                                            contentInset={verticalContentInset}
                                            svg={{ stroke: 'rgb(134, 65, 244)' }}
                                        >
                                            <Grid/>
                                        </LineChart>
                                    </View>
                                </View>
                                </>
                            }
                            </>
                        )}
                    </ScrollView>
                </Card.Content>
            </Card>
        </View>
    )
};



export default IndicatorInfo;