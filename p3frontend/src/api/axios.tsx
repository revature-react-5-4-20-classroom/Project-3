import axios, { AxiosResponse } from 'axios';

export const axiosClient = axios.create({
<<<<<<< HEAD
  baseURL: 'http://localhost:1235', // Use this to test on your local machine, leave commented out.
  // baseURL: 'http://3.235.74.191:8212/data',
=======
  baseURL: "http://localhost:1235", // Use this to test on your local machine, leave commented out.

  ///baseURL: "http://localhost:1111",

  ///////////////////////baseURL: 'http://3.235.74.191:8212/data',
>>>>>>> 3f21c518a7aa8b7890d2e6007245d988af818e56
  //if you don't have the following line, your login won't work
  withCredentials: false, // we should probably change this later
});
