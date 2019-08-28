import axios from 'axios';
import {message} from 'antd';
import {createHashHistory} from 'history'

let history = createHashHistory();

const service = axios.create({
  timeout: 5000 //设置 request 的timeout
})

service.interceptors.request.use(
  config => {
    if(localStorage.token){
      config.headers.Authorization = localStorage.token;
    }
    return config;
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  }
)

service.interceptors.response.use(
  response => {
    var p = new Promise((resolve, reject) => {
      console.log(response.data);
      let status = response.data.status;
      if(status === 200){
        resolve(response);
      }else if(status === 401){
        message.error(response.data.msg);
        history.push('/login');
      }else{
        message.warning(response.data.msg);
      }
    })

    return p
  },
  error => {
    message.error(error);
  }
)

export default service;