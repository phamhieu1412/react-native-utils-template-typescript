import { useNavigation } from '@react-navigation/native';
import { COLORS } from 'config';
import React, { useEffect } from 'react';
import { StyleSheet, TouchableOpacity, View, StatusBar } from 'react-native';
import { CurveBottomBar } from 'react-native-utils-navigation-bar';
import { dimensionsScale } from 'react-native-utils-scale';
import HomeScreen from 'screens/home';
import Ionicons from 'react-native-vector-icons/Ionicons';

export interface Props {}

const defaultProps = {
  appName: 'Wellcome hooks',
};

StatusBar.setBarStyle('dark-content');
const MainScreen: React.FC<Props> = ({ route }: any) => {
  const { goBack, navigate } = useNavigation();

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
        size={30}
        color={routeName === selectTab ? COLORS.PRIMARY : 'gray'}
      />
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <CurveBottomBar.Navigator
        height={60}
        circleWidth={60}
        bgColor="white"
        initialRouteName="title1"
        renderCircle={() => (
          <TouchableOpacity style={styles.btnCircle} onPress={() => {}}>
            <Ionicons name="chatbubbles-outline" size={30} />
          </TouchableOpacity>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: dimensionsScale.scale(20),
  },
  button: {
    marginVertical: dimensionsScale.scale(5),
  },
  btnCircle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    bottom: 40,
  },
  imgCircle: {
    width: 30,
    height: 30,
    tintColor: 'gray',
  },
  img: {
    width: 30,
    height: 30,
  },
});
