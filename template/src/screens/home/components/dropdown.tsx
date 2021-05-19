import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { CDropdown } from 'react-native-utils-components';
import { dimensionsScale } from 'react-native-utils-scale';

export interface Props {
  name: string;
}

const TimerScreen: React.FC<Props> = _props => {
  const [dropdown, setDropdown] = useState(null);

  return (
    <View style={styles.container}>
      <CDropdown
        style={{ backgroundColor: '#F6F7F8' }}
        data={[
          { label: 'Item 1', value: '1' },
          { label: 'Item 2', value: '2' },
          { label: 'Item 3', value: '3' },
          { label: 'Item 4', value: '4' },
          { label: 'Item 5', value: '5' },
          { label: 'Item 6', value: '6' },
          { label: 'Item 7', value: '7' },
          { label: 'Item 8', value: '8' },
        ]}
        labelField="label"
        valueField="value"
        label="Title"
        placeholder="Select item"
        value={dropdown}
        onChange={item => {
          setDropdown(item);
          console.log('selected', item);
        }}
        textError="Error"
      />
    </View>
  );
};

export default TimerScreen;

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
