import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

import { message } from 'antd';

const instance = axios.create({
  /** 默认超时时长 20秒 */
  timeout: 20 * 1000,
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: false
});

/**
 * @request过滤器
 */

instance.interceptors.request.use(
  function (Config) {
    return Config;
  },
  function (error: Error) {
    return Promise.reject(error);
  }
);

/**
 * @response过滤器
 */
instance.interceptors.response.use(
  function (Response) {
    return Response;
  },
  function (error: Error) {
    if (axios.isCancel(error)) {
      message.warn(error.message || '接口取消成功！');
    }
    return Promise.reject(error);
  }
);

/**
 * @Message abort 请求终止辅助函数
 * 当需要 终止请求的时候 请求参数使用该方法构造一下，终止时，调用 fn['abort']() 即可
 */
export const InjectAbort = (fn: Function, param?: object) => {
  const CancelToken = axios.CancelToken;
  const source = CancelToken.source();
  const _param = param ?? {};
  fn['abort'] = source.cancel;
  return {
    ..._param,
    cancelToken: source.token
  };
};

export { AxiosRequestConfig, AxiosResponse };

export default instance;
