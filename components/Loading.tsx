import LottieAnimation from 'lottie-react-native';
import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';

interface LoadingProps {
  lottieAnimationRef?: any;
  type: 'bright' | 'dark';
  size?: number;
  style?: StyleProp<ViewStyle>;
}

const Loading = (props: LoadingProps) => {
  const type = props.type ? props.type : 'dark';
  const size = props.size ? props.size : 100;
  const { style } = props;
  if (type === 'bright') {
    return (
      <LottieAnimation
        // @ts-ignore
        style={style}
        ref={props.lottieAnimationRef}
        source={require('../assets/animations/loading/loader_1_bright.json')}
        loop
        autoPlay
        speed={0.65}
      />
    );
  }
  return (
    <LottieAnimation
      // @ts-ignore
      style={style}
      ref={props.lottieAnimationRef}
      source={require('../assets/animations/loading/loader_1_dark.json')}
      loop
      autoPlay
      speed={0.65}
    />
  );
};

export default Loading;
