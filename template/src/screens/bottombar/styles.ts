import { StyleSheet } from 'react-native';
import { useScale } from 'react-native-utils-toolkit';

const {scale} = useScale;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: scale(20),
  },
  button: {
    marginVertical: scale(5),
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
