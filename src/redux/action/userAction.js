export const FETCH_USER_LOGIN_SUCCESS = "FETCH_USER_LOGIN_SUCCESS";

export const doLogin = (data) => {
  return {
    type: FETCH_USER_LOGIN_SUCCESS, //action
    payload: data,
  };
};
