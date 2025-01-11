export const BASE_URL = "http://localhost:3000";

export const API = {
  SIGNUP: BASE_URL + "/signup",
  LOGIN: BASE_URL + "/login",
  LOGOUT: BASE_URL + "/logout",
  USERS: BASE_URL + "/users",
  UPDATE_USERS: BASE_URL + "/users",
  USER_PROFILE: BASE_URL + "/profile",
  PROFILE_EDIT: BASE_URL + "/profile/edit",
  REQUEST_SEND: BASE_URL + "/request/send/:status/:userId",
  REQUEST_REVIEW: BASE_URL + "/request/review/:status/:requestId",
  CONNECTIONS: BASE_URL + "/user/connections",
  USERS_FEED: BASE_URL + "/user/feed?page=1&limit=20",
};

// http://localhost:3000/signup
// http://localhost:3000/login
// http://localhost:3000/users
// http://localhost:3000/update-user/6775410c1025971ca5a0d523
// http://localhost:3000/profile/edit
// http://localhost:3000/request/send/ignored/67799a74131e0cd4f5c9088e
// http://localhost:3000/user/connections
// http://localhost:3000/request/review/rejected/67799f284094cad5a5d5b88b
// http://localhost:3000/user/requests/review
// http://localhost:3000/user/feed?page=1&limit=20
