import axios, { AxiosResponse } from 'axios';

export const axiosClient = axios.create({
  baseURL: 'http://localhost:1235', // Use this to test on your local machine, leave commented out.

  ///baseURL: "http://localhost:1111",

<<<<<<< HEAD
  // baseURL: 'http://3.235.74.191:8212/data',
=======
  //  baseURL: 'http://3.235.74.191:8212/data',
>>>>>>> 58d41e88eaf31155bea73254d921ae1297ac38ed
  //if you don't have the following line, your login won't work
  withCredentials: false, // we should probably change this later
});
