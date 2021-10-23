import * as React from 'react';
// import auth from '@react-native-firebase/auth';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { iOSUIKit } from 'react-native-typography';
import Config from '../../constants/Config';
import { Logo } from '../../components/Logo';
// import * as GraphQLClient from '../../graphql/client';
// import { MeDocument, MeQuery, MeQueryVariables } from '../../__generated__/graphql/datamodel.gen';
// import { SocialNetworkIdentifiers } from '../../constants/SocialNetworks';
// import Loading from '../../components/Loading';
import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },
  logoContainer: {
    width: '100%',
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButtonsContainer: {
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  loginButtonsGroup: {
    width: '100%',
    paddingBottom: 50,
    paddingTop: 50,
    alignItems: 'center',
    flexDirection: 'column',
  },
  socialIcon: {
    marginRight: 10,
  },
  loginButton: {
    width: '75%',
    height: 60,
    borderRadius: 8,
    margin: 5,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.12,
    shadowRadius: 13.46,
    elevation: 8,
  },
  instagramButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  snapchatButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFC00',
  },
  appleButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  phoneButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});
export default class LoginRegisterScreen extends React.Component<{ navigation: any }, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      buttonLoading: false,
    };
  }

  login = async (provider: 'apple') => {
    setTimeout(() => {
      this.setState({
        buttonLoading: true,
      });
    }, 1000);

    const { navigation } = this.props;

    // if (provider === 'instagram') {
    //   const loggedIn = await this.loginWithInstagram();
    //   console.log('instagram login', loggedIn);
    //   if (loggedIn) {
    //     const graphqlClient = await GraphQLClient.getClient();

    //     try {
    //       const loginResponse = await graphqlClient.query<MeQuery, MeQueryVariables>({
    //         query: MeDocument,
    //       });

    //       const user = loginResponse.data?.me;

    //       await graphqlClient.writeQuery({
    //         query: MeDocument,
    //         data: {
    //           me: {
    //             ...user,
    //           },
    //         },
    //       });

    //       return navigation.navigate('Home');
    //     } catch (error) {
    //       if (error.message === 'auth/not-authenticated') {
    //         return navigation.navigate('OnboardingScreen', {
    //           ...loggedIn,
    //           provider: SocialNetworkIdentifiers.instagram,
    //         });
    //       }
    //     }
    //   }
    // }

    // if (provider === 'snapchat') {
    //   const loggedIn = await this.loginWithSnapchat();
    //   if (loggedIn) {
    //     const graphqlClient = await GraphQLClient.getClient();
    //     const loginResponse = await graphqlClient.query<MeQuery, MeQueryVariables>({
    //       query: MeDocument,
    //     });

    //     const user = loginResponse.data?.me;

    //     if (!user) {
    //       return navigation.navigate('OnboadingScreen', {
    //         ...loggedIn,
    //         provider: SocialNetworkIdentifiers.snapchat,
    //       });
    //     }
    //     await graphqlClient.writeQuery({
    //       query: MeDocument,
    //       data: {
    //         me: {
    //           ...user,
    //         },
    //       },
    //     });

    //     return navigation.navigate('Home');
    //   }
    // }
  };

  // loginWithApple = async (): Promise<{ email: string; name: string } | undefined> => {
  //   // performs login request
  //   return undefined;
  //   /*
  //   try {
  //     const appleAuthRequestResponse = await appleAuth.performRequest({
  //       requestedOperation: appleAuth.Operation.LOGIN,
  //       requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
  //     });

  //     if (!appleAuthRequestResponse.identityToken) {
  //       throw new Error('Apple Sign-In failed - no identify token returned');
  //     }

  //     const { identityToken, nonce } = appleAuthRequestResponse;
  //     const appleCredential = auth.AppleAuthProvider.credential(identityToken, nonce);

  //     const credential = await auth().signInWithCredential(appleCredential);

  //     const hasAppleNameInfo = !!(appleAuthRequestResponse.fullName || {}).givenName;

  //     if (hasAppleNameInfo) {
  //       await auth().currentUser?.updateProfile({
  //         displayName: `${appleAuthRequestResponse.fullName?.givenName} ${appleAuthRequestResponse.fullName?.familyName}`,
  //       });
  //     }

  //     if (credential?.user) {
  //       const name: string = hasAppleNameInfo
  //         ? (`${appleAuthRequestResponse.fullName?.givenName} ${appleAuthRequestResponse.fullName?.familyName}` as string)
  //         : (auth().currentUser?.displayName as string);

  //       const email: string = appleAuthRequestResponse.email
  //         ? (appleAuthRequestResponse.email as string)
  //         : (auth().currentUser?.email as string);

  //       return {
  //         email,
  //         name,
  //       };
  //     }
  //     return undefined;
  //   } catch (err) {
  //     console.log('error logging in with apple', err);
  //     return undefined;
  //   }
  //   */
  // };

  onPressTermsAndConditions = () => {
    /*
    this.props.navigation.navigate('Webview', {
      uri: Config.LEGAL.TERMS_AND_CONDITIONS_URL,
      title: 'Terms & Conditions',
    });
    */
  };

  onPressPrivacyPolicy = () => {
    /*
    this.props.navigation.navigate('Webview', {
      uri: Config.LEGAL.PRIVACY_POLICY_URL,
      title: 'Privacy Policy',
    });
    */
  };

  render() {
    console.log('Pre return render LoginRegisterScreen');
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <View style={styles.logoContainer}>
            <Logo color="black" size={80} />
            {Config.ENVIRONMENT !== 'production' && (
              <>
                <Text>
                  Environment:
                  {Config.ENVIRONMENT}
                </Text>
                <Text>
                  API URL:
                  {Config.GRAPHQL_ENDPOINT}
                </Text>
              </>
            )}
          </View>

          <View style={styles.loginButtonsContainer}>
            <View style={styles.loginButtonsGroup}>
              {Config.ENVIRONMENT !== 'production' && (
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('LoginWithEmail')}
                  style={{ ...styles.loginButton, ...styles.phoneButton, marginTop: 10 }}
                >
                  <Text style={{ ...iOSUIKit.bodyEmphasizedObject }}>Login with email</Text>
                </TouchableOpacity>
              )}
            </View>
            <View style={styles.loginButtonsGroup}>
              {Config.ENVIRONMENT !== 'production' && (
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('LoginWithPhone')}
                  style={{ ...styles.loginButton, ...styles.phoneButton, marginTop: 10 }}
                >
                  <Text style={{ ...iOSUIKit.bodyEmphasizedObject }}>Login with phone number</Text>
                </TouchableOpacity>
              )}
            </View>
            <View style={{ paddingHorizontal: 40 }}>
              <Text
                style={{
                  ...iOSUIKit.bodyEmphasizedObject,
                  fontSize: 12,
                  lineHeight: 0,
                  textAlign: 'center',
                  color: Colors.gray,
                }}
              >
                <Text>By signing in, you confirm that you have read and agreed to our </Text>
                <Text
                  style={{ textDecorationLine: 'underline' }}
                  onPress={this.onPressTermsAndConditions}
                >
                  Terms & Conditions
                </Text>
                <Text> and our </Text>
                <Text
                  style={{ textDecorationLine: 'underline' }}
                  onPress={this.onPressPrivacyPolicy}
                >
                  Privacy Policy
                </Text>
              </Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
