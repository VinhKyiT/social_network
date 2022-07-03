import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { HeaderProps } from './header.type';
import styles from './header.style';
import Feather from 'react-native-vector-icons/Feather';
import { scale } from '~utils/Scale';
import { AppTheme } from '~configs/AppTheme';

const Header = ({
  title,
  subtitle,
  style,
  leftComponent,
  rightComponent,
  onLeftPress,
  onRightPress,
  useDefaultButton,
  hasRightDotBadge,
}: HeaderProps) => {
  return (
    <View style={[styles.container, style]}>
      {useDefaultButton ? (
        <>
          <TouchableOpacity style={styles.left} onPress={onLeftPress}>
            <Feather
              name="menu"
              size={scale(24)}
              color={AppTheme.Colors.TextBlack}
            />
          </TouchableOpacity>
          <View style={styles.center}>
            <Text style={styles.title}>{title}</Text>
            {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
          </View>
          <TouchableOpacity style={styles.right} onPress={onRightPress}>
            <Feather
              name="bell"
              size={scale(24)}
              color={AppTheme.Colors.TextBlack}
            />
            {hasRightDotBadge && <View style={styles.rightDotBadge} />}
          </TouchableOpacity>
        </>
      ) : (
        <>
          <TouchableOpacity style={styles.left} onPress={onLeftPress}>
            {leftComponent}
          </TouchableOpacity>
          <View style={styles.center}>
            <Text style={styles.title}>{title}</Text>
            {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
          </View>
          <TouchableOpacity style={styles.right} onPress={onRightPress}>
            {rightComponent}
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

export default Header;
