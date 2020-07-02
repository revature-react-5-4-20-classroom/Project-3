import axios, { AxiosResponse } from 'axios';

export const axiosClient = axios.create({
<<<<<<< HEAD
    baseURL : 'http://localhost:1235', // Use this to test on your local machine, leave commented out.
  // baseURL: 'http://3.235.74.191:8212/data',
=======
  baseURL : 'http://localhost:1235', // Use this to test on your local machine, leave commented out.
  //baseURL: 'http://3.235.74.191:8212/data',
>>>>>>> development
  //if you don't have the following line, your login won't work
  withCredentials: false, // we should probably change this later
})
