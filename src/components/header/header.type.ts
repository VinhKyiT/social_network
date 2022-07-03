import { StyleProp, TextStyle, ViewStyle } from 'react-native';

export interface HeaderProps {
  title: string | JSX.Element;
  subtitle?: string | JSX.Element;
  leftComponent?: JSX.Element;
  rightComponent?: JSX.Element;
  onLeftPress?: () => void;
  onRightPress?: () => void;
  style?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<ViewStyle | TextStyle>;
  subtitleStyle?: StyleProp<ViewStyle | TextStyle>;
  useDefaultButton?: boolean;
  hasRightDotBadge?: boolean;
}

declare function Header({
  title,
  subtitle,
  leftComponent,
  rightComponent,
  onLeftPress,
  onRightPress,
  style,
  titleStyle,
  subtitleStyle,
  useDefaultButton,
  hasRightDotBadge,
}: HeaderProps): JSX.Element;

export default Header;
