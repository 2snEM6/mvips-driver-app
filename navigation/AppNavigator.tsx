/* eslint-disable no-underscore-dangle */
import * as React from 'react';

import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { AppState, AppStateStatus } from 'react-native';
import BottomTabNavigator from './BottomTabNavigator';


const StackNavigator = createNativeStackNavigator();

const AppNavigator = () => {
  const [appState, setAppState] = React.useState<AppStateStatus>();

  const stateHandler = async (_state: AppStateStatus) => {
    setAppState(_state);
  };

  AppState.addEventListener('change', stateHandler);

  React.useEffect(() => {
    console.log('fetching', appState);
    if (appState === 'active') {
    }
  }, [appState]);

  return (
    <StackNavigator.Navigator
      initialRouteName="HomeApp"
      headerMode="none"
      mode="modal"
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}
    >
      <StackNavigator.Screen name="HomeApp" component={BottomTabNavigator} />
      <StackNavigator.Screen name="Test" component={BottomTabNavigator} />
    </StackNavigator.Navigator>
  );
};

export default AppNavigator;
