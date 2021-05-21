import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { CTextInput } from 'react-native-utils-components';
import { useScale } from 'react-native-utils-toolkit';

const { scale } = useScale;

export interface Props {
  name: string;
}

const TextInputScreen: React.FC<Props> = _props => {
  return (
    <View style={styles.container}>
      <CTextInput
        style={{ backgroundColor: '#F6F7F8' }}
        label="Normal"
        placeholder="Placeholder"
        placeholderTextColor="gray"
        textError="Error"
        onChangeText={() => {}}
      />

      <CTextInput
        style={{ backgroundColor: '#F6F7F8', marginTop: scale(10) }}
        label="Password"
        placeholder="Placeholder"
        placeholderTextColor="gray"
        secureTextEntry
        onChangeText={() => {}}
      />

      <CTextInput
        style={{ backgroundColor: '#F6F7F8', marginTop: scale(10) }}
        label="Currency"
        placeholder="Placeholder"
        placeholderTextColor="gray"
        currency
        unitCurrency="$"
        onChangeText={() => {}}
      />

      <CTextInput
        style={{ backgroundColor: '#F6F7F8', marginTop: scale(10) }}
        label="Numeric"
        placeholder="Placeholder"
        placeholderTextColor="gray"
        numeric
        onChangeText={() => {}}
      />
    </View>
  );
};

export default TextInputScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: scale(20),
  },
  btn: {
    width: scale(100),
    marginTop: scale(20),
  },
});
