/* eslint-disable react/jsx-one-expression-per-line */
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
  const [location, setLocation] = React.useState<Location>();
  const [updateDate, setUpdateDate] = React.useState<number>();

  const setLocations = async (_location: Location) => {
    setLocation(_location);
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

  React.useEffect(() => {
    console.log('Check location permission');
    RNLocation.requestPermission({
      // eslint-disable-next-line prettier/prettier
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
        console.log('Subscribing to location updates');
        const locationSubscription = RNLocation.subscribeToLocationUpdates(_locations => {
          console.log(`Location: ${JSON.stringify(_locations[0])}`);
          setLocations(_locations[0]);
          setUpdateDate(new Date(_locations[0]?.timestamp).toISOString());
        });
      }
    });
  }, []);
  return (
    <SafeAreaView
      style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', paddingHorizontal: 20 }}
    >
      <Text>{SUCCESS_MESSAGE}</Text>
      <Text>Auth uid: {auth().currentUser?.uid}</Text>
      <Text>Auth Display name: {auth().currentUser?.displayName}</Text>
      <Text>Driver name: {data?.driver?.name}</Text>
      <Text>Date: {updateDate}</Text>
      <Text>Location: {JSON.stringify(location)}</Text>
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
