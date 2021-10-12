import * as React from 'react';
import { Text, View } from 'react-native';
import { iOSUIKit } from 'react-native-typography';
// @ts-ignore
// import DefaultMarker from '@ptomasroos/react-native-multi-slider/DefaultMarker';
import Colors from '../constants/Colors';

const CustomMarkerTop = (props: {
  enabled: boolean;
  pressed: boolean;
  currentValue: number;
  valueSuffix?: string;
  label?: boolean;
}) => {
  const { label = true } = props;

  return (
    <View>
      <View
        style={{ height: 25, width: 25, borderRadius: 30, backgroundColor: Colors.tintColor }}
      />
      {/* <DefaultMarker {...props} /> */}
      {label && (
        <View
          style={{
            position: 'absolute',
            bottom: 10,
            width: 150,
            justifyContent: 'center',
            alignItems: 'flex-start',
          }}
        >
          <Text
            adjustsFontSizeToFit={false}
            style={{
              textAlign: 'center',
              // @ts-ignore
              ...iOSUIKit.largeTitleEmphasizedWhite,
              fontWeight: '800',
              fontSize: 25,
            }}
          >
            {props.valueSuffix ? `${props.currentValue} ${props.valueSuffix}` : props.currentValue}
          </Text>
        </View>
      )}
    </View>
  );
};

export default CustomMarkerTop;
