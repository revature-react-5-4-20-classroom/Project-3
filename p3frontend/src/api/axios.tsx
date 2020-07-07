import axios, { AxiosResponse } from 'axios';

//GATEWAY MASTER PORT IS 2331 - SWAP THIS IN WHEN PUSHING TO MASTER
//GATEWAT DEVELOPMENT PORT IS 8212 - THIS SHOULD BE ACTIVE BY DEFAULT

export const axiosClient = axios.create({
<<<<<<< HEAD
  // baseURL : 'http://localhost:1235', // Use this to test on your local machine, leave commented out.
  baseURL: 'http://3.235.74.191:2331/data',
=======
  // baseURL: "http://localhost:1235", // Use this to test on your local machine, leave commented out.
  baseURL: 'http://3.235.74.191:8212/data',
>>>>>>> 8b6cca369cd9bc85a7ee2d413d3d241d6264b057
  //if you don't have the following line, your login won't work
  withCredentials: false, // we should probably change this later
});
