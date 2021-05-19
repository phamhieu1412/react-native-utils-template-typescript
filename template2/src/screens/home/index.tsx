import { useNavigation } from '@react-navigation/native';
import { CButton } from 'components';
import { COLORS } from 'config';
import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { dimensionsScale } from 'react-native-utils-scale';
const { scale } = dimensionsScale;

export interface Props {
  appName?: string;
}

const defaultProps = {
  appName: 'Wellcome hooks',
};

const MainScreen: React.FC<Props> = ({ route }: any) => {
  const { goBack, navigate } = useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView>
        <CButton
          style={styles.button}
          title="Tree checkbox"
          onPress={() => {
            navigate('Recursive');
          }}
        />

        <CButton
          style={styles.button}
          title="Timer"
          onPress={() => {
            navigate('Timer');
          }}
        />

        <CButton
          style={styles.button}
          title="Countdown"
          onPress={() => {
            navigate('Countdown');
          }}
        />

        <CButton
          style={styles.button}
          title="Progress"
          onPress={() => {
            navigate('Progress');
          }}
        />

        <CButton
          style={styles.button}
          title="Dropdown"
          onPress={() => {
            navigate('Dropdown');
          }}
        />

        <CButton
          style={styles.button}
          title="TextInput"
          onPress={() => {
            navigate('TextInput');
          }}
        />
      </ScrollView>
    </View>
  );
};

MainScreen.defaultProps = defaultProps;

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: scale(20),
    backgroundColor: COLORS.BACKGROUND_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
  },
  main: {},
  button: {
    marginVertical: scale(5),
    backgroundColor: 'white',
    borderRadius: scale(24),
    width: scale(200),
  },
});
