import React from 'react';
import { ApolloProvider, ApolloClient } from '@apollo/client';
import { AppState, AppStateStatus, StatusBar, StyleSheet, View } from 'react-native';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { useGetFrontendVersionQuery } from './__generated__/graphql/datamodel.gen';
import { getClient, setupClient } from './graphql/client';
import {
  DefaultTheme,
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';
//import useLinking from './navigation/useLinking';
import LoginRegisterNavigator from './navigation/LoginRegisterNavigator';
import AppNavigator from './navigation/AppNavigator';
//import { SafeAreaProvider } from 'react-native-safe-area-context';
//import { PortalProvider, WhitePortal } from 'react-native-portal';
//import { debug } from 'react-native-reanimated';

const FrontendVersion = () => {
  const { data } = useGetFrontendVersionQuery({
    client: getClient()
  });


  return (
    <View>{data?.getFrontendVersion.version}</View>
  )
}
const Stack = createNativeStackNavigator();

const _loggedIn = async () => {
  return false;
  /*
  try {
    if (auth().currentUser) {
      const client = getClient();
      const me = await client.query<MeQuery, MeQueryVariables>({
        query: MeDocument,
      });

      if (me?.data?.me?.id) {
        analytics().setAnalyticsCollectionEnabled(true);
        analytics().setUserId(me.data.me.id);
        return true;
      }
    }
    return false;
  } catch (e) {
    return false;
  }
  */
};
export default function App() {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [initialNavigationState, setInitialNavigationState] = React.useState();
  //const [graphqlClient, setGraphqlClient] = React.useState();
  const [graphqlClient, setGraphqlClient] = React.useState<ApolloClient<any>>();
  const navigationContainerRef = React.useRef<NavigationContainerRef<any>>();
  //const confettiAnimatonRef = React.useRef<LottieAnimation>();
  /*
  const { getInitialState } = useLinking(
    navigationContainerRef as React.RefObject<NavigationContainerRef>,
  );
  */
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [appState, setAppState] = React.useState(AppState.currentState);

  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        console.log('Setting up GraphQL Client');
        const _graphqlclient = await setupClient();
        // @ts-ignore
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

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#f6f6f6',
    },
  };

  console.log('Before return');
  return (
    <>
      <StatusBar barStyle="dark-content" />
        <View style={styles.container}>
          <ApolloProvider client={graphqlClient as ApolloClient<any>}>
            <View style={styles.container}>
              <NavigationContainer
                theme={MyTheme}
                ref={navigationContainerRef}
                initialState={initialNavigationState}
              >
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
            </View>
          </ApolloProvider>
        </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
