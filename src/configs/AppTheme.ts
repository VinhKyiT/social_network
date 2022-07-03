import { Dimensions } from 'react-native';
import { scale } from '../utils/Scale';
import { Platform, NativeModules } from 'react-native';
const { StatusBarManager } = NativeModules;

const statusbarHeight = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT;
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const textFontFamily = 'Poppins-';
const AppTheme = {
  Fonts: {
    Primary: {
      Black: `${textFontFamily}Black`,
      BlackItalic: `${textFontFamily}BlackItalic`,
      Bold: `${textFontFamily}Bold`,
      BoldItalic: `${textFontFamily}BoldItalic`,
      ExtraBold: `${textFontFamily}ExtraBold`,
      ExtraBoldItalic: `${textFontFamily}ExtraBoldItalic`,
      ExtraLight: `${textFontFamily}ExtraLight`,
      Italic: `${textFontFamily}Italic`,
      Light: `${textFontFamily}Light`,
      LightItalic: `${textFontFamily}LightItalic`,
      MediumItalic: `${textFontFamily}MediumItalic`,
      Medium: `${textFontFamily}Medium`,
      Regular: `${textFontFamily}Regular`,
      SemiBold: `${textFontFamily}SemiBold`,
      SemiBoldItalic: `${textFontFamily}SemiBoldItalic`,
      Thin: `${textFontFamily}Thin`,
      ThinItalic: `${textFontFamily}ThinItalic`,
    },
  },
  Colors: {
    Primary: '#028FF3',
    BackgroundColor: '#f2f2f2',
    Secondary: '#ffecec',
    TextBlack: '#3B3D3E',
    TextWhite: '#fff',
    TextDark: '#333',
    TextInActive: '#9A9A9D',
    TextSecondary: '#A5A6A7',
    Error: '#F35E5F',
    Disabled: '#D8D8D8',
    Warning: '#F8B449',
    ButtonInactive: '#ffecec',
    Border: '#EAEBEC',
    YellowButton: '#fdcc0d',
    Facebook: '#3B5998',
    Twitter: '#1da1f2',
    Linkedin: '#8d6cab',
    Youtube: '#ff0000',
    Black: '#000',
    Icon: '#737373',
    LiveStreamCardBackground: '#ded9de',
    LiveStreamCardInsideColor: '#e5e0e5',
    Orange: '#FA8305',
    Green: '#198754',
  },
  Size: {
    Icon: scale(24),
  },
  Dimensions: {
    windowWidth,
    windowHeight,
    statusbarHeight,
  },
};

export { AppTheme };
