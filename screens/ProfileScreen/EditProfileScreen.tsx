/* eslint-disable no-nested-ternary */
/* eslint-disable no-underscore-dangle */
import { DefaultTheme, useFocusEffect, useNavigation, useRoute } from '@react-navigation/native';
import * as React from 'react';
// import * as Haptics from 'expo-haptics';
import DeviceInfo from 'react-native-device-info';
// import { LinearGradient } from 'expo-linear-gradient';
// import url from 'url';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import {
  TouchableWithoutFeedback,
  View,
  Text,
  TextInput,
  TextInputProps,
  InputAccessoryView,
  Keyboard,
  Switch,
  // Linking,
  StatusBar,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { iOSUIKit } from 'react-native-typography';
// import { Icon } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
// import CookieManager from '@react-native-community/cookies';
// import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LynkButton from '../../components/MVIPSButton';
import { getClient } from '../../graphql/client';
// import {
//   SocialNetworkIdentifier,
//   useAddSocialNetworkMutation,
//   useBasicMeQuery,
//   useGetSocialNetworksQuery,
//   useMeQuery,
//   useUpdateMeMutation,
// } from '../../__generated__/graphql/datamodel.gen';
// import PicturesContainer from './PicturesContainer';
import Colors from '../../constants/Colors';
import StringUtils from '../../utils/string';
// import InstagramAuth from '../../auth/instagram';
import CustomMarkerTop from '../../components/CustomMarkerTop';

export const FieldsSectionDivider = () => <View style={{ marginTop: 10, marginBottom: 10 }} />;

export const FieldsSectionLabel = (props: { name: string; type?: 'big' | 'small' }) => {
  const { name, type = 'small' } = props;
  return (
    <Text
      style={{
        ...iOSUIKit.bodyEmphasizedObject,
        lineHeight: 0,
        color: type === 'big' ? Colors.tintColor : '#ababab',
        marginBottom: type === 'small' ? 10 : 70,
        marginLeft: type === 'small' ? 23.5 : 0,
        fontSize: type === 'small' ? 14 : 25,
        textAlign: type === 'small' ? 'left' : 'center',
      }}
    >
      {name}
    </Text>
  );
};

// export const FieldDescription = (props: { name: string }) => {
//   const { name } = props;
//   return (
//     <Text
//       style={{
//         ...iOSUIKit.bodyEmphasizedObject,
//         lineHeight: 0,
//         color: '#ababab',
//         marginBottom: 10,
//         marginLeft: 0,
//         fontSize: 12,
//         paddingLeft: 5,
//         paddingRight: 5,
//         textAlign: 'center',
//       }}
//     >
//       {name}
//     </Text>
//   );
// };

// const SectionDivider = () => <View style={{ marginBottom: 40 }} />;

type EditableFieldProps = Omit<Partial<TextInputProps>, 'onChange' | 'value'> & {
  type?:
  | 'text-input'
  | 'static'
  | 'info'
  | 'selected'
  | 'unselected'
  | 'showcase'
  | 'button'
  | 'switch'
  | 'link'
  | 'add'
  | 'inline-choose'
  | 'slider'
  | 'multi-slider';
  value?: any;
  children?: any;
  inputRef?: any;
  onDirty?: (dirty: boolean) => any;
  onChange?: (value: any) => any;
  onSave?: (value: any) => any;
  suffix?: string;
  inline?: boolean;
  danger?: boolean;
  secondaryText?: string;
  disabled?: boolean;
  inlineChooseValues?: string[];
  inlineChooseSelectedValue?: number;
  sliderStep?: number;
  sliderMin?: number;
  sliderMax?: number;
  sliderValues?: number[];
  onSliderMove?: () => any;
  onSliderStart?: () => any;
  onSliderFinish?: (values: any[]) => any;
  onInlineChooseSelected?: (index: number) => any;
  bodyStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  secondaryTextStyle?: StyleProp<TextStyle>;
  iconsColor?: string;
  bodyGradient?: {
    colors: string[];
    start?: number[];
    end?: number[];
    location?: number[];
  };
  leftIcon?: React.ReactNode;
};

