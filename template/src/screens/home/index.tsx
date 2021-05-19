import { useNavigation } from '@react-navigation/native';
import { CButton } from 'components';
import React from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { styles } from './styles';
export interface Props {}

const MainScreen: React.FC<Props> = _props => {
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
export default MainScreen;
