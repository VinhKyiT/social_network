import { AppTheme } from '~configs/AppTheme';
import { verticalScale, scale } from '~utils/Scale';
import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    marginTop: verticalScale(20),
    backgroundColor: '#fff',
    marginHorizontal: scale(20),
    borderRadius: scale(12),
    padding: scale(15),
  },
  postHeaderWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  authorInformation: {
    flexDirection: 'row',
  },
  authorAvatar: {
    width: scale(40),
    height: scale(40),
    borderRadius: scale(25),
    backgroundColor: '#DEF1FF',
  },
  authorNameWrapper: {
    justifyContent: 'space-between',
    marginLeft: scale(15),
  },
  textAuthorName: {
    fontSize: scale(14),
    fontFamily: AppTheme.Fonts.Primary.Medium,
    color: AppTheme.Colors.TextBlack,
  },
  textTimeToNow: {
    fontSize: scale(12),
    fontFamily: AppTheme.Fonts.Primary.Regular,
    color: AppTheme.Colors.TextSecondary,
  },
  postContentWrapper: {
    marginTop: verticalScale(20),
  },
  postContent: {
    marginBottom: verticalScale(20),
  },
  textPostContent: {
    fontSize: scale(14),
    fontFamily: AppTheme.Fonts.Primary.Regular,
    color: AppTheme.Colors.TextBlack,
  },
  postMediaWrapper: {},
  postMedia: {
    width: '100%',
    height: verticalScale(200),
    borderRadius: scale(12),
  },
  statisticCountWrapper: {
    flexDirection: 'row',
    marginTop: verticalScale(10),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  reactionCount: {
    flexDirection: 'row',
  },
  textReactionCount: {
    fontSize: scale(14),
    fontFamily: AppTheme.Fonts.Primary.Regular,
    color: AppTheme.Colors.TextBlack,
    marginLeft: scale(5),
  },
  commentAndShare: {
    flexDirection: 'row',
  },
  textCmtShare: {
    fontSize: scale(14),
    fontFamily: AppTheme.Fonts.Primary.Regular,
    color: AppTheme.Colors.TextSecondary,
  },
  postActionArea: {
    flexDirection: 'row',
    marginTop: verticalScale(10),
    paddingTop: verticalScale(10),
    borderTopColor: AppTheme.Colors.Border,
    borderTopWidth: 1,
  },
  postActionItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  textPostAction: {
    fontSize: scale(14),
    fontFamily: AppTheme.Fonts.Primary.Regular,
    color: AppTheme.Colors.TextBlack,
    marginLeft: scale(5),
  },
});
export default styles;
