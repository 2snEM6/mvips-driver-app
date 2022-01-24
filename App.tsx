/* eslint-disable react/jsx-pascal-case */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import { ApolloProvider, ApolloClient } from '@apollo/client';
import { AppState, AppStateStatus, StatusBar, View } from 'react-native';
import * as FlashMessage from 'react-native-flash-message';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { NavigationContainer, NavigationContainerRef } from '@react-navigation/native';
// import * as Location from 'expo-location';
import { isEqual } from 'lodash';
import auth from '@react-native-firebase/auth';
import { enableScreens } from 'react-native-screens';
import { iOSUIKit } from 'react-native-typography';
// import messaging from '@react-native-firebase/messaging';

import Colors from './constants/Colors';

import {
  useGetFrontendVersionQuery,
  useDriverQuery,
  Driver,
  DriverDocument,
  DriverQuery,
  DriverQueryVariables,
  // Location,
} from './__generated__/graphql/datamodel.gen';
import { getClient, setupClient } from './graphql/client';
import AppNavigator from './navigation/AppNavigator';
import LoginRegisterNavigator from './navigation/LoginRegisterNavigator';

// Q: qué hace esto?
enableScreens();

const Stack = createNativeStackNavigator();
// eslint-disable-next-line no-unused-vars
const globalErrorHandler = async (e: any, isFatal?: boolean): Promise<void> => {
  console.error('Caught unhandled error', e);
  if (auth().currentUser?.uid) {
    console.error('User id: ', auth().currentUser?.uid);
  }
  FlashMessage.showMessage({
    message: 'Oops 🙈 , something went wrong',
    backgroundColor: 'red',
    description: 'We are working on a fix, please try again later!',
    floating: true,
    autoHide: true,
    hideOnPress: true,
    duration: 3000,
    type: 'danger',
    color: Colors.tintColor,
    titleStyle: { ...iOSUIKit.bodyEmphasizedWhiteObject, fontSize: 18, fontWeight: '700' },
    textStyle: { ...iOSUIKit.bodyEmphasizedWhiteObject, fontSize: 15 },
  });
};

// eslint-disable-next-line no-undef
ErrorUtils.setGlobalHandler(globalErrorHandler);

// eslint-disable-next-line no-unused-vars
const _loggedIn = async () => {
  console.debug('_loggedIn: Start');
  try {
    console.debug(1); // TODO: REMOVE
    if (auth().currentUser) {
      console.debug(2); // TODO: REMOVE
      const me = useDriverQuery({
        client: getClient(),
      });
      console.debug(3); // TODO: REMOVE

      if (me?.data?.driver?.id) {
        console.debug(4); // TODO: REMOVE
        console.debug('_loggedIn: User loggedin\nDriver Name: ', me.data.driver.name);
      }
      return true;
    }
  } catch (e) {
    console.error(e);
  }
  console.debug('_loggedIn: User not loggedin');
  console.debug('_loggedIn: End');
  return false;
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function App() {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [graphqlClient, setGraphqlClient] = React.useState<ApolloClient<any>>();
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [appState, setAppState] = React.useState(AppState.currentState);
  // const navigationContainerRef = React.useRef<NavigationContainerRef>();
  // const { getInitialState } = useLinking(
  //   navigationContainerRef as React.RefObject<NavigationContainerRef>,
  // );
  const stateHandler = async (state: AppStateStatus) => {
    console.debug('stateHandler: Starting');
    console.debug(`stateHandler: state: ${state},`, `appState: ${appState}`);
    if (!isEqual(state, appState)) {
      console.debug('stateHandler: Updating appState');
      const __loggedIn = await _loggedIn();
      setAppState(state);
      setLoggedIn(__loggedIn);
    }
    console.debug('stateHandler: Ending stateHandler');
  };

  AppState.addEventListener('change', stateHandler);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    console.debug('Mounting app');
    async function requestPermissions() {
      console.debug('Requesting location and notification permissions');
      // await messaging().requestPermission();
      // await Location.requestPermissionsAsync();
    }
    async function loadResourcesAndDataAsync() {
      try {
        console.log('Setting up GraphQL Client');
        // eslint-disable-next-line no-underscore-dangle
        const _graphqlClient = await setupClient();
        setGraphqlClient(_graphqlClient);
        const __loggedIn = await _loggedIn();
        console.log(__loggedIn ? 'User is logged in' : 'User is not logged in');

        if (__loggedIn) {
          // Only request permissions if user is logged in
          console.debug('Request Permissions');
          await requestPermissions();
        }
        // setGraphqlClient(_graphqlClient);
        setLoggedIn(__loggedIn);
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.error(e);
      } finally {
        console.debug('Set loading complete');
        setLoadingComplete(true);
      }
    }
    loadResourcesAndDataAsync().then();
    return () => {
      console.log('Unmounting app');
      AppState.removeEventListener('change', stateHandler);
    };
  }, []);

  React.useEffect(() => {
    const handleAppStateChange = async () => {
      console.log('Handling App State Change');
      const updateLocation = async () => {
        console.log('Updating location');
        // const location = await Location.getCurrentPositionAsync();
        // return graphqlClient?.mutate<UpdateLocationMutation, UpdateLocationMutationVariables>({
        //   mutation: UpdateLocationDocument,
        //   variables: {
        //     latitude: location.coords.latitude,
        //     longitude: location.coords.longitude,
        //   },
        // });
      };

      // const saveFCMToken = (token: string) => {
      //   console.log('Updating FCM Token', token);
      //   // getClient().mutate<UpdateMeMutation, UpdateMeMutationVariables>({
      //   //   mutation: UpdateMeDocument,
      //   //   variables: {
      //   //     notificationsToken: token,
      //   //   },
      //   // });
      // };

      const __loggedIn = await _loggedIn();

      if (isLoadingComplete && appState === 'active' && __loggedIn) {
        // messaging()
        //   .getInitialNotification()
        //   .then(remotemessage => {
        //     if (remotemessage) {
        //       NotificationsManager.handle(remotemessage, navigationContainerRef);
        //     }
        //   });

        // messaging()
        //   .hasPermission()
        //   .then(enabled => {
        //     if (enabled) {
        //       messaging()
        //         .getToken()
        //         .then(token => {
        //           saveFCMToken(token);
        //         });
        //     } else {
        //       messaging()
        //         .requestPermission()
        //         .then(() => {
        //           messaging()
        //             .getToken()
        //             .then(token => {
        //               saveFCMToken(token);
        //             });
        //         });
        //     }
        //   });

        updateLocation();
      }
    };

    handleAppStateChange();
  }, [appState, isLoadingComplete]);

  if (!isLoadingComplete) {
    return null;
  }

  // const MyTheme = {
  //   ...DefaultTheme,
  //   colors: {
  //     ...DefaultTheme.colors,
  //     background: '#f6f6f6',
  //   },
  // };

  console.log('About to render');
  return (
    <>
      <ApolloProvider client={graphqlClient as ApolloClient<unknown>}>
        <StatusBar barStyle="dark-content" />
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName={loggedIn ? 'Home' : 'LoginRegisterScreen'}
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen
              name="LoginRegisterScreen"
              component={LoginRegisterNavigator}
              options={{ gestureEnabled: false }}
            />
            <Stack.Screen
              name="Home"
              component={AppNavigator}
              options={{ gestureEnabled: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ApolloProvider>
    </>
  );
}
