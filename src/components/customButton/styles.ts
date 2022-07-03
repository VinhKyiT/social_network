import { StyleSheet } from 'react-native';
import { AppTheme } from '~configs/AppTheme';
import { scale } from '~utils/Scale';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AppTheme.Colors.Primary,
    borderRadius: 8,
    flexDirection: 'row',
  },
  containerDisabled: {
    backgroundColor: AppTheme.Colors.ButtonInactive,
  },
  containerOutlined: {
    backgroundColor: 'transparent',
    borderColor: AppTheme.Colors.Primary,
    borderWidth: 2,
  },
  text: {
    color: AppTheme.Colors.TextWhite,
    fontFamily: AppTheme.Fonts.Primary.Bold,
    fontSize: scale(16),
  },
  textOutlined: {
    color: AppTheme.Colors.Primary,
  },
  leftIconView: {
    paddingHorizontal: scale(10),
  },
  fullWidth: { width: '100%' },
});
export default styles;
