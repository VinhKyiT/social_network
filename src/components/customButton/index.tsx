import React, { useCallback } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import { ICustomButtonProps } from './types';

const CustomButton: React.FC<ICustomButtonProps> = ({
  title,
  onPress,
  textStyle,
  containerStyle,
  disabled = false,
  leftIcon,
  outlined = false,
  fullWidth = false,
}) => {
  const noPress = useCallback(() => {}, []);
  return (
    <TouchableOpacity
      activeOpacity={!disabled ? 0.5 : 1}
      onPress={!disabled ? onPress : noPress}
      style={[
        styles.container,
        disabled && styles.containerDisabled,
        outlined && styles.containerOutlined,
        fullWidth && styles.fullWidth,
        containerStyle,
      ]}>
      {leftIcon && <View style={styles.leftIconView}>{leftIcon}</View>}
      {typeof title === 'string' ? (
        <Text style={[styles.text, outlined && styles.textOutlined, textStyle]}>
          {title}
        </Text>
      ) : (
        <>{title}</>
      )}
    </TouchableOpacity>
  );
};

export default React.memo(CustomButton);
