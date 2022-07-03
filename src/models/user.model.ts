export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  avatar?: string;
  email?: string;
  phone?: string;
  gender?: 'male' | 'female' | 'other';
  bio?: string;
  maritalStatus?: 'in_relationship' | 'married' | 'alone';
  website?: string;
  hobbies?: string[];
  location?: ILocation;
  createdAt: string;
  updatedAt: string;
}
export interface ILocation {
  lat?: number;
  lon?: number;
  address: string;
}

export const fakeUser: IUser[] = [
  {
    id: '1',
    firstName: 'John',
    lastName: 'Doe',
    avatar: 'https://picsum.photos/300/300',
    email: 'abc@gmail.com',
    phone: '09123456789',
    gender: 'male',
    bio: 'Love developing',
    maritalStatus: 'alone',
    website: 'https://twitter.com',
    hobbies: ['music', 'gaming'],
    location: {
      lat: 10.126,
      lon: 105.12,
      address: 'Ho Chi Minh',
    },
    createdAt: '2020-01-01',
    updatedAt: '2020-01-01',
  },
  {
    id: '2',
    firstName: 'Jane',
    lastName: 'Doe',
    avatar: 'https://picsum.photos/300/300',
    email: 'lkj@gmail.com',
    phone: '09123456789',
    gender: 'female',
    bio: 'Love gaming',
    maritalStatus: 'in_relationship',
    website: 'https://instagram.com',
    hobbies: ['music', 'gaming'],
    location: {
      lat: 10.126,
      lon: 105.12,
      address: 'Ho Chi Minh',
    },
    createdAt: '2020-01-01',
    updatedAt: '2020-01-01',
  },
];
