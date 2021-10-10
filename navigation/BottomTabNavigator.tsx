import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DeviceInfo from 'react-native-device-info';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

const BottomTabNavigator: React.FC = () => {


  return (
    <BottomTab.Navigator
      initialRouteName={INITIAL_ROUTE_NAME}
      // screenOptions={{ tabBarVisible: navigation.state.index === 0 }}
      // screenOptions={{ tabBarVisible: route.state?.index === 0 }}
      tabBarOptions={{
        showLabel: false,
        style: { height: DeviceInfo.hasNotch() ? 90 : 70 },
      }}
    >
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
