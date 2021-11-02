import React from 'react';
import { View, SafeAreaView, StyleSheet, TouchableOpacity, Text } from 'react-native';
import auth from '@react-native-firebase/auth';
import { ConfirmationResult } from '@react-native-firebase/auth';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
// import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { iOSUIKit } from 'react-native-typography';
import MVIPSButton from '../../components/MVIPSButton';
// import Colors from '../../constants/Colors';
import {
  EditableField,
  // FieldDescription,
  FieldsSectionLabel,
} from '../ProfileScreen/EditProfileScreen';
import { getClient } from '../../graphql/client';
import { DriverDocument, DriverQuery, DriverQueryVariables, useDriverQuery } from '../../__generated__/graphql/datamodel.gen';

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

const LoginWithPhone = () => {
  const navigation = useNavigation();
  const [phoneNumber, setPhoneNumber] = React.useState();
  const [confirmation, setConfirmation] = React.useState<ConfirmationResult>();
  const [verificationCode, setVerificationCode] = React.useState();
  const [isLoading, setLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(async user => {
      if (user) {
        // Obviously, you can add more statements here,
        //       e.g. call an action creator if you use Redux.

        // navigate the user away from the login screens:
        console.debug('Authenticated');
        console.debug(`User: ${user.uid}`);
        const graphqlClient = await getClient();
        try {
          const loginResponse = await graphqlClient.query<DriverQuery, DriverQueryVariables>({
            query: DriverDocument,
            fetchPolicy: 'no-cache',
            variables: {
              id: auth().currentUser?.uid,
              departureDateMin: '2000-01-01',
              departureDateMax: '2022-01-01',
            },
          });
          // const { data, loading, error } = await useDriverQuery({
          //   client: getClient(),
          //   variables: {
          //     id: auth().currentUser?.uid,
          //     departureDateMin: '2000-01-01',
          //     departureDateMax: '2022-01-01',
          //   },
          // });
          console.log('Driver name: ', loginResponse.data.driver?.name);
          // console.debug(loading);
          // console.debug(error);
        } catch (err) {
          console.error(err);
        } finally {
          console.debug('En LoginWithPhone finally');
        }
        navigation.navigate('Home');
      } else {
        console.debug('No logged in user');
        // reset state if you need to
        //navigation.navigate('Login');
      }
    });

    return () => {
      console.log('Removing listener app');
      unsubscribe();
    };
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.loginButtonsContainer}>
          <KeyboardAwareScrollView
            contentContainerStyle={{
              flexDirection: 'column',
              justifyContent: 'center',
              display: 'flex',
              flexGrow: 1,
            }}
          >
            <View style={styles.loginButtonsGroup}>
              <Text style={{ ...iOSUIKit.bodyEmphasizedObject }}>Login with phone number</Text>
            </View>
            <FieldsSectionLabel name="Phone" />
            <EditableField
              type="text-input"
              // value={phoneNumber}
              keyboardType="phone-pad"
              autoCompleteType="tel"
              placeholder="+34123456789"
              onChange={value => {
                setPhoneNumber(value?.toLowerCase().trim());
              }}
            />
            <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginTop: 20 }}>
              <MVIPSButton
                loading={isLoading}
                disabled={!phoneNumber}
                text="Login"
                theme="dark"
                size={1.2}
                onPress={async () => {
                  setLoading(true);
                  try {
                    console.log('Autenticando ' + phoneNumber);
                    const confirm = await auth().signInWithPhoneNumber(
                      (phoneNumber as unknown) as string,
                    );
                    // setConfirm(confirmation);
                    // console.log(confirmation);

                    if (confirm) {
                      console.log('En setConfirmation');
                      setConfirmation(confirm);
                      // try {
                      //   return navigation.navigate('VerifyCode', { confirmation });
                      // } catch (err) {
                      //   console.log('Error1: ' + err);
                      // } finally {
                      //   setLoading(false);
                      // }
                    }
                  } catch (err) {
                    console.log('Error2: ' + err);
                  } finally {
                    setLoading(false);
                  }
                }}
              />
            </View>

            <View style={styles.loginButtonsGroup}>
              <Text style={{ ...iOSUIKit.bodyEmphasizedObject }}>OTP Code</Text>
            </View>
            <FieldsSectionLabel name="OTP Code" />
            <EditableField
              type="text-input"
              // value={phoneNumber}
              disabled={!confirmation}
              keyboardType="number-pad"
              autoCompleteType="off"
              placeholder="6 digit code"
              onChange={value => {
                setVerificationCode(value?.toLowerCase().trim());
              }}
            />
            <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginTop: 20 }}>
              <MVIPSButton
                loading={isLoading}
                disabled={!verificationCode}
                text="Verify"
                theme="dark"
                size={1.2}
                onPress={async () => {
                  setLoading(true);
                  console.log('Verificando codigo ' + verificationCode);
                  if (confirmation) {
                    try {
                      await confirmation.confirm(verificationCode);
                      console.log('11111');
                      setConfirmation(null);
                    } catch (err) {
                      console.log('Error verficando code: ' + err);
                    } finally {
                      setLoading(false);
                    }
                  }
                }}
              />
            </View>
          </KeyboardAwareScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginWithPhone;
