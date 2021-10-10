/* eslint-disable import/prefer-default-export */
import { Text } from 'react-native';
import { iOSUIKit } from 'react-native-typography';
import React from 'react';

interface LogoProps {
  color?: string;
  size?: string;
}

export const Logo = props => {
  let { color, size } = props;
  if (!color) color = 'white';
  if (size) {
    const value = size;
    size = { fontSize: value };
  }
  return (
    <Text
      {...props}
      style={{ ...iOSUIKit.largeTitleEmphasizedObject, lineHeight: undefined, color, ...size }}
    >
      MVIPS
    </Text>
  );
};
