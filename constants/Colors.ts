const tintColor = '#0e35de';
const tintColorDarker = '#0b2cc6';
const complementary = '#0DDE8E';
const instagramGradientColorArray = ['#f09433', '#e6683c', '#dc2743', '#cc2366', '#bc1888'];
const instagramLinearGradientExpoConfig = {
  start: [0, 0.5],
  end: [1, 1.5],
  colors: instagramGradientColorArray,
};

export default {
  tintColor,
  tintColorDarker,
  complementary,
  instagramLinearGradientExpoConfig,
  instagramGradientColorArray,
  lightGray: '#d7d7d7',
  gray: '#c1c1c1',
  tabIconDefault: '#ccc',
  tabIconSelected: tintColor,
  tabBar: '#fefefe',
  errorBackground: 'red',
  errorText: '#fff',
  warningBackground: '#EAEB5E',
  warningText: '#666804',
  noticeBackground: tintColor,
  noticeText: '#fff',
  snapchat: {
    primary: '#FFFC00',
    secondary: '#000000',
  },
};
