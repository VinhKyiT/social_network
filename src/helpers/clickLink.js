import { Linking, ToastAndroid } from 'react-native';

export const clickLink = link => {
  const onSocial = () => {
    if (!!link) {
      Linking.openURL(link);
    } else {
      ToastAndroid.show('This link is not available yet', ToastAndroid.SHORT);
    }
  };

  return onSocial;
};
