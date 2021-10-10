import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import LoginRegisterScreen from '../screens/LoginRegisterScreen';


const StackNavigator = createNativeStackNavigator();

const INITIAL_ROUTE_NAME = 'Login';

const LoginRegisterNavigator = ({ route }) => (
  <StackNavigator.Navigator
    headerMode="none"
    initialRouteName={INITIAL_ROUTE_NAME}
    screenOptions={{
      headerShown: false,
      gestureEnabled: false,
    }}
  >
    <StackNavigator.Screen component={LoginRegisterScreen} name="Login" />
  </StackNavigator.Navigator>
);

export default LoginRegisterNavigator;
