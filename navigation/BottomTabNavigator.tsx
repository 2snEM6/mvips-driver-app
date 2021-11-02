import * as React from 'react';
import { Button, SafeAreaView, Text } from 'react-native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import DeviceInfo from 'react-native-device-info';
import auth from '@react-native-firebase/auth';
import { getClient } from '../graphql/client';
import { useNavigation } from '@react-navigation/native';
import { useDriverQuery, useGetFrontendVersionQuery } from '../__generated__/graphql/datamodel.gen';
// const BottomTab = createBottomTabNavigator();
// const INITIAL_ROUTE_NAME = 'Home';

const SUCCESS_MESSAGE = 'LOGIN SUCCESSFULL';

const BottomTabNavigator: React.FC = () => {
  const navigation = useNavigation();
  const { data, loading, error } = useDriverQuery({
    client: getClient(),
    variables: {
      id: auth().currentUser?.uid,
      departureDateMin: '2000-01-01',
      departureDateMax: '2022-01-01',
    },
  });

  // const { data } = useGetFrontendVersionQuery({
  //   client: getClient(),
  // });

  console.log('Data: ' + data);
  console.log(loading);
  console.log(error);
  console.log('333');
  return (
    <SafeAreaView
      style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', paddingHorizontal: 20 }}
    >
      <Text>{SUCCESS_MESSAGE}</Text>
      <Text>{auth().currentUser?.uid}</Text>
      <Text>{auth().currentUser?.displayName}</Text>
      <Text>{data?.driver?.name}</Text>
      <Button
        title="Signout Login"
        onPress={() => {
          auth().signOut();
          navigation.navigate('LoginRegisterScreen', {screen: 'Login'});
        }}
      />
    </SafeAreaView>
  );
};

export default BottomTabNavigator;
