import React, {useEffect, useState} from 'react';
import {Text, View, Pressable, Image} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import {useSelector,useDispatch} from 'react-redux';
import Constants from "expo-constants";
import styles from './styles';

const MainHeader = (props) => {
    
    return (
        <View style={[styles.header,{paddingTop: Constants.statusBarHeight}]}>
            <View style={styles.backCont}>
                {props.navigation.canGoBack() &&
                    <Pressable onPress={() => props.navigation.goBack()} style={styles.menuButton}>
                        <MaterialIcons name="chevron-left" size={40} color="black" />
                    </Pressable>
                }
            </View>
            <View style={styles.logoCont}>
                <Image style={styles.logo} resizeMode={'contain'} source={{uri: 'https://www.3it.cl/wp-content/uploads/2018/10/LOGO-3IT-1.png'}}/>
            </View>
            <View style={styles.menuCont}>
                <Pressable onPress={() => props.navigation.openDrawer()} style={styles.menuButton}>
                    <MaterialIcons name="menu" size={36} color="black" />
                </Pressable>
            </View>
                
        </View>
    );
};

export default MainHeader;
