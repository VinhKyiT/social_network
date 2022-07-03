import { scale, verticalScale } from '~utils/Scale';
import { StyleSheet } from 'react-native';
import { AppTheme } from '~configs/AppTheme';

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: AppTheme.Colors.BackgroundColor,
    paddingHorizontal: scale(20),
  },
  searchInputContainer: {
    height: verticalScale(50),
    borderRadius: scale(12),
    borderColor: AppTheme.Colors.Border,
    borderWidth: 1,
    backgroundColor: '#fff',
    marginVertical: verticalScale(20),
  },
  searchInput: {
    flex: 1,
    height: verticalScale(50),
  },
  postInputContainer: {
    height: verticalScale(50),
    borderRadius: scale(12),
    borderColor: '#DFDFDF',
    borderWidth: 1,
    width: '70%',
  },
  postInput: {
    flex: 1,
    height: verticalScale(50),
    paddingHorizontal: scale(10),
  },
  searchIcon: {
    padding: scale(10),
  },
  reelList: {
    height: verticalScale(130),
    width: AppTheme.Dimensions.windowWidth,
  },
  postBtnWrapper: {
    marginTop: verticalScale(20),
    flexDirection: 'row',
    width: AppTheme.Dimensions.windowWidth - scale(40),
    height: verticalScale(50),
    justifyContent: 'space-between',
  },
  postBtnContainer: {
    backgroundColor: AppTheme.Colors.Primary,
    height: '100%',
    width: '25%',
    borderRadius: scale(15),
  },
  postOptionWrapper: {
    marginTop: verticalScale(20),
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: scale(15),
    paddingVertical: verticalScale(15),
  },
  postOptionItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  postOptionItemText: {
    fontSize: scale(14),
    fontFamily: AppTheme.Fonts.Primary.Medium,
    color: AppTheme.Colors.TextBlack,
    marginLeft: scale(10),
  },
  postListContainer: {
    flexGrow: 1,
  },
});

export default styles;
