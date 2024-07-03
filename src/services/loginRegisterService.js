import axios from "../utils/axiosCustomize";

const postLogin = (userEmail, userPassword) => {
  return axios.post(`api/v1/login`, {
    email: userEmail,
    password: userPassword,
    delay: 3000,
  });
};

const postRegister = (userEmail, userPassword, username) => {
  return axios.post(`api/v1/register`, {
    email: userEmail,
    password: userPassword,
    username: username,
  });
};

export { postLogin, postRegister };
