/* eslint-disable react/jsx-one-expression-per-line */
// eslint-disable-next-line no-use-before-define
import * as React from 'react';
// import { Button, SafeAreaView, Text } from 'react-native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import DeviceInfo from 'react-native-device-info';
import auth from '@react-native-firebase/auth';
// import { useNavigation } from '@react-navigation/native';
import DeviceInfo from 'react-native-device-info';
import RNLocation from 'react-native-location';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { getClient } from '../graphql/client';
import { useDriverQuery } from '../__generated__/graphql/datamodel.gen';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import ServicesNavigator from './ServicesNavigator';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

const BottomTabNavigator: React.FC = () => {
  const [location, setLocation] = React.useState<Location>();
  const [updateDate, setUpdateDate] = React.useState<number>();

  const setLocations = async (_location: Location) => {
    setLocation(_location);
  };
  // const navigation = useNavigation();
  const { data, loading, error /* , refetch* */ } = useDriverQuery({
    client: getClient(),
    skip: !auth().currentUser?.uid,
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
    <BottomTab.Navigator
      initialRouteName={INITIAL_ROUTE_NAME}
      // screenOptions={{ tabBarVisible: navigation.state.index === 0 }}
      // screenOptions={{ tabBarVisible: route.state?.index === 0 }}
      // tabBarOptions={{
      //  showLabel: false,
      //  style: { height: DeviceInfo.hasNotch() ? 90 : 70 },
      // }}
    >
      <BottomTab.Screen
        name="Home"
        children={() => (
          <HomeScreen auth={auth} data={data} updateDate={updateDate} location={location} />
        )}
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcon
              name="Home"
              size={40}
              style={{ marginBottom: DeviceInfo.hasNotch() ? -15 : -3 }}
              color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Services"
        component={ServicesNavigator}
        options={({ route }) => ({
          title: 'Services',
          tabBarIcon: ({ focused }) => (
            <Feather
              name="service"
              size={37}
              style={{ marginBottom: DeviceInfo.hasNotch() ? -8 : 0 }}
              color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
            />
          ),
        })}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
