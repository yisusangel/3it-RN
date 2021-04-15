import React from "react";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import IndicatorList from '../components/Home/IndicatorList/IndicatorList';
import IndicatorDetail from '../components/Home/IndicatorDetail/IndicatorDetail';
import IndicatorInfo from '../components/Home/IndicatorInfo/IndicatorInfo';
import MainHeader from '../components/MainHeader/MainHeader';

const Stack = createStackNavigator();
const TransitionScreenOptions = {
  ...TransitionPresets.SlideFromRightIOS
};
const options = {
  header: (props) => <MainHeader {...props}/>
}
const HomeStack = () => {
  return (
    <Stack.Navigator
      headerMode={'float'}
      screenOptions={TransitionScreenOptions}>
        <Stack.Screen
          name="IndicatorList"
          component={IndicatorList}
          options={options}
        />
        <Stack.Screen
          name="IndicatorDetail"
          component={IndicatorDetail}
          options={options}
        />
        <Stack.Screen
          name="IndicatorInfo"
          component={IndicatorInfo}
          options={options}
        />
    </Stack.Navigator>
  );
};

export default HomeStack;
