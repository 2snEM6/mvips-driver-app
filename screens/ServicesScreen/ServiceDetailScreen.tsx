/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-wrap-multilines */
import * as React from 'react';
// import { useNavigation } from '@react-navigation/native';

import { Text, View } from 'react-native';

const MESSAGE = 'EN DETAIL SCREEN';

const ServiceDetailScreen: React.FC = props => {
  // const navigation = useNavigation();
  const { serviceId } = props;
  console.log('*************************************************************');
  return (
    <View>
      <Text>{MESSAGE}</Text>
      <Text>{serviceId}</Text>
    </View>
  );
};

export default ServiceDetailScreen;
