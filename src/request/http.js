/**
 * axios封装
 * 请求拦截、响应拦截、错误统一处理
 */
import axios from 'axios';
import router from "@/router";
import store from "@/base/store";
import {ElMessage} from 'element-plus'

/**
 * 提示函数
 * 禁止点击蒙层、显示一秒后关闭
 */
const tip = () => {
}

/**
 * 跳转登录页
 * 携带当前页面路由，以期在登录页面完成登录后返回当前页面
 */
const toLogin = () => {
  store.dispatch('EDIT_USER_INFO', undefined);
  sessionStorage.removeItem('userInfo');
  router.replace({
    path: '/login', name: 'Login'
  });
}

/**
 * 请求失败后的错误统一处理
 * @param {Number} status 请求失败的状态码
 */
const errorHandle = (status, other) => {
  // 状态码判断
  switch (status) {
    case 401:
      toLogin();
      break;
    case 403:
      toLogin();
      break;
    case 404:
      tip('请求的资源不存在');
      break;
    default:
      ElMessage.error('服务器异常，请刷新页面重试');
      console.log(other);
  }
}

// 创建axios实例
let instance = axios.create({timeout: 1000 * 60});
// 设置post请求头
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
instance.defaults.headers['api-name'] = 'oa-system';

/**
 * 请求拦截器
 * 每次请求前，如果存在token则在请求头中携带token
 */
instance.interceptors.request.use(
    config => {
      const token = !store.state.userInfo.token ? null : store.state.userInfo.token;
      token && (config.headers.Authorization = token);
      return config;
    },
    error => Promise.error(error))

instance.interceptors.response.use(
    res => {
      if (200 === res.status) {
        return Promise.resolve(res.data.data);
      }

      if (200 !== res.data.code && '/login' === router.currentRoute.value.fullPath) {
        return Promise.resolve(res.data);
      } else {
        errorHandle(res.status, res.data.info);
        return Promise.reject(res);
      }
    },
    error => {
      const {response} = error;
      if (response) {
        errorHandle(response.status, response.data.message);
        return Promise.reject(response);
      } else {
        if (!window.navigator.onLine) {
          store.commit('changeNetwork', false);
        } else {
          return Promise.reject(error);
        }
      }
    });

export default instance;
