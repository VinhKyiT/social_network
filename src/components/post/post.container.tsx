import React from 'react';
import { IPost } from '~models/post.model';
import PostView from './post.view';

const Post = (props: IPost) => {
  const viewProps = {
    ...props,
  };
  return <PostView {...viewProps} />;
};

export default Post;
