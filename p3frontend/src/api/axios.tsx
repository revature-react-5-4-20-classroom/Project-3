
import axios, { AxiosResponse } from 'axios';

export const axiosClient = axios.create({
    baseURL : 'http://localhost:1235', // Use this to test on your local machine, leave commented out.
    // baseURL : ' http://3.21.185.168:8585', // The server was using this port instead for some reason
    //baseURL : 'http://18.216.197.108:8080',
    //if you don't have the following line, your login won't work
    withCredentials: false, // we should probably change this later
});