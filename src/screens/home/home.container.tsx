import React from 'react';
import { fakePost } from '~models/post.model';
import HomeView from './home.view';

const HomeScreen = () => {
  const postData = fakePost;
  const viewProps = {
    postData,
  };
  return <HomeView {...viewProps} />;
};

export default HomeScreen;
