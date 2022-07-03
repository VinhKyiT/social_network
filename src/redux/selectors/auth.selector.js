export const getUserSelector = state => state.auth.user;
export const getAuthStatusSelector = state => state.auth.isLoggedIn;
export const getAccessTokenSelector = state => state.auth.access_token;
export const getRefreshTokenSelector = state => state.auth.refresh_token;