export const EditableField: React.FC<EditableFieldProps> = (props: EditableFieldProps) => {
  const {
    inputRef,
    children,
    type = 'text-input',
    suffix,
    danger,
    secondaryText,
    disabled,
    inlineChooseValues = [],
    inlineChooseSelectedValue = 0,
    sliderMin = 0,
    sliderMax = 1,
    sliderValues = [0, 1],
    sliderStep = 1,
    onSliderMove,
    onSliderStart,
    onSliderFinish,
    onInlineChooseSelected,
    inline,
    bodyStyle,
    textStyle,
    secondaryTextStyle,
    iconsColor,
    bodyGradient,
    leftIcon,
  } = props;
  const { onChange, onFocus, ...textInputProps } = props;
  const [focused, setFocused] = React.useState(false);
  const [inlineChooseSelected, setInlineChooseSelected] = React.useState<number>(
    inlineChooseSelectedValue,
  );
  const LEFT_PADDING = 20;
  const RIGHT_PADDING = 0;

  const [_sliderValues, setSliderValues] = React.useState(sliderValues);

  const textBoxStyle = {
    ...iOSUIKit.bodyEmphasizedObject,
    fontSize: 20,
    color: '#606060',
    lineHeight: 0,
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: -LEFT_PADDING,
    paddingLeft: LEFT_PADDING,
    height: '100%',
  };

  if (type === 'inline-choose') {
    return (
      <Animatable.View
        animation="fadeIn"
        duration={200}
        style={{
          flexDirection: 'row',
          height: 50,
          borderRadius: 45,
          borderWidth: 3.5,
          borderColor: '#ebebeb',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 10.5,
          backgroundColor: 'white',
        }}
      >
        {inlineChooseValues.map((value, index) => {
          return (
            <TouchableWithoutFeedback
              key={value}
              style={{ backgroundColor: 'pink' }}
              onPress={() => {
                // Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
                setInlineChooseSelected(index);
                onInlineChooseSelected?.(index);
              }}
            >
              <Animatable.View
                animation="zoomIn"
                duration={200}
                style={{
                  flex: 1,
                  height: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: inlineChooseSelected === index ? Colors.tintColor : undefined,
                  paddingLeft: 10,
                  paddingRight: 10,
                  borderRadius: inlineChooseSelected === index ? 45 : undefined,
                }}
              >
                <Text
                  style={{
                    ...iOSUIKit.bodyEmphasizedObject,
                    fontSize: 20,
                    color: inlineChooseSelected === index ? 'white' : '#606060',
                    lineHeight: 0,
                  }}
                >
                  {value}
                </Text>
              </Animatable.View>
            </TouchableWithoutFeedback>
          );
        })}
      </Animatable.View>
    );
  }

  if (type === 'multi-slider' || type === 'slider') {
    return (
      <Animatable.View
        animation="fadeIn"
        duration={200}
        style={{
          flexDirection: 'column',
          height: 85,
          borderRadius: 10,
          borderWidth: 3.5,
          borderColor: '#ebebeb',
          backgroundColor: 'white',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          marginBottom: 10.5,
          paddingLeft: LEFT_PADDING,
          paddingRight: LEFT_PADDING,
          paddingTop: LEFT_PADDING / 2,
          paddingBottom: LEFT_PADDING / 2,
        }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-start',
            alignItems: 'center',
            marginBottom: 0,
          }}
        >
          <Text
            style={{
              ...iOSUIKit.bodyEmphasizedObject,
              lineHeight: 0,
              color: '#ababab',
              fontSize: 14,
            }}
          >
            {type === 'multi-slider'
              ? `Between ${_sliderValues[0]} and ${_sliderValues[1]}`
              : `Up to ${_sliderValues[0]} ${suffix}`}
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            width: '100%',
            justifyContent: 'center',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          {type === 'multi-slider' && (
            <MultiSlider
              step={sliderStep}
              onValuesChangeFinish={(values: any[]) => {
                onChange?.(values);
                onSliderFinish?.(values);
              }}
              onValuesChange={values => {
                onSliderMove?.();
                setSliderValues(values);
              }}
              onValuesChangeStart={() => {
                onSliderStart?.();
              }}
              customMarkerLeft={() => <CustomMarkerTop label={false} enabled pressed />}
              customMarkerRight={() => <CustomMarkerTop label={false} enabled pressed />}
              isMarkersSeparated
              snapped={false}
              markerOffsetY={2}
              allowOverlap={false}
              containerStyle={{
                flex: 1,
              }}
              selectedStyle={{
                backgroundColor: Colors.tintColor,
              }}
              trackStyle={{
                height: 5,
                backgroundColor: '#cccccc',
              }}
              min={sliderMin}
              max={sliderMax}
              values={sliderValues}
            />
          )}
          {type === 'slider' && (
            <MultiSlider
              step={sliderStep}
              onValuesChangeFinish={(values: any[]) => {
                onChange?.(values);
                onSliderFinish?.(values);
              }}
              onValuesChange={values => {
                onSliderMove?.();
                setSliderValues(values);
              }}
              onValuesChangeStart={() => {
                onSliderStart?.();
              }}
              selectedStyle={{
                backgroundColor: Colors.tintColorDarker,
              }}
              containerStyle={{
                flex: 1,
              }}
              trackStyle={{
                height: 5,
                backgroundColor: '#cccccc',
              }}
              min={sliderMin}
              max={sliderMax}
              markerOffsetY={2}
              customMarkerLeft={() => <CustomMarkerTop label={false} enabled pressed />}
              customMarkerRight={() => <></>}
              enabledTwo={false}
              isMarkersSeparated
              snapped={false}
              allowOverlap
              values={sliderValues}
            />
          )}
        </View>
      </Animatable.View>
    );
  }

  /*   const BodyViewWrapper = ({ children }: { children: React.ReactNode }) => {
      if (bodyGradient) {
        return (
          <View
            pointerEvents={disabled ? 'none' : 'auto'}
            style={[
              {
                opacity: disabled ? 0.5 : 1,
                height: type === 'showcase' ? 60 : 55,
                borderRadius: type === 'showcase' ? 15 : type === 'button' ? 50 : 10,
                borderWidth: 3.5,
                borderColor: focused ? '#cccccc' : type === 'showcase' ? Colors.tintColor : '#ebebeb',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingLeft: LEFT_PADDING,
                paddingRight: RIGHT_PADDING,
                marginBottom: 10.5,
                backgroundColor: 'white',
                ...(inline && { flex: 1 }),
              },
              bodyStyle,
            ]}
            {...bodyGradient}
          >
            {children}
          </View>
        );
      }
      return (
        <View
          pointerEvents={disabled ? 'none' : 'auto'}
          style={[
            {
              opacity: disabled ? 0.5 : 1,
              height: type === 'showcase' ? 60 : 55,
              borderRadius: type === 'showcase' ? 15 : type === 'button' ? 50 : 10,
              borderWidth: 3.5,
              borderColor: focused ? '#cccccc' : type === 'showcase' ? Colors.tintColor : '#ebebeb',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingLeft: LEFT_PADDING,
              paddingRight: RIGHT_PADDING,
              marginBottom: 10.5,
              backgroundColor: 'white',
              ...(inline && { flex: 1 }),
            },
            bodyStyle,
          ]}
        >
          {children}
        </View>
      );
    }; */

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        if (
          type === 'static' ||
          type === 'selected' ||
          type === 'unselected' ||
          type === 'button' ||
          type === 'link' ||
          type === 'add'
        ) {
          onFocus?.();
        }
      }}
    >
      <View
        pointerEvents={disabled ? 'none' : 'auto'}
        style={[
          {
            opacity: disabled ? 0.5 : 1,
            height: type === 'showcase' ? 60 : 55,
            borderRadius: type === 'showcase' ? 15 : type === 'button' ? 50 : 10,
            borderWidth: 3.5,
            borderColor: focused ? '#cccccc' : type === 'showcase' ? Colors.tintColor : '#ebebeb',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingLeft: LEFT_PADDING,
            paddingRight: RIGHT_PADDING,
            marginBottom: 10.5,
            backgroundColor: 'white',
            overflow: 'hidden',
            ...(inline && { flex: 1 }),
          },
          bodyStyle,
        ]}
      >
        {bodyGradient && (
          <View
            {...bodyGradient}
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
            }}
          />
        )}
        {type === 'text-input' && (
          <TextInput
            {...textInputProps}
            ref={inputRef}
            onFocus={e => {
              setFocused(true);
              props?.onFocus?.(e);
            }}
            onBlur={e => {
              setFocused(false);
              props?.onBlur?.(e);
            }}
            onChangeText={text => {
              onChange?.(text);
            }}
            autoCorrect={false}
            multiline={false}
            style={textBoxStyle}
            inputAccessoryViewID="uniqueID"
          />
        )}
        {leftIcon && <View style={{ marginRight: 10 }}>{leftIcon}</View>}
        {(type === 'static' ||
          type === 'info' ||
          type === 'selected' ||
          type === 'unselected' ||
          type === 'showcase' ||
          type === 'button' ||
          type === 'switch' ||
          type === 'link' ||
          type === 'add') && (
            <View
              style={{
                marginLeft: -LEFT_PADDING,
                paddingLeft: type === 'showcase' || type === 'button' ? undefined : LEFT_PADDING,
                flex: 1,
                flexGrow: 1,
                display: 'flex',
                height: '100%',
                justifyContent: type === 'button' || type === 'showcase' ? 'center' : 'space-between',
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <Text
                {...textInputProps}
                ref={inputRef}
                style={[
                  {
                    textAlignVertical: 'center',
                    ...iOSUIKit.bodyEmphasizedObject,
                    color: disabled
                      ? '#bbbbbb'
                      : type === 'showcase'
                        ? 'black'
                        : danger
                          ? 'red'
                          : type === 'button'
                            ? Colors.tintColor
                            : '#606060',
                    lineHeight: 0,
                    fontSize: type === 'showcase' ? 20 : 20,
                    textAlign: type === 'showcase' || type === 'button' ? 'center' : 'left',
                  },
                  textStyle,
                ]}
              >
                {children}
                {suffix && ` ${suffix}`}
              </Text>
              {secondaryText && (
                <Text
                  style={[
                    {
                      textAlignVertical: 'center',
                      ...iOSUIKit.subheadEmphasizedObject,
                      color: '#bbbbbb',
                      lineHeight: 0,
                      fontSize: 15,
                      textAlign: 'auto',
                      marginRight: 10,
                    },
                    secondaryTextStyle,
                  ]}
                >
                  {secondaryText}
                </Text>
              )}
            </View>
          )}
        {/* {type === 'static' && (
          <View style={{ paddingRight: 10 }}>
            <Icon name="chevron-right" type="entypo" color={iconsColor || '#ebebeb'} />
          </View>
        )}
        {type === 'selected' && (
          <View style={{ paddingRight: 15 }}>
            <Icon name="check" type="entypo" color={Colors.tintColor} />
          </View>
        )}
        {type === 'link' && (
          <View style={{ paddingRight: 15 }}>
            <Icon name="link" type="entypo" color={iconsColor || '#ebebeb'} />
          </View>
        )} */}
        {type === 'add' && (
          <View style={{ paddingRight: 15 }}>
            <Text
              style={[
                { ...iOSUIKit.bodyEmphasizedObject, color: '#bbbbbb', fontSize: 15 },
                secondaryTextStyle,
              ]}
            >
              + Add account
            </Text>
            {/* <Icon name="plus" type="entypo" color="#ebebeb" /> */}
          </View>
        )}
        {type === 'switch' && (
          <View style={{ paddingRight: 10 }}>
            <Switch
              onValueChange={value => {
                // Haptics.selectionAsync();
                onChange?.(value);
              }}
              value={props.value || false}
              trackColor={{
                true: Colors.tintColor,
                false: Colors.tintColor,
              }}
            />
          </View>
        )}
        {/* {false && (
          <View
            style={{
              position: 'absolute',
              right: 0,
              bottom: 0,
              top: 0,
              justifyContent: 'center',
            }}
          >
            <LynkButton
              theme="dark"
              disabled={!dirty}
              size={1}
              text="Save"
              onPress={() => {
                console.log('hiiii');
                if (type === 'text-input') {
                  onSave?.(inputValue);
                }
              }}
            />
          </View>
        )} */}
      </View>
    </TouchableWithoutFeedback>
  );
};

