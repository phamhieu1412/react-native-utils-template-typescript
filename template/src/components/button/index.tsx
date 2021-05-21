import { COLORS } from 'config';
import React from 'react';
import { Text, TouchableOpacity, ViewStyle } from 'react-native';
import { useScale } from 'react-native-utils-toolkit';
import { styles } from './styles';
const { scale } = useScale;

interface Props {
  title?: string;
  textColor?: string;
  bgColor?: string;
  style?: ViewStyle;
  fontSize?: number | any;
  onPress?: () => void;
  border?: boolean;
}

const defaultProps = {
  bgColor: '',
  style: {},
  textColor: '',
  fontSize: null,
  border: false,
  onPress: () => {},
};

const ButtonComponent: React.FC<Props> = props => {
  const {
    fontSize,
    bgColor,
    style,
    textColor,
    title,
    onPress,
    border = false,
  } = props;
  if (border) {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={[
          styles.container,
          {
            borderColor:
              textColor === '' ? COLORS.BUTTON_TEXT_COLOR : textColor,
            borderWidth: scale(0.4),
          },
          style,
        ]}>
        <Text
          style={[
            styles.text,
            {
              color: textColor === '' ? COLORS.BUTTON_TEXT_COLOR : textColor,
            },
            fontSize && { fontSize: scale(fontSize) },
          ]}>
          {title}
        </Text>
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        { backgroundColor: bgColor === '' ? COLORS.BUTTON : bgColor },
        style,
      ]}>
      <Text
        style={[
          styles.text,
          { color: textColor === '' ? COLORS.BUTTON_TEXT_COLOR : textColor },
          fontSize && { fontSize: scale(fontSize) },
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

ButtonComponent.defaultProps = defaultProps;

export default ButtonComponent;
