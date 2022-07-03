import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import Animated, { FadeIn, FadeOut, Layout } from 'react-native-reanimated';
import styles from './reelCard.style';

const ReelCard = ({ _, index }: any) => {
  return (
    <TouchableOpacity activeOpacity={0.8}>
      <Animated.View
        entering={FadeIn.delay(index * 100)}
        layout={Layout.delay(100)}
        exiting={FadeOut}
        style={styles.container}>
        <LinearGradient
          colors={['rgba(0,0,0,0.01)', 'rgba(0,0,0,0.5)']}
          style={styles.gradient}
        />
        {/* <FastImage
        source={require('~assets/images/no_image.jpeg')}
        style={styles.reelPreviewImage}
        // resizeMode={FastImage.resizeMode.contain}
      /> */}
        <FastImage style={styles.reelAuthorAvatar} source={{}} />
        <Text style={styles.reelNameText}>Add Story</Text>
      </Animated.View>
    </TouchableOpacity>
  );
};

export default ReelCard;
