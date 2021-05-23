import { COLORS } from 'config';
import React, { useState } from 'react';
import {
  StatusBar,
  TouchableOpacity,
  View,
  Animated,
  Easing,
} from 'react-native';
import { CurveBottomBar } from 'react-native-utils-navigation-bar';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from 'screens/home';
import { styles } from './styles';
import { useDetectDevice, useScale } from 'react-native-utils-toolkit';

const { scale } = useScale;
const { width: w, height: h, hasNotch } = useDetectDevice;

export interface Props {}

const defaultProps = {
  appName: 'Wellcome hooks',
};

StatusBar.setBarStyle('dark-content');
const MainScreen: React.FC<Props> = _props => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [bottom] = useState(new Animated.Value(scale(40)));
  const [width] = useState(new Animated.Value(scale(70)));
  const [height] = useState(new Animated.Value(scale(70)));

  const onAnimatedButton = () => {
    Animated.timing(width, {
      toValue: isVisible ? scale(70) : scale(250),
      duration: 200,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start(() => {});

    Animated.timing(bottom, {
      toValue: isVisible ? scale(40) : h - scale(hasNotch ? 150 : 80),
      duration: 200,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start(() => {});
    Animated.timing(height, {
      toValue: isVisible ? scale(70) : h / 2,
      duration: 200,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start(() => {});
    setIsVisible(!isVisible);
  };

  const _renderIcon = (routeName: string, selectTab: string) => {
    let icon = '';

    switch (routeName) {
      case 'title1':
        icon = 'ios-home-outline';
        break;
      case 'title2':
        icon = 'apps-outline';
        break;
      case 'title3':
        icon = 'bar-chart-outline';
        break;
      case 'title4':
        icon = 'person-outline';
        break;
    }

    return (
      <Ionicons
        name={icon}
        size={25}
        color={routeName === selectTab ? COLORS.PRIMARY : 'gray'}
      />
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <CurveBottomBar.Navigator
        height={scale(60)}
        circleWidth={!isVisible ? scale(60) : scale(200)}
        bgColor="white"
        initialRouteName="title1"
        renderCircle={() => (
          <Animated.View
            style={[styles.btnCircle, { bottom: bottom, width, height }]}>
            <TouchableOpacity
              style={{
                flex: 1,
                alignSelf: isVisible ? 'flex-start' : 'center',
                justifyContent: isVisible ? 'flex-start' : 'center',
              }}
              onPress={onAnimatedButton}>
              <Ionicons
                name={isVisible ? 'close' : 'chatbubbles-outline'}
                size={scale(25)}
              />
            </TouchableOpacity>
          </Animated.View>
        )}
        tabBar={({ routeName, selectTab, navigation }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation(routeName)}
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              {_renderIcon(routeName, selectTab)}
            </TouchableOpacity>
          );
        }}>
        <CurveBottomBar.Screen
          name="title1"
          position="left"
          component={() => <HomeScreen />}
        />
        <CurveBottomBar.Screen
          name="title2"
          component={() => (
            <View
              style={{ backgroundColor: COLORS.BACKGROUND_COLOR, flex: 1 }}
            />
          )}
          position="left"
        />
        <CurveBottomBar.Screen
          name="title3"
          component={() => (
            <View
              style={{ backgroundColor: COLORS.BACKGROUND_COLOR, flex: 1 }}
            />
          )}
          position="right"
        />
        <CurveBottomBar.Screen
          name="title4"
          component={() => (
            <View
              style={{ backgroundColor: COLORS.BACKGROUND_COLOR, flex: 1 }}
            />
          )}
          position="right"
        />
      </CurveBottomBar.Navigator>
    </View>
  );
};

MainScreen.defaultProps = defaultProps;

export default MainScreen;
