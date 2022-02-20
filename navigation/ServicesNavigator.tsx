import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import ServicesScreen from '../screens/ServicesScreen/ServicesScreen';
import ServiceDetailScreen from '../screens/ServicesScreen/ServiceDetailScreen';

const StackNavigator = createNativeStackNavigator();

const INITIAL_ROUTE_NAME = 'ServicesList';

const ServicesNavigator = ({ route }) => (
  <StackNavigator.Navigator
    headerMode="none"
    initialRouteName={INITIAL_ROUTE_NAME}
    screenOptions={{
      headerShown: false,
      gestureEnabled: false,
    }}
  >
    <StackNavigator.Screen component={ServicesScreen} name="ServicesList" />
    <StackNavigator.Screen component={ServiceDetailScreen} name="ServiceDetail" />
  </StackNavigator.Navigator>
);

export default ServicesNavigator;
