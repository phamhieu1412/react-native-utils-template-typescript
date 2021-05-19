import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { CTextInput } from 'react-native-utils-components';
import { dimensionsScale } from 'react-native-utils-scale';
const { scale } = dimensionsScale;

export interface Props {
  name: string;
}

const TextInputScreen: React.FC<Props> = props => {
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
    padding: dimensionsScale.scale(20),
  },
  btn: {
    width: dimensionsScale.scale(100),
    marginTop: dimensionsScale.scale(20),
  },
});