export const Header = ({
  children,
  title,
  secondary,
  closable,
  onGoBack,
  onDone,
  dark,
  modal,
  donable,
  bordered,
  transparent,
}: {
  bordered?: boolean;
  children?: any;
  title?: string;
  secondary?: boolean;
  closable?: boolean;
  dark?: boolean;
  onGoBack?: () => void;
  modal?: boolean;
  donable?: boolean;
  transparent?: boolean;
  onDone?: () => any;
}) => (
  <>
    <View
      style={{
        borderTopStartRadius: bordered ? 20 : undefined,
        borderTopEndRadius: bordered ? 20 : undefined,
        backgroundColor: dark ? Colors.tintColor : transparent ? 'transparent' : 'white',
        height: modal ? 60 : '8%',
        borderBottomWidth: dark ? 0 : 2,
        borderBottomColor: '#ebebeb',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: secondary || closable ? 'center' : 'space-between',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 15,
        width: '100%',
      }}
    >
      {(secondary || closable) && (
        <TouchableOpacity
          onPress={() => {
            onGoBack?.();
          }}
          containerStyle={{
            position: 'absolute',
            left: 0,
            height: '100%',
            width: '25%',
            justifyContent: 'flex-start',
            alignItems: 'center',
            flexDirection: 'row',
          }}
        >
          {/* <Icon
            name={secondary ? 'chevron-left' : 'cross'}
            type="entypo"
            color={dark ? 'white' : 'black'}
            containerStyle={{ marginLeft: 15 }}
          /> */}
        </TouchableOpacity>
      )}
      <Text
        style={{
          ...iOSUIKit.bodyEmphasizedObject,
          fontSize: 20,
          lineHeight: 0,
          color: dark ? 'white' : 'black',
        }}
      >
        {title}
      </Text>
      {donable && (
        <LynkButton
          size={1}
          text="Done"
          theme={dark ? 'light' : 'dark'}
          onPress={() => {
            onDone?.();
          }}
        />
      )}
      {children}
    </View>
  </>
);

