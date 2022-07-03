import React, { useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import CustomTextInput from '~components/customTextInput';
import Header from '~components/header/header';
import Feather from 'react-native-vector-icons/Feather';
import styles from './home.style';
import { AppTheme } from '~configs/AppTheme';
import { scale } from '~utils/Scale';
import ReelCard from '~components/reelCard/reelCard';
import CustomButton from '~components/customButton';
import { cmnStyle } from '../../constants/commonStyles.constants';
import Post from '../../components/post/post.container';

const HomeView = (props: any) => {
  const { postData } = props;
  console.log({ postData });
  const [searchTerm, setSearchTerm] = useState('');
  const listHeaderItem = () => {
    return (
      <View style={styles.container}>
        <CustomTextInput
          value={searchTerm}
          onChangeText={setSearchTerm}
          containerStyle={styles.searchInputContainer}
          inputStyle={styles.searchInput}
          leftInputComponent={
            <Feather
              name="search"
              size={scale(24)}
              color={AppTheme.Colors.TextBlack}
              style={styles.searchIcon}
            />
          }
        />
        <View style={styles.reelList}>
          <FlatList
            data={[1, 2, 3, 4, 5]}
            renderItem={({ item, index }) => ReelCard({ item, index })}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={styles.postBtnWrapper}>
          <CustomTextInput
            readonly
            placeholder="Hi guys"
            value=""
            onChangeText={() => {}}
            containerStyle={styles.postInputContainer}
            inputStyle={styles.postInput}
          />
          <CustomButton
            title="Post"
            onPress={() => {}}
            containerStyle={styles.postBtnContainer}
            fullWidth={false}
          />
        </View>
        <View style={styles.postOptionWrapper}>
          <TouchableOpacity style={styles.postOptionItem}>
            <Feather
              name="file"
              color={AppTheme.Colors.Primary}
              size={scale(22)}
            />
            <Text style={styles.postOptionItemText}>File</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.postOptionItem,
              cmnStyle.bLR({
                x: 1,
                y: '#ECECEC',
              }),
            ]}>
            <Feather
              name="image"
              color={AppTheme.Colors.Error}
              size={scale(22)}
            />
            <Text style={styles.postOptionItemText}>Photo</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.postOptionItem}>
            <Feather name="video" color={'#17A1A1'} size={scale(22)} />
            <Text style={styles.postOptionItemText}>Video</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.pageContainer}>
      <Header title="Home" useDefaultButton />
      <FlatList
        contentContainerStyle={styles.postListContainer}
        data={postData}
        renderItem={({ item }) => Post(item)}
        ListHeaderComponent={listHeaderItem}
      />
    </View>
  );
};

export default HomeView;
