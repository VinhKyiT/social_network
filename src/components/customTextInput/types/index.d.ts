import { TextInputProps } from './../../../../node_modules/@types/react-native/index.d';
import { StyleProp, ViewStyle, TextStyle } from 'react-native';
export class ICustomTextInputProps implements TextInputProps {
  placeholder?: string;
  title?: string | JSX.Element;
  rightTitleComponent?: React.ReactNode | JSX.Element | React.ReactElement;
  leftTitleComponent?: React.ReactNode | JSX.Element | React.ReactElement;
  rightInputComponent?: React.ReactNode | JSX.Element | React.ReactElement;
  leftInputComponent?: React.ReactNode | JSX.Element | React.ReactElement;
  onChangeText: (text: string) => void;
  value: string | undefined;
  secureTextEntry?: boolean;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  autoCorrect?: boolean;
  multiline?: boolean;
  maxLength?: number;
  containerStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  titleStyle?: StyleProp<TextStyle>;
  errorMessage?: string;
  readonly?: boolean;
  dismissErrorWhenEditing?: boolean;
  onBlur?: () => void | undefined;
  styleError?: StyleProp<ViewStyle>;
}
