import axios from 'axios'

//配置基础url以及响应时长
let instance = axios.create({
  baseURL:'http://localhost:3000',
  timeout:6000
})
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
// 请求拦截器
instance.interceptors.request.use(function(config) {
    return config;
  }, function(error) {
    return Promise.reject(error);
  })
// 响应拦截器
instance.interceptors.response.use(function(response) {
  return response;
}, function(error) {
  return Promise.reject(error);
})

/*
 * 使用export default 导出一个自己封装的axios
 * @param {string} method  请求方式：get、post、delete、put
 * @param {string} url     路由
 * @param {Object} data    请求的参数
 * @returns                返回一个promise对象
 *  */

export default function (method,url,data = null) { 
  method = method.toLowerCase();
      if(method == 'post'){
         return instance.post(url,data)
      } else if (method == 'get') {
        return instance.get(url,{params:data})
      } else if (method == 'delete') {
        return instance.post(url,{params:data})
      } else if (method == 'put') {
        return instance.post(url,data)
      } else{
        console.error('未知的method'+method)
        return false
      }
}