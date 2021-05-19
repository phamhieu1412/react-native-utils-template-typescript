import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import MainScreen from 'screens/bottombar';
import DropdownScreen from 'screens/home/components/dropdown';
import ProgressScreen from 'screens/home/components/progress';
import RecursiveScreen from 'screens/home/components/recursive';
import TextInputScreen from 'screens/home/components/textInput';
import TimerScreen from 'screens/home/components/timer';
import CountdownScreen from 'screens/home/components/countdown';

export const navigationRef: React.RefObject<NavigationContainerRef> =
  React.createRef();
const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Recursive" component={RecursiveScreen} />
        <Stack.Screen name="Timer" component={TimerScreen} />
        <Stack.Screen name="Countdown" component={CountdownScreen} />
        <Stack.Screen name="Progress" component={ProgressScreen} />
        <Stack.Screen name="Dropdown" component={DropdownScreen} />
        <Stack.Screen name="TextInput" component={TextInputScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default AppNavigator;
