/* eslint-disable react/jsx-pascal-case */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import { ApolloProvider, ApolloClient } from '@apollo/client';
import { AppState, AppStateStatus, StatusBar, View } from 'react-native';
import * as FlashMessage from 'react-native-flash-message';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { isEqual } from 'lodash';
import auth from '@react-native-firebase/auth';
import { enableScreens } from 'react-native-screens';
import { iOSUIKit } from 'react-native-typography';
import messaging from '@react-native-firebase/messaging';

import Colors from './constants/Colors';

import {
  useGetFrontendVersionQuery,
  useDriverQuery,
  Driver,
  DriverDocument,
  DriverQuery,
  DriverQueryVariables,
  Location,
} from './__generated__/graphql/datamodel.gen';
import { getClient, setupClient } from './graphql/client';
import AppNavigator from './navigation/AppNavigator';
import LoginRegisterNavigator from './navigation/LoginRegisterNavigator';

// Q: qué hace esto?
enableScreens();

const Stack = createNativeStackNavigator();
// eslint-disable-next-line no-unused-vars
const globalErrorHandler = async (e: any, isFatal?: boolean): Promise<void> => {
  console.log('Caught unhandled error', e);
  // await crashlytics().recordError(e);
  if (isFatal) {
    // await crashlytics().setAttribute('isFatal', 'true');
  }
  if (auth().currentUser?.uid) {
    // await crashlytics().setUserId(auth().currentUser?.uid as string);
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
  console.log('En _loggedIn');
  try {
    if (auth().currentUser) {
      return true;
      // Get DRIVER <-- uncomment all and make it work
      // const client = getClient();
      // const me = await client.query<DriverQuery, DriverQueryVariables>({
      //   query: DriverDocument,
      // });

      // if (me?.data?.driver?.id) {
      //   // analytics().setAnalyticsCollectionEnabled(true);
      //   // analytics().setUserId(me.data.me.id);
      //   return true;
      // }
    }
    return false;
  } catch (e) {
    return false;
  }
};

// const getDriver = useDriverQuery({
//   client: getClient(),
// });

// const FrontendVersion = () => {
//   const { data } = useGetFrontendVersionQuery({
//     client: getClient(),
//   });

//   return <View>{data?.getFrontendVersion.version}</View>;
// };

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function App() {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [graphqlClient, setGraphqlClient] = React.useState<ApolloClient<any>>();
  // const confettiAnimatonRef = React.useRef<LottieAnimation>();
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [appState, setAppState] = React.useState(AppState.currentState);

  const stateHandler = async (state: AppStateStatus) => {
    console.debug('En stateHandler');
    console.debug(`state: ${state}`);
    console.debug(`appState: ${appState}`);
    if (!isEqual(state, appState)) {
      console.debug('En stateHandler ejecutando');
      const __loggedIn = await _loggedIn();
      setAppState(state);
      setLoggedIn(__loggedIn);
      console.debug(`LoggedIn: ${__loggedIn}`);
    }
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
          await requestPermissions();
        }
        setGraphqlClient(_graphqlClient);
        setLoggedIn(__loggedIn);
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.log(e);
      } finally {
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

      const saveFCMToken = (token: string) => {
        console.log('Updating FCM Token', token);
        // getClient().mutate<UpdateMeMutation, UpdateMeMutationVariables>({
        //   mutation: UpdateMeDocument,
        //   variables: {
        //     notificationsToken: token,
        //   },
        // });
      };

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

  console.log('Before return');
  return (
    <>
      <ApolloProvider client={graphqlClient as ApolloClient<unknown>}>
        <StatusBar barStyle="dark-content" />
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName={loggedIn ? 'Home' : 'LoginRegisterScreen'}
            // initialRouteName="LoginRegisterScreen"
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
            {/*
                    <Stack.Screen
                    name="UpgradeScreen"
                    component={UpgradeScreen}
                    options={() => ({
                      cardOverlayEnabled: true,
                      gestureEnabled: false,
                      headerShown: false,
                      gestureResponseDistance: {
                        vertical: 1000,
                      },
                      ...TransitionPresets.ModalSlideFromBottomIOS,
                    })}
                  />
                  */}
          </Stack.Navigator>
        </NavigationContainer>
      </ApolloProvider>
    </>
  );
}
