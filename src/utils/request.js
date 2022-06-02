import axios from "axios";
import { Message } from "element-ui";
import store from "@/store";

// create an axios instance
const service = axios.create({
  baseURL: "https://swapi.dev/api/", // url = base url + request url
  //   timeout: 15000, // request timeout,
});

// request interceptor
// service.interceptors.request.use(
//   (config) => {
//     // Do something before request is sent
//     config.headers["Accept"] = "application/json";
//     // config.headers["Content-Type"] = "multipart/form-data";
//     // config.headers["Access-Control-Allow-Origin"] = "*";
//     return config;
//   },
//   (error) => {
//     // Do something with request error
//     // console.log(error) // for debug
//     Promise.reject(error);
//   }
// );

// response interceptor
service.interceptors.response.use(
  (response) => {
    if (response.status !== 200) {
      Message({
        message: response.statusText || "Please contact the web admin",
        type: "error",
        duration: 2 * 1000,
      });
      return Promise.reject(response.data);
    } else {
      return response.data;
    }
  },
  (error) => {
    console.log("error");
    store.dispatch("ERROR", {
      status: true,
      message: {
        code: error.code,
        message: error.message,
      },
    });
    console.log("error");
    Message({
      title: error.code,
      message: error.message,
      type: "error",
      duration: 2 * 1000,
    });
    return Promise.reject(error);
  }
);

export default service;
