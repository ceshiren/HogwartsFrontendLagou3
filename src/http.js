import axios from 'axios'

const http = axios.create({
    baseURL: 'http://127.0.0.1:5000/',
    timeout: 10000,
    headers: { 'X-Custom-Header': 'foobar' }
});

//使用拦截器机制自动追加认证token
http.interceptors.request.use(function (config) {
    // Do something before request is sent
    //看下本地存储是否有token
    let token = localStorage.getItem("token")
    if (token) {
        //如果有，追加到认证头里
        config.headers.common["Authorization"] = "Bearer " + localStorage.getItem("token")
    }
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

export default http
