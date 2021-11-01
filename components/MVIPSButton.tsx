/* eslint-disable no-nested-ternary */
import { Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import * as Animatable from 'react-native-animatable';
import { iOSUIKit } from 'react-native-typography';
import Colors from '../constants/Colors';
import Loading from './Loading';

export interface LynkButtonProps {
  onPress?: any;
  style?: any;
  text: string;
  size?: number;
  textStyle?: any;
  touchDisabled?: boolean;
  loading?: boolean;
  disabled?: boolean;
  visible?: boolean;
  theme?: 'dark' | 'light' | 'thin';
}

const MVIPSButton = (
  props: LynkButtonProps = {
    style: {},
    textStyle: {},
    size: 1 / 10,
    text: '',
    disabled: false,
    theme: 'dark',
    visible: true,
  },
) => {
  const {
    style,
    textStyle,
    size,
    touchDisabled,
    onPress,
    loading,
    text,
    disabled,
    theme,
    visible = true,
  } = props;

  const width = 60 * (size || 1 / 10);
  const height = width / 2;

  const Root = ({ children }) => {
    const commonStyles = {
      width,
      height,
      borderRadius: 90 / 2,
      borderWidth: theme === 'dark' || theme === 'thin' ? 0 : theme === 'light' ? 3 : 0,
      borderColor: 'white',
      backgroundColor:
        theme === 'dark' ? Colors.tintColor : theme === 'light' ? 'white' : 'transparent',
      justifyContent: 'center',
      alignItems: 'center',
      ...style,
    };

    const enabledStyles = {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.32,
      shadowRadius: 5.46,
      elevation: 9,
    };

    const disabledStyles = {
      backgroundColor: Colors.gray,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowOpacity: 0,
      shadowRadius: 0,
    };

    if (disabled) {
      return (
        <View opacity={0.2} style={{ ...commonStyles, ...disabledStyles, ...style }}>
          {children}
        </View>
      );
    }
    return (
      <TouchableOpacity
        // @ts-ignore
        style={{ ...commonStyles, ...(enabledStyles && theme !== 'thin'), ...style }}
        disabled={touchDisabled || !visible || false}
        onPress={onPress}
      >
        {children}
      </TouchableOpacity>
    );
  };

  const fontStyle =
    theme === 'thin' ? iOSUIKit.bodyEmphasizedWhiteObject : iOSUIKit.subheadEmphasizedWhiteObject;

  return (
    <Animatable.View animation={visible ? 'zoomIn' : 'zoomOut'} duration={200} useNativeDriver>
      <Root>
        {loading ? (
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              height: '420%',
              width: '420%',
            }}
          >
            <Loading type="dark" />
          </View>
        ) : (
          <Text
            style={{
              ...fontStyle,
              fontWeight: '800',
              color: theme === 'dark' ? 'white' : Colors.tintColor,
              ...textStyle,
            }}
          >
            {text}
          </Text>
        )}
      </Root>
    </Animatable.View>
  );
};

export default MVIPSButton;
