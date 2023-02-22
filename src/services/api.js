import axios from 'axios';

export const publicApi = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const privateApi = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const token = {
  // set: token => {
  //   privateApi.defaults.headers.Authorization = token;
  // },

  set: data => {
    privateApi.defaults.headers.Authorization = `${data.token_type} ${data.access_token}`;
  },

  remove: () => {
    privateApi.defaults.headers.Authorization = null;
  },
};

//  export const token = {
//   set(token) {
//     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//   },
//   unset() {
//     axios.defaults.headers.common.Authorization = '';
//   },
// };