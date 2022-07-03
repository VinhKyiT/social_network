import { AppTheme } from '~configs/AppTheme';
import { verticalScale, scale } from '~utils/Scale';
import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    borderRadius: scale(12),
    width: scale(100),
    marginRight: scale(15),
    backgroundColor: '#DEF1FF',
  },
  gradient: {
    width: '100%',
    height: '100%',
    borderRadius: scale(12),
    zIndex: 1,
    position: 'absolute',
  },
  reelPreviewImage: {
    flex: 1,
  },
  reelNameText: {
    position: 'absolute',
    bottom: verticalScale(10),
    fontSize: scale(12),
    fontFamily: AppTheme.Fonts.Primary.Medium,
    color: '#fff',
    zIndex: 2,
    width: '100%',
    textAlign: 'center',
  },
  reelAuthorAvatar: {
    backgroundColor: '#DEF1FF',
    width: scale(36),
    height: scale(36),
    borderRadius: scale(20),
    borderColor: '#fff',
    borderWidth: 2,
    position: 'absolute',
    top: verticalScale(10),
    left: scale(10),
    zIndex: 3,
  },
});
export default styles;
