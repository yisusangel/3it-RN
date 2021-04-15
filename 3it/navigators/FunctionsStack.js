import React from "react";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import FunctionsHome from '../components/Functions/FunctionsHome/FunctionsHome';
import MainHeader from '../components/MainHeader/MainHeader';

const Stack = createStackNavigator();
const TransitionScreenOptions = {
  ...TransitionPresets.SlideFromRightIOS
};
const options = {
  header: (props) => <MainHeader {...props}/>
}
const FunctionsStack = () => {
  return (
    <Stack.Navigator
      headerMode={'float'}
      screenOptions={TransitionScreenOptions}>
        <Stack.Screen
          name="FunctionsHome"
          component={FunctionsHome}
          options={options}
        />
    </Stack.Navigator>
  );
};

export default FunctionsStack;
