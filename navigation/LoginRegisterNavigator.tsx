import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import LoginRegisterScreen from '../screens/LoginRegisterScreen';
import LoginWithEmail from '../screens/LoginRegisterScreen/LoginWithEmail';
import LoginWithPhone from '../screens/LoginRegisterScreen/LoginWithPhone';

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
    <StackNavigator.Screen component={LoginWithEmail} name="LoginWithEmail" />
    <StackNavigator.Screen component={LoginWithPhone} name="LoginWithPhone" />
  </StackNavigator.Navigator>
);

export default LoginRegisterNavigator;
