import * as React from 'react';
import { SafeAreaView, Text } from 'react-native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DeviceInfo from 'react-native-device-info';

//const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';
const SUCCESS_MESSAGE = 'LOGIN SUCCESSFULL';
const BottomTabNavigator: React.FC = () => {
  return (
    <SafeAreaView
      style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', paddingHorizontal: 20 }}
    >
      <Text>{SUCCESS_MESSAGE}</Text>
    </SafeAreaView>
  );
};

export default BottomTabNavigator;
