import axios from 'axios';
import swallow from './assets/js/swallow.js'
import router from './router'
import qs from 'qs'

axios.defaults.timeout = 5000;
axios.defaults.baseURL = process.env.API_ROOT;
/*process.env.API_ROOT*/
var axiosJsonConfig = {
  headers:{'Content-Type':'application/x-www-form-urlencoded'}
}

//http request 拦截器
axios.interceptors.request.use(config => {
  if(config.headers['Content-Type'] != 'multipart/form-data'){
    config.data = qs.stringify(config.data);
  }
  /*config.data = qs.stringify(config.data);*/
  if (swallow.getCookie('yen_u_key_')) {
    config.headers['Authorization'] = swallow.getCookie('yen_u_key_')
  }
  return config
}, error => {
  // Do something with request error
  console.log(error) // for debug
  Promise.reject(error)
})


//http response 拦截器
axios.interceptors.response.use(
  response => {
    if(response.data.errcode == '4001'){
        var pushType = {
          path:"/login",
          query:{redirect:router.currentRoute.fullPath}//从哪个页面跳转
        }
        if(router.currentRoute.fullPath == '/myCenter'){
          router.replace(pushType)
        }else{
          router.push(pushType)
        }
    }
    return response;
  },
  error => {
    return Promise.reject(error)
  }
)


/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function fetch(url,params={}){
  params.langue = swallow.localStorageGet('lang')
  return new Promise((resolve,reject) => {
    axios.get(url,{
      params:params
    },axiosJsonConfig)
    .then(response => {
      resolve(response.data);
    },)
    .catch(err => {
      reject(err)
    })
  })
}


/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

 export function post(url,data = {}){
  data.langue = swallow.localStorageGet('lang')
   return new Promise((resolve,reject) => {
     axios.post(url,data,axiosJsonConfig)
          .then(response => {
            resolve(response.data);
          },err => {
            reject(err)
          })
   })
 }


 export function postImg(url,data = {}){
  var config = {
        headers:{'Content-Type':'multipart/form-data'}
      }; 
   return new Promise((resolve,reject) => {
     axios.post(url,data,config)
          .then(response => {
            resolve(response.data);
          },err => {
            reject(err)
          })
   })
 }
 /**
 * 封装patch请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function patch(url,data = {}){
  return new Promise((resolve,reject) => {
    axios.patch(url,data,axiosJsonConfig)
         .then(response => {
           resolve(response.data);
         },err => {
           reject(err)
         })
  })
}

 /**
 * 封装put请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function put(url,data = {}){
  return new Promise((resolve,reject) => {
    axios.put(url,data,axiosJsonConfig)
         .then(response => {
           resolve(response.data);
         },err => {
           reject(err)
         })
  })
}