/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-wrap-multilines */
import * as React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Button, Text, View } from 'react-native';

const SUCCESS_MESSAGE = 'LOGIN SUCCESSFULL';

const HomeScreen: React.FC = props => {
  const navigation = useNavigation();
  const { auth, data, updateDate, location } = props;
  return (
    <View>
      <Text>{SUCCESS_MESSAGE}</Text>
      <Text>Auth uid: {auth().uid}</Text>
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
    </View>
  );
};

export default React.memo(HomeScreen);
