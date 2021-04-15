import React from 'react';
import { DrawerContentScrollView }from '@react-navigation/drawer';
import {
    Text,
    View,
    Pressable,
} from 'react-native';
import { useSelector } from "react-redux";
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import styles from './styles';

const SideBar = (props) => {
    const { navigation } = props;
    const user = useSelector((state) => state.user);

    return (
    <DrawerContentScrollView {...props} style={{backgroundColor: '#facd0b'}}>
        <View style={styles.menuItems}>
            <Text style={styles.userText}>¡Bienvenid@ {user || 'Usuario'}!</Text>
            <Pressable 
                style={styles.menuItemCont}
                onPress={() => navigation.reset({
                    index: 0,
                    routes: [{name: 'HomeStack'}]
                })}>
                <FontAwesome5 name="comment-dollar" size={24} color="black" />
                <Text style={styles.menuItemText}>Indicadores</Text>
            </Pressable>
            
             <Pressable 
                style={styles.menuItemCont}
                onPress={() => navigation.reset({
                    index: 0,
                    routes: [{name: 'FunctionsStack'}]
                })}>
                <Ionicons name="options" size={24} color="black" />
                <Text style={styles.menuItemText}>Funciones Generales</Text>
            </Pressable>
        </View>
    </DrawerContentScrollView>
    );
  }

export default SideBar;

