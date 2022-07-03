import { StyleProp, ViewStyle, TextStyle } from 'react-native';
export interface ICustomButtonProps {
  title: string | JSX.Element | React.ReactNode;
  onPress: () => void;
  textStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  disabled?: boolean;
  leftIcon?: any;
  outlined?: boolean;
  fullWidth?: boolean;
}
