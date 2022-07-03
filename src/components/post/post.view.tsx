import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './post.style';
import FastImage from 'react-native-fast-image';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { scale } from '~utils/Scale';
import { AppTheme } from '~configs/AppTheme';
import { IPost } from '~models/post.model';
import Carousel from 'react-native-reanimated-carousel';
const PostView = (item: IPost) => {
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
          {item?.medias &&
            item?.medias?.length > 0 &&
            (item?.medias?.length === 1 ? (
              <FastImage
                source={{ uri: item?.medias[0]?.url }}
                style={styles.postMedia}
                resizeMode={FastImage.resizeMode.cover}
              />
            ) : (
              <Carousel
                data={item?.medias}
                width={AppTheme.Dimensions.windowWidth - scale(70)}
                height={scale(200)}
                renderItem={({ item }) => (
                  <FastImage
                    source={{ uri: item?.url }}
                    style={styles.postMedia}
                    resizeMode={FastImage.resizeMode.cover}
                  />
                )}
              />
            ))}
        </View>
        <View style={styles.statisticCountWrapper}>
          <View style={styles.reactionCount}>
            <FontAwesome
              name="heart-o"
              size={scale(20)}
              color={AppTheme.Colors.TextBlack}
            />
            <Text style={styles.textReactionCount}>{item?.likeCount}</Text>
          </View>
          <View style={styles.commentAndShare}>
            <Text style={styles.textCmtShare}>10 comments</Text>
            <Text style={styles.textCmtShare}> • </Text>
            <Text style={styles.textCmtShare}>20 shares</Text>
          </View>
        </View>
        <View style={styles.postActionArea}>
          <TouchableOpacity style={styles.postActionItem}>
            <FontAwesome
              name="thumbs-o-up"
              size={scale(20)}
              color={AppTheme.Colors.TextBlack}
            />
            <Text style={styles.textPostAction}>Like</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.postActionItem}>
            <FontAwesome
              name="comment-o"
              size={scale(20)}
              color={AppTheme.Colors.TextBlack}
            />
            <Text style={styles.textPostAction}>Comment</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.postActionItem}>
            <FontAwesome
              name="share-square-o"
              size={scale(20)}
              color={AppTheme.Colors.TextBlack}
            />
            <Text style={styles.textPostAction}>Share</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default PostView;