const EditProfileScreen = ({ route }) => {
  const navigation = useNavigation();
  const inputAccessoryViewID = 'uniqueID';
  // const initialText = 'Placeholder Text';

  // const safeAreaInsets = useSafeAreaInsets();

  const [fields, setFields] = React.useState<{ [key: string]: { focused: boolean; value: any } }>(
    {},
  );

  const [fieldBeingEdited, setFieldBeingEdited] = React.useState<any>();
  const [isDragging, setIsDragging] = React.useState(false);
  const scrollViewRef = React.useRef();
  const inputNameRef = React.useRef();
  // const [addSocialNetwork] = useAddSocialNetworkMutation({
  //   client: getClient(),
  // });

  // const basicMeQuery = useBasicMeQuery({
  //   client: getClient(),
  // });

  // const socialNetworksQuery = useGetSocialNetworksQuery({
  //   client: getClient(),
  // });

  // const [updateMe] = useUpdateMeMutation({
  //   client: getClient(),
  // });
  // const basicMe = basicMeQuery?.data?.me;
  // const socialNetworks = socialNetworksQuery?.data?.me;

  // React.useEffect(() => {
  //   if (basicMe) {
  //     setFields({
  //       name: {
  //         focused: false,
  //         value: basicMe?.name,
  //       },
  //       age: {
  //         focused: false,
  //         value: basicMe?.age,
  //       },
  //     });
  //   }
  // }, [basicMe]);

  const _setFocused = (fieldName: string, focused: boolean) => {
    setFields({
      ...fields,
      [fieldName]: {
        ...(fields[fieldName] || {}),
        focused,
      },
    });
  };

  const onFocus = (fieldName: string) => {
    setTimeout(() => {
      _setFocused(fieldName, true);
      setFieldBeingEdited(fieldName);
    }, 800);
  };

  const onBlur = (fieldName: string) => {
    setTimeout(() => {
      _setFocused(fieldName, false);
      setFieldBeingEdited(false);
    }, 800);
  };

  const onChange = (fieldName: string, value: any) => {
    setFields({
      ...fields,
      [fieldName]: {
        ...(fields[fieldName] || {}),
        value,
      },
    });
  };

  const resetField = (fieldName: string = fieldBeingEdited) => {
    // setFields({
    //   ...fields,
    //   [fieldName]: {
    //     value: basicMe[fieldName],
    //     focused: false,
    //   },
    // });
    setFieldBeingEdited(undefined);
  };

  const onSave = () => {
    if (fieldBeingEdited) {
      const value =
        fieldBeingEdited === 'name'
          ? fields[fieldBeingEdited].value.trim()
          : fields[fieldBeingEdited].value;

      // updateMe({
      //   variables: {
      //     [fieldBeingEdited]: value,
      //   },
      // });
      setFieldBeingEdited(undefined);
      Keyboard.dismiss();
    }
  };

  const onCancel = () => {
    // resetField();
    // refetch?.();
    Keyboard.dismiss();
  };

  // const isEditing = (): boolean => !!fieldBeingEdited;

  // useFocusEffect(() => {
  //   if (route?.params?.instagramUsername) {
  //     addSocialNetwork({
  //       variables: {
  //         identifier: SocialNetworkIdentifier.Instagram,
  //         username: route.params.instagramUsername,
  //       },
  //     });

  //     navigation.setParams({
  //       instagramUsername: undefined,
  //     });
  //   }

  //   if (route?.params?.snapchatUsername) {
  //     addSocialNetwork({
  //       variables: {
  //         identifier: SocialNetworkIdentifier.Snapchat,
  //         username: route.params.snapchatUsername,
  //       },
  //     });
  //     navigation.setParams({
  //       snapchatUsername: undefined,
  //     });
  //   }
  // });

  return (
    // <SafeAreaView
    //   style={{
    //     flex: 1,
    //     backgroundColor: 'white',
    //   }}
    //   edges={['left', 'right', 'top']}
    // >
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#6a51ae" />
      <Header title="Edit profile" secondary={false}>
        <LynkButton
          visible={!isEditing()}
          theme="dark"
          text="Done"
          size={1}
          style={{ marginRight: 0 }}
          onPress={() => {
            navigation.goBack();
          }}
        />
      </Header>
      {/* <SafeAreaView
        style={{
          paddingBottom: DeviceInfo.hasNotch() ? safeAreaInsets.bottom : safeAreaInsets.bottom + 40,
          backgroundColor: DefaultTheme.colors.background,
        }}
        edges={['bottom', 'left', 'right']}
      > */}
      <View>
        <KeyboardAwareScrollView
          // @ts-ignore
          canCancelContentTouches
          ref={scrollViewRef}
          contentContainerStyle={{
            flexDirection: 'column',
            justifyContent: 'flex-start',
            display: 'flex',
            flexGrow: 1,
          }}
          extraScrollHeight={50}
          keyboardShouldPersistTaps={isEditing() ? 'always' : 'never'}
          scrollEnabled={!isEditing() && !isDragging}
          style={{ backgroundColor: DefaultTheme.colors.background }}
        >
          {/* <PicturesContainer
            onDragging={(dragging: boolean) => {
              setIsDragging(dragging);
            }}
          /> */}

          <View
            style={{
              paddingTop: 20,
              paddingBottom: 20,
              paddingLeft: 20,
              paddingRight: 20,
            }}
          >
            <FieldsSectionLabel name="Social Media" />

            <EditableField
              type={
                socialNetworks?.associatedSocialNetworks.find(
                  asn => asn.identifier === SocialNetworkIdentifier.Instagram,
                )
                  ? 'static'
                  : 'add'
              }
              bodyGradient={Colors.instagramLinearGradientExpoConfig}
              textStyle={{
                color: 'white',
              }}
              bodyStyle={{
                borderColor: 'white',
              }}
              secondaryTextStyle={{ color: 'white' }}
              iconsColor="white"
              leftIcon={<FontAwesome name="instagram" size={25} color="white" />}
              onFocus={async () => {
                if (
                  socialNetworks?.associatedSocialNetworks.find(
                    asn => asn.identifier === SocialNetworkIdentifier.Instagram,
                  )
                ) {
                  navigation.navigate('EditSocialmedia', {
                    socialMediaIdentifier: SocialNetworkIdentifier.Instagram,
                  });
                } else {
                  navigation.navigate('GenericTextInputScreen', {
                    label: 'Set your Instagram username',
                    parent: 'EditProfile',
                    callbackPropName: 'instagramUsername',
                  });
                }
              }}
            >
              {socialNetworks?.associatedSocialNetworks.find(
                asn => asn.identifier === SocialNetworkIdentifier.Instagram,
              )
                ? socialNetworks?.associatedSocialNetworks.find(
                  asn => asn.identifier === SocialNetworkIdentifier.Instagram,
                )?.username
                : 'Instagram'}
            </EditableField>
            <EditableField
              type={
                socialNetworks?.associatedSocialNetworks.find(
                  asn => asn.identifier === SocialNetworkIdentifier.Snapchat,
                )
                  ? 'static'
                  : 'add'
              }
              leftIcon={<FontAwesome name="snapchat" size={25} color="black" />}
              bodyStyle={{
                backgroundColor: Colors.snapchat.primary,
                borderColor: Colors.snapchat.secondary,
              }}
              textStyle={{
                color: Colors.snapchat.secondary,
              }}
              secondaryTextStyle={{ color: 'black' }}
              iconsColor={Colors.snapchat.secondary}
              onFocus={() => {
                if (
                  socialNetworks?.associatedSocialNetworks.find(
                    asn => asn.identifier === SocialNetworkIdentifier.Snapchat,
                  )
                ) {
                  navigation.navigate('EditSocialmedia', {
                    socialMediaIdentifier: SocialNetworkIdentifier.Snapchat,
                  });
                } else {
                  navigation.navigate('GenericTextInputScreen', {
                    label: 'Set your Snapchat username',
                    parent: 'EditProfile',
                    callbackPropName: 'snapchatUsername',
                  });
                }
              }}
            >
              {socialNetworks?.associatedSocialNetworks.find(
                asn => asn.identifier === SocialNetworkIdentifier.Snapchat,
              )
                ? socialNetworks?.associatedSocialNetworks.find(
                  asn => asn.identifier === SocialNetworkIdentifier.Snapchat,
                )?.username
                : 'Snapchat'}
            </EditableField>

            <FieldsSectionDivider />
            <FieldsSectionLabel name="Basic information" />
            <EditableField
              autoCapitalize="words"
              autoCorrect={false}
              maxLength={20}
              inputRef={inputNameRef}
              onFocus={() => {
                onFocus('name');
              }}
              onBlur={() => {
                onBlur('name');
              }}
              returnKeyType="done"
              onChange={(value: any) => {
                if (value) {
                  const hasSurnames = (value as string)?.trim().split(' ')?.length > 1;

                  const isFirstNameTooLong = !hasSurnames
                    ? (value as string).trim().length > 10
                    : false;

                  if (!isFirstNameTooLong) {
                    onChange(
                      'name',
                      (value as string).replace(/(?:^|\s)\S/g, (a: string) => {
                        return a.toUpperCase();
                      }),
                    );
                  }
                } else {
                  onChange('name', undefined);
                }
              }}
              value={fields?.name?.value}
            />
            <EditableField
              // onFocus={() => {
              //   navigation.navigate('EditAge');
              // }}
              secondaryText="Can't be modified"
              suffix="years old"
              type="info"
              value={fields?.age?.value?.toString()}
            >
              {basicMe?.age?.toString()}
            </EditableField>

            <FieldsSectionLabel name="Gender" />
            <EditableField
              onFocus={() => {
                navigation.navigate('EditGender');
              }}
              type="static"
            >
              {StringUtils.capitalizeFirstLetter(basicMe?.gender?.toLowerCase())}
            </EditableField>
            {/* <SectionDivider/>
                    <FieldsSectionLabel name={'Basic information'}/> */}
          </View>
        </KeyboardAwareScrollView>

        {/* <InputAccessory viewId={inputAccessoryViewID} onCancel={onCancel} onSave={onSave} /> */}
        <InputAccessoryView nativeID={inputAccessoryViewID}>
          <View
            style={{
              backgroundColor: 'white',
              height: 50,
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'center',
              borderBottomWidth: 1,
              borderTopWidth: 1,
              borderColor: '#ebebeb',
              paddingLeft: 20,
              paddingRight: 20,
            }}
          >
            <Text
              style={{
                ...iOSUIKit.bodyEmphasizedObject,
                color: '#888888',
              }}
              onPress={() => {
                onCancel();
              }}
            >
              Cancel
            </Text>
            <Text
              style={{
                ...iOSUIKit.bodyEmphasizedObject,
                color: Colors.tintColor,
              }}
              onPress={() => {
                onSave();
              }}
            >
              Save
            </Text>
          </View>
        </InputAccessoryView>
        {/* </SafeAreaView>
    </SafeAreaView> */}
      </View>
    </>
  );
};

export default EditProfileScreen;
