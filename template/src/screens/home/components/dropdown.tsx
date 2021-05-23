import { COLORS } from 'config';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { CDropdown } from 'react-native-utils-components';
import { useScale } from 'react-native-utils-toolkit';
import AntDesign from 'react-native-vector-icons/AntDesign';

const { scale } = useScale;
const data = [
  { label: 'Item 1', value: '1' },
  { label: 'Item 2', value: '2' },
  { label: 'Item 3', value: '3' },
  { label: 'Item 4', value: '4' },
  { label: 'Item 5', value: '5' },
  { label: 'Item 6', value: '6' },
  { label: 'Item 7', value: '7' },
  { label: 'Item 8', value: '8' },
];

export interface Props {
  name: string;
}

const TimerScreen: React.FC<Props> = _props => {
  const [dropdown, setDropdown] = useState(null);

  return (
    <View style={styles.container}>
      <CDropdown
        data={data}
        labelField="label"
        valueField="value"
        label="Title"
        placeholder="Select item"
        value={dropdown}
        onChange={item => {
          setDropdown(item);
          console.log('selected', item);
        }}
      />

      <CDropdown
        style={styles.dropdown2}
        data={data}
        labelField="label"
        valueField="value"
        label="Title"
        placeholder="Select item"
        value={dropdown}
        onChange={item => {
          setDropdown(item);
          console.log('selected', item);
        }}
        renderLeftIcon={() => (
          <AntDesign
            style={styles.icon}
            color="black"
            name="Safety"
            size={scale(20)}
          />
        )}
        renderTickIcon={() => (
          <AntDesign
            style={styles.icon}
            color="black"
            name="checkcircleo"
            size={scale(20)}
          />
        )}
        textError="Error"
      />

      <CDropdown
        style={styles.dropdown}
        labelStyle={{ color: COLORS.SECONDARY }}
        textStyle={{ color: COLORS.SECONDARY }}
        iconColor={COLORS.SECONDARY}
        textErrorStyle={{ color: COLORS.SECONDARY }}
        data={data}
        labelField="label"
        valueField="value"
        label="Title"
        placeholder="Select item"
        value={dropdown}
        renderLeftIcon={() => (
          <AntDesign
            style={styles.icon}
            color={COLORS.SECONDARY}
            name="Safety"
            size={scale(20)}
          />
        )}
        renderTickIcon={() => (
          <AntDesign
            style={styles.icon}
            color={COLORS.SECONDARY}
            name="checkcircleo"
            size={scale(20)}
          />
        )}
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
    padding: scale(20),
  },
  dropdown: {
    marginTop: scale(20),
    backgroundColor: 'white',
    borderRadius: scale(12),
    padding: scale(12),
  },
  dropdown2: {
    backgroundColor: 'transparent',
    borderBottomColor: 'gray',
    borderBottomWidth: scale(0.5),
    marginTop: scale(20),
  },
  icon: {
    marginRight: scale(5),
  },
});
