import AsyncStorage from '@react-native-async-storage/async-storage';

export const isTokenExpired = token => {
  const tokenExpiredDate = new Date(token?.expired);
  const currentDate = new Date();
  return currentDate > tokenExpiredDate;
};
export const getToken = async () => {
  const token = await AsyncStorage.getItem('access_token');
  const res = JSON.parse(token);
  return res;
};
export const getRefreshTokenHelper = async () => {
  const token = await AsyncStorage.getItem('refresh_token');
  return JSON.parse(token);
};
export const setToken = async token =>
  await AsyncStorage.setItem('access_token', JSON.stringify(token));
export const setRefreshToken = async token =>
  await AsyncStorage.setItem('refresh_token', JSON.stringify(token));
