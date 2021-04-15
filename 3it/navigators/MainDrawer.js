import React from 'react';
import {
  createDrawerNavigator,
} from '@react-navigation/drawer';
import HomeStack from './HomeStack';
import FunctionsStack from './FunctionsStack';
import SideBar from '../components/SideBar/SideBar';

const Drawer = createDrawerNavigator();
const MainDrawer = () => {

  return (
    <Drawer.Navigator
      drawerContent={props => <SideBar {...props} />}
      drawerPosition={'right'}
      drawerStyle={{
        backgroundColor: 'white',
        width: '80%'
      }}>
      <Drawer.Screen name="HomeStack" component={HomeStack} />
      <Drawer.Screen name="FunctionsStack" component={FunctionsStack} />
    </Drawer.Navigator>
  );
}

export default MainDrawer;