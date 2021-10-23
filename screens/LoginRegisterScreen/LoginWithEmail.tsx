import React from 'react';
import { View, SafeAreaView } from 'react-native';
import auth from '@react-native-firebase/auth';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
// import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import MVIPSButton from '../../components/MVIPSButton';
// import Colors from '../../constants/Colors';
import {
  EditableField,
  // FieldDescription,
  FieldsSectionLabel,
} from '../ProfileScreen/EditProfileScreen';
// import { getClient } from '../../graphql/client';
// import { SocialNetworkIdentifiers } from '../../constants/SocialNetworks';
// import { MeQuery, MeQueryVariables, MeDocument } from '../../__generated__/graphql/datamodel.gen';

const LoginWithEmail = () => {
  const navigation = useNavigation();
  const [email, setEmail] = React.useState();
  const [loading, setLoading] = React.useState<boolean>(false);

  return (
    <SafeAreaView
      style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', paddingHorizontal: 20 }}
    >
      <KeyboardAwareScrollView
        contentContainerStyle={{
          flexDirection: 'column',
          justifyContent: 'center',
          display: 'flex',
          flexGrow: 1,
        }}
      >
        <FieldsSectionLabel name="Email" />
        <EditableField
          type="text-input"
          value={email}
          keyboardType="email-address"
          autoCompleteType="email"
          placeholder="e.g: example@gmail.com"
          onChange={value => {
            setEmail(value?.toLowerCase().trim());
          }}
        />
        <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginTop: 20 }}>
          <MVIPSButton
            loading={loading}
            disabled={!email}
            text="Login"
            theme="dark"
            size={1.2}
            onPress={async () => {
              setLoading(true);
              try {
                console.log('Autenticando ' + email);
                const { user: fbUser } = await auth().signInWithEmailAndPassword(
                  (email as unknown) as string,
                  'qwerty',
                );
                console.log(fbUser);
                console.log('2222');

                if (fbUser) {
                  console.log(fbUser);
                  // const graphqlClient = await getClient();
                  try {
                    // const loginResponse = await graphqlClient.query<MeQuery, MeQueryVariables>({
                    //   query: MeDocument,
                    //   fetchPolicy: 'no-cache',
                    // });

                    // const user = loginResponse.data?.me;

                    // if (!user) {
                    //   return navigation.navigate('OnboardingScreen', {
                    //     ...fbUser,
                    //   });
                    // }
                    // await graphqlClient.writeQuery({
                    //   query: MeDocument,
                    //   data: {
                    //     me: {
                    //       ...user,
                    //     },
                    //   },
                    // });

                    return navigation.navigate('Home');
                  } catch (err) {
                    console.log('Error1: ' + err);
                    if (err.message === 'auth/not-authenticated') {
                      return navigation.navigate('OnboardingScreen', {
                        ...fbUser,
                        email: fbUser.email,
                      });
                    }
                    // TODO: Handle unknown error
                  } finally {
                    setLoading(false);
                  }
                }
              } catch (err) {
                console.log('Error2: ' + err);
                if (err.code === 'auth/user-not-found') {
                  return navigation.navigate('OnboardingScreen', {});
                }
              } finally {
                setLoading(false);
              }
            }}
          />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default LoginWithEmail;
