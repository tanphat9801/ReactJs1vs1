import { ACCESS_TOKEN, BASE_URL } from "../constants"; // goi tu .env
import axios from "axios";

export const api = {
  call() {
    return axios.create({
      baseURL: BASE_URL,
    });
  },
  callWithToken(){
    return axios.create({
      baseURL: BASE_URL,
      headers:{
        Authorization:  `Bearer  ${localStorage.getItem(ACCESS_TOKEN)}`
      }
    })
  }
};


