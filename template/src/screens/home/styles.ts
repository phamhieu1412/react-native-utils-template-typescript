import { COLORS } from 'config';
import { StyleSheet } from 'react-native';
import { dimensionsScale } from 'react-native-utils-scale';
const { scale } = dimensionsScale;

export const styles = StyleSheet.create({
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
