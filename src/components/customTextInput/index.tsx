import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import { AppTheme } from '~configs/AppTheme';
import styles from './styles';
import { ICustomTextInputProps } from './types';

const CustomTextInput: React.FC<ICustomTextInputProps> = ({
  placeholder = 'Enter something...',
  title,
  rightTitleComponent,
  leftTitleComponent,
  rightInputComponent,
  leftInputComponent,
  onChangeText,
  value,
  secureTextEntry = false,
  keyboardType = 'default',
  autoCapitalize = 'sentences',
  autoCorrect = false,
  multiline = false,
  maxLength,
  containerStyle,
  inputStyle,
  titleStyle,
  errorMessage,
  readonly = false,
  dismissErrorWhenEditing = false,
  onBlur,
  styleError,
  ...rest
}) => {
  const [errorMsg, setErrorMsg] = useState<string | undefined>(errorMessage);
  const handleTextChange = (text: string) => {
    onChangeText(text);
    if (dismissErrorWhenEditing) {
      setErrorMsg(undefined);
    }
  };

  return (
    <>
      <View style={[styles.container, containerStyle]}>
        <View style={styles.titleWrapper}>
          {leftTitleComponent}
          {title && <Text style={[styles.title, titleStyle]}>{title}</Text>}
          {rightTitleComponent}
        </View>
        <View style={styles.inputWrapper}>
          {leftInputComponent}
          <TextInput
            value={value?.toString()}
            onChangeText={handleTextChange}
            placeholderTextColor={AppTheme.Colors.TextSecondary}
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
            keyboardType={keyboardType}
            autoCapitalize={autoCapitalize}
            autoCorrect={autoCorrect}
            multiline={multiline}
            maxLength={maxLength}
            style={[styles.inputStyle, inputStyle]}
            editable={!readonly}
            onBlur={onBlur}
            {...rest}
          />
          {rightInputComponent}
        </View>
      </View>
      {errorMessage && (
        <Text style={[styles.errorMessage, styleError]}>{errorMsg}</Text>
      )}
    </>
  );
};

export default React.memo(CustomTextInput);
