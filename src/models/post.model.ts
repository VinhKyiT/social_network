import { fakeUser, IUser } from './user.model';
export interface IPost {
  id: string;
  user: IUser;
  content?: string;
  postType?: 'image_only' | 'video_only' | 'video_and_image';
  medias?: IMedia[];
  likeCount?: number;
  commentCount?: number;
  privateMode?: 'public' | 'friend_only' | 'friend_of_friend' | 'only_me';
  createdAt: string;
  updatedAt: string;
}
export interface IMedia {
  id: string;
  mediaType: 'image' | 'video';
  url: string;
}
export const fakePost: IPost[] = [
  {
    id: '1',
    user: fakeUser[0],
    content: 'Hello world',
    postType: 'image_only',
    medias: [
      {
        id: '1',
        mediaType: 'image',
        url: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      },
    ],
    createdAt: '2020-01-01',
    updatedAt: '2020-01-01',
  },
  {
    id: '2',
    user: fakeUser[1],
    content: 'Hello Vinh Ky',
    postType: 'image_only',
    medias: [
      {
        id: '1',
        mediaType: 'image',
        url: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      },
    ],
    createdAt: '2020-01-01',
    updatedAt: '2020-01-01',
  },
];
