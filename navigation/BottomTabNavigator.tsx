// eslint-disable-next-line no-use-before-define
import * as React from 'react';
import { Button, SafeAreaView, Text } from 'react-native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import DeviceInfo from 'react-native-device-info';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import RNLocation from 'react-native-location';
import { getClient } from '../graphql/client';
import { useDriverQuery, useGetFrontendVersionQuery } from '../__generated__/graphql/datamodel.gen';
// const BottomTab = createBottomTabNavigator();
// const INITIAL_ROUTE_NAME = 'Home';

const SUCCESS_MESSAGE = 'LOGIN SUCCESSFULL';

const BottomTabNavigator: React.FC = () => {
  const [location, setLocation] = React.useState<Location[]>();
  const [updateDate, setUpdateDate] = React.useState();

  const setLocations = async (_locations) => {
    setLocation(_locations);
  };
  const navigation = useNavigation();
  const { data, loading, error } = useDriverQuery({
    client: getClient(),
    variables: {
      id: auth().currentUser?.uid,
      departureDateMin: '2000-01-01',
      departureDateMax: '2025-01-01',
    },
  });

  // const { data } = useGetFrontendVersionQuery({
  //   client: getClient(),
  // });

  console.log(`Data: ${JSON.stringify(data, null, 2)}`);
  console.log(`Loading: ${loading}`);
  console.log(`Error: ${error}`);
  RNLocation.requestPermission({
    ios: 'always',
    android: {
      detail: 'fine',
      rationale: {
        title: 'Necesitamos acceder a su ubicación',
        message: 'Usamos su ubicación para mostrare dónde está en el mapa.',
        buttonPositive: 'OK',
        buttonNegative: 'Cancelar',
      },
    },
  }).then(granted => {
    if (granted) {
      this.locationSubscription = RNLocation.subscribeToLocationUpdates(_locations => {
        console.log(`Location: ${JSON.stringify(_locations)}`);
        setLocations(_locations);
        setUpdateDate(Date.now);
        /* Example location returned
          {
            speed: -1,
            longitude: -0.1337,
            latitude: 51.50998,
            accuracy: 5,
            heading: -1,
            altitude: 0,
            altitudeAccuracy: -1
            floor: 0
            timestamp: 1446007304457.029,
            fromMockProvider: false
          }
          */
      });
    }
  });
  return (
    <SafeAreaView
      style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', paddingHorizontal: 20 }}
    >
      <Text>{SUCCESS_MESSAGE}</Text>
      <Text>{auth().currentUser?.uid}</Text>
      <Text>{auth().currentUser?.displayName}</Text>
      <Text>{data?.driver?.name}</Text>
      <Text>Date: {updateDate}</Text>
      <Text>{JSON.stringify(location)}</Text>
      <Button
        title="Signout Login"
        onPress={() => {
          auth().signOut();
          navigation.navigate('LoginRegisterScreen', { screen: 'Login' });
        }}
      />
    </SafeAreaView>
  );
};

export default BottomTabNavigator;
