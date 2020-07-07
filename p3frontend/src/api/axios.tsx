import axios, { AxiosResponse } from 'axios';

//GATEWAY MASTER PORT IS 2331 - SWAP THIS IN WHEN PUSHING TO MASTER
//GATEWAT DEVELOPMENT PORT IS 8212 - THIS SHOULD BE ACTIVE BY DEFAULT

export const axiosClient = axios.create({
<<<<<<< HEAD
  baseURL: 'http://localhost:1235', // Use this to test on your local machine, leave commented out.

  ///baseURL: "http://localhost:1111",

  // baseURL: 'http://3.235.74.191:8212/data',
=======
  // baseURL : 'http://localhost:1235', // Use this to test on your local machine, leave commented out.
  baseURL: 'http://3.235.74.191:2331/data',
>>>>>>> 9fd5d8f5fb938e2de3106df03ff41656059905c4
  //if you don't have the following line, your login won't work
  withCredentials: false, // we should probably change this later
});
