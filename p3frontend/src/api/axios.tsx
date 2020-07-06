import axios, { AxiosResponse } from 'axios';

export const axiosClient = axios.create({
<<<<<<< HEAD
  // baseURL: 'http://localhost:1235', // Use this to test on your local machine, leave commented out.

  ///baseURL: "http://localhost:1111",

  baseURL: 'http://3.235.74.191:8212/data',
=======
  //baseURL: 'http://localhost:1235', // Use this to test on your local machine, leave commented out.

  ///baseURL: "http://localhost:1111",

   baseURL: 'http://3.235.74.191:8212/data',
>>>>>>> e0bceb465bd34623d687486301b78fd65548fc05
  //if you don't have the following line, your login won't work
  withCredentials: false, // we should probably change this later
});
