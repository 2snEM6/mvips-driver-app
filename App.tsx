import React from 'react';
import { ApolloProvider, ApolloClient } from '@apollo/client';
import { AppState, AppStateStatus, StatusBar, StyleSheet, View } from 'react-native';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import {
  DefaultTheme,
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';
import { useGetFrontendVersionQuery } from './__generated__/graphql/datamodel.gen';
import { getClient, setupClient } from './graphql/client';
// import useLinking from './navigation/useLinking';
import LoginRegisterNavigator from './navigation/LoginRegisterNavigator';
import AppNavigator from './navigation/AppNavigator';
// import { SafeAreaProvider } from 'react-native-safe-area-context';
// import { PortalProvider, WhitePortal } from 'react-native-portal';
import { debug } from 'react-native-reanimated';

const FrontendVersion = () => {
  const { data } = useGetFrontendVersionQuery({
    client: getClient(),
  });

  return <View>{data?.getFrontendVersion.version}</View>;
};
const Stack = createNativeStackNavigator();

// eslint-disable-next-line no-underscore-dangle
// const _loggedIn = async () => {
//   return false;
//   /*
//   try {
//     if (auth().currentUser) {
//       const client = getClient();
//       const me = await client.query<MeQuery, MeQueryVariables>({
//         query: MeDocument,
//       });

//       if (me?.data?.me?.id) {
//         analytics().setAnalyticsCollectionEnabled(true);
//         analytics().setUserId(me.data.me.id);
//         return true;
//       }
//     }
//     return false;
//   } catch (e) {
//     return false;
//   }
//   */
// };
export default function App() {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  // const [graphqlClient, setGraphqlClient] = React.useState();
  const [graphqlClient, setGraphqlClient] = React.useState<ApolloClient<any>>();
  // const confettiAnimatonRef = React.useRef<LottieAnimation>();
  /*

  */
  
  // const [loggedIn, setLoggedIn] = React.useState(false);
  // const [appState, setAppState] = React.useState(AppState.currentState);

  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        console.log('Setting up GraphQL Client');
        // eslint-disable-next-line no-underscore-dangle
        const _graphqlclient = await setupClient();
        setGraphqlClient(_graphqlclient);
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.log(e);
      } finally {
        setLoadingComplete(true);
      }
    }
    loadResourcesAndDataAsync().then();
  }, []);

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
      <ApolloProvider client={graphqlClient as ApolloClient<any>}>
        <StatusBar barStyle="dark-content" />
        <NavigationContainer>
          <Stack.Navigator
            // initialRouteName={loggedIn ? 'Home' : 'LoginRegisterScreen'}
            initialRouteName="LoginRegisterScreen"
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
