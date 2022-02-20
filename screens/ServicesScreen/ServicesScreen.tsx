/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-wrap-multilines */
import * as React from 'react';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import {
  Text,
  View,
  FlatList,
  ListRenderItemInfo,
  TouchableWithoutFeedback,
  RefreshControl,
} from 'react-native';
import { ListItem } from 'react-native-elements';
import { iOSUIKit } from 'react-native-typography';
import Colors from '../../constants/Colors';
import { getClient } from '../../graphql/client';
import { Services } from '../../types';
import { Service, useDriverQuery } from '../../__generated__/graphql/datamodel.gen';

type ServiceListItemProps = {
  item: Service;
  onPress: (serviceId: string) => any;
};

const ServiceListItem = (props: ServiceListItemProps) => {
  // const socialNetworks: React.ReactNode[] = [];

  const { item, onPress } = props;

  // eslint-disable-next-line no-underscore-dangle
  const _onPress = () => {
    onPress(item.id);
  };

  console.log('Item ID: ', item.id);
  return (
    <ListItem
      key={item.id}
      onPress={_onPress}
      Component={TouchableWithoutFeedback}
      title={
        <Text
          numberOfLines={1}
          style={{
            ...iOSUIKit.bodyEmphasizedObject,
            fontWeight: '700',
            fontSize: 20,
            width: 179,
            lineHeight: undefined,
          }}
        >
          {item.description}
        </Text>
      }
      leftAvatar={
        <View style={{ width: 60, height: 60, borderRadius: 65 / 2, overflow: 'hidden' }} />
      }
      rightElement={
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'center',
            opacity: 0.15,
          }}
        >
          {}
        </View>
      }
      subtitleStyle={{ color: 'black' }}
      subtitle={
        <Text
          style={{
            ...iOSUIKit.bodyEmphasizedObject,
            opacity: 0.2,
            width: 175,
            flex: 2 / 3,
            fontSize: 15,
          }}
        >
          Un texto
        </Text>
      }
      bottomDivider={false}
      containerStyle={{ flex: 1, paddingLeft: 20, paddingRight: 20 }}
    />
  );
};

const ServicesScreen: React.FC = () => {
  const navigation = useNavigation();
  const servicesQuery = useDriverQuery({
    client: getClient(),
  });
  const services: Service[] = servicesQuery?.data?.driver?.services || [];

  const loading = servicesQuery?.loading;

  const keyExtractorService = (item: Services[number]) => item.id;

  const showServicedModal = (serviceId: string) => {
    navigation.navigate('ServiceDetail', {
      serviceId,
    });
  };
  const onServicePressed = (serviceId: string) => {
    showServicedModal(serviceId);
  };
  const renderService = (item: ListRenderItemInfo<Service>) => {
    return <ServiceListItem key={item.item.id} item={item.item} onPress={onServicePressed} />;
  };
  const refetchServices = () => {
    servicesQuery?.refetch?.();
  };
  const ServicesListEmpty = () => {
    return (
      <View style={{ flex: 1 }}>
        <View
          pointerEvents="none"
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            top: 0,
            paddingLeft: 55,
            paddingRight: 55,
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 2,
          }}
        >
          <Text
            style={{
              ...(iOSUIKit.subheadEmphasized as any),
              lineHeight: 30,
              fontSize: 25,
              color: Colors.gray,
              textAlign: 'center',
            }}
          >
            You don't have any services yet
          </Text>
        </View>
      </View>
    );
  };

  useFocusEffect(
    React.useCallback(() => {
      servicesQuery.refetch();
    }, []),
  );

  console.log('About to render Services list');
  console.log('Services: ', services);
  return (
    <View>
      <Text>ABAJO la lista</Text>
      <FlatList
        ListEmptyComponent={ServicesListEmpty}
        refreshControl={
          <RefreshControl
            colors={['#9Bd35A', '#689F38']}
            refreshing={loading}
            onRefresh={refetchServices}
          />
        }
        contentContainerStyle={{ flexGrow: 1 }}
        style={{ width: '100%', paddingTop: 10 }}
        keyExtractor={keyExtractorService}
        data={services}
        renderItem={renderService}
      />
      <Text>ARRIBA la lista</Text>

      {/* <Text>{SUCCESS_MESSAGE}</Text>
      <Button
        title="Detail"
        onPress={() => {
          navigation.navigate('ServicesDetail');
        }}
      /> */}
    </View>
  );
};

export default React.memo(ServicesScreen);
