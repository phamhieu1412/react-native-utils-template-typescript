import { CButton } from 'components';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { CTimer } from 'react-native-utils-components';
import { useScale } from 'react-native-utils-toolkit';

const { scale } = useScale;

export interface Props {
  name: string;
}

const DropdownScreen: React.FC<Props> = _props => {
  const [start, setStart] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      <CTimer start={start} onTimes={() => {}} onEnd={() => {}} />
      <CButton
        style={styles.button}
        title={start ? 'Stop' : 'Start'}
        onPress={() => {
          setStart(!start);
        }}
      />
    </View>
  );
};

export default DropdownScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: scale(20),
  },
  button: {
    marginVertical: scale(30),
    backgroundColor: 'white',
    borderRadius: scale(24),
    width: scale(100),
    height: scale(50),
  },
});
