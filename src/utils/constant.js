export const BASE_URL = "http://localhost:3000";

export const API = {
  SIGNUP: "/signup",
  LOGIN: "/login",
  LOGOUT: BASE_URL + "/logout",
  USERS: "/users",
  UPDATE_USERS: "/users",
  PROFILE_EDIT: "/profile/edit",
  REQUEST_SEND: "/request/send/:status/:userId",
  REQUEST_REVIEW: "/request/review/:status/:requestId",
  CONNECTIONS: "/user/connections",
  USERS_FEED: "/user/feed?page=1&limit=20",
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
