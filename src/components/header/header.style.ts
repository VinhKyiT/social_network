import { AppTheme } from '~configs/AppTheme';
import { StyleSheet, Platform } from 'react-native';
import { scale, verticalScale } from '~utils/Scale';
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? verticalScale(60) : scale(0),
  },
  left: {
    flex: 1,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: scale(20),
  },
  right: {
    flex: 1,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: scale(20),
  },
  rightDotBadge: {
    position: 'absolute',
    top: 0,
    right: scale(20),
    width: scale(5),
    height: scale(5),
    borderRadius: scale(5),
    backgroundColor: AppTheme.Colors.Error,
  },
  title: {
    fontSize: scale(18),
    fontFamily: AppTheme.Fonts.Primary.SemiBold,
    color: AppTheme.Colors.TextBlack,
  },
  center: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subtitle: {
    fontSize: scale(14),
    fontFamily: AppTheme.Fonts.Primary.Regular,
    color: AppTheme.Colors.TextSecondary,
  },
});

export default styles;
