import { View, Text } from 'react-native';
import React from 'react';
import styles from './post.style';
import FastImage from 'react-native-fast-image';
import Entypo from 'react-native-vector-icons/Entypo';
import { scale } from '~utils/Scale';
import { AppTheme } from '~configs/AppTheme';
const PostView = (item: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.postHeaderWrapper}>
        <View style={styles.authorInformation}>
          <FastImage
            source={{ uri: item?.user?.avatar }}
            style={styles.authorAvatar}
          />
          <View style={styles.authorNameWrapper}>
            <Text style={styles.textAuthorName}>
              {item?.user?.firstName + ' ' + item?.user?.lastName}
            </Text>
            <Text style={styles.textTimeToNow}>30 min ago</Text>
          </View>
        </View>
        <Entypo
          name="dots-three-vertical"
          size={scale(20)}
          color={AppTheme.Colors.TextSecondary}
        />
      </View>
      <View style={styles.postContentWrapper}>
        <View style={styles.postContent}>
          <Text style={styles.textPostContent}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </Text>
        </View>
        <View style={styles.postMediaWrapper}>
          <FastImage
            source={{ uri: item?.medias[0]?.url }}
            style={styles.postMedia}
            resizeMode={FastImage.resizeMode.cover}
          />
        </View>
      </View>
    </View>
  );
};

export default PostView;
