import Config from '~/config';
import Koa from 'koa';
import os from 'os';
import path from 'path';

export const GetIPAddress = (type: 'IPv4' | 'IPv6') => {
  const interfaces = os.networkInterfaces();
  let address = '127.0.0.1';
  for (const key in interfaces) {
    for (const item of interfaces[key]) {
      if (item.family === type && key === 'en0') {
        address = item.address;
        break;
      }
    }
  }
  return address;
};

const GetProcessPort = (): { Main: number; Render: number } => {
  return {
    Main: Config.port,
    Render: $$.isPro() ? Config.port : Config.port + 1
  };
};

const OpenMainWindow = () => {
  window.global['listen_port'] = GetProcessPort().Render;
};
export const Listen = async (app: Koa, callback?: Function) => {
  app.listen(Config.port, () => {
    console.info(`serve running at:`);
    console.info(`- Main Process Server: http://localhost:${GetProcessPort().Main + Config.prefix}/`);
    console.info(`- Render Process Server: http://localhost:${GetProcessPort().Render}/`);
    console.info(`- 外部存储目录: ${path.resolve($$.AppInfo.WorkPath)}`);
    OpenMainWindow();
    callback && typeof callback === 'function' && callback();
  });
};
