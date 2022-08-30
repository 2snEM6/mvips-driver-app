import React from 'react';
import { View, SafeAreaView, StyleSheet, Text } from 'react-native';
import auth from '@react-native-firebase/auth';
import { ConfirmationResult } from '@react-native-firebase/auth';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
// import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import * as Location from "expo-location";
import * as TaskManager from "expo-task-manager";
import { iOSUIKit } from 'react-native-typography';
import MVIPSButton from '../../components/MVIPSButton';
// import Colors from '../../constants/Colors';
import { EditableField, FieldsSectionLabel } from '../ProfileScreen/EditProfileScreen';
import { getClient } from '../../graphql/client';
import {
  DriverDocument,
  DriverQuery,
  DriverQueryVariables,
  // useDriverQuery,
} from '../../__generated__/graphql/datamodel.gen';

const LOCATION_TASK_NAME = "BACKGROUND_LOCATION_TASK";

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

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const LoginWithPhone = () => {
  const navigation = useNavigation();
  const [phoneNumber, setPhoneNumber] = React.useState();
  const [confirmation, setConfirmation] = React.useState<ConfirmationResult>();
  const [verificationCode, setVerificationCode] = React.useState();
  const [isLoading, setLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    // Start location tracking in background
    const startBackgroundUpdate = async () => {
      // Don't track position if permission is not granted
      const { granted } = await Location.getBackgroundPermissionsAsync();
      if (!granted) {
        console.log('Background location tracking denied');
        return;
      }

      // Make sure the task is defined otherwise do not start tracking
      const isTaskDefined = await TaskManager.isTaskDefined(LOCATION_TASK_NAME);
      if (!isTaskDefined) {
        console.log('Task is not defined');
        return;
      }

      // Don't track if it is already running in background
      const hasStarted = await Location.hasStartedLocationUpdatesAsync(LOCATION_TASK_NAME);
      if (hasStarted) {
        console.log('Already started');
        return;
      }

      await Location.startLocationUpdatesAsync(LOCATION_TASK_NAME, {
        // For better logs, we set the accuracy to the most sensitive option
        accuracy: Location.Accuracy.BestForNavigation,
        // Make sure to enable this notification if you want to consistently track in the background
        showsBackgroundLocationIndicator: true,
        foregroundService: {
          notificationTitle: 'Location',
          notificationBody: 'Location tracking in background',
          notificationColor: '#fff',
        },
      });
    };
    console.log(`BACGROUND UPDATE STARTED: ${startBackgroundUpdate}`);
  });

  React.useEffect(() => {
    // const unsubscribe = auth().un
    auth().onAuthStateChanged(async user => {
      if (user) {
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
          console.log('Driver name: ', loginResponse.data.driver?.name);
        } catch (err) {
          console.error(`Error fetching driver info ${err}`);
        } finally {
          console.debug('En LoginWithPhone finally');
        }
        navigation.navigate('Home');
      } else {
        console.debug('No logged in user');
        // reset state if you need to
        // navigation.navigate('Login');
      }
    });

    return () => {
      console.log('Removing listener app');
      //unsubscribe();
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
                    console.log(`Authenticating ${phoneNumber}`);
                    const confirm = await auth().signInWithPhoneNumber(
                      (phoneNumber as unknown) as string,
                    );
                    // setConfirm(confirmation);
                    // console.log(confirmation);

                    if (confirm) {
                      console.log('About to run setConfirmation');
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
                    console.log(`Error authenticating ${phoneNumber}: ${err}`);
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
                  console.log(`Verifying code ${verificationCode}`);
                  if (confirmation) {
                    try {
                      await confirmation.confirm(verificationCode);
                      setConfirmation(null);
                    } catch (err) {
                      console.log(`Error verifying code: ${err}`);
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
