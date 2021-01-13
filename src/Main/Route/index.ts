/**
 * @Message 根路由为前端部署访问地址，不可用作接口地址
 * @Error Route.all('/', ***);
 * @Success Route.all(SetApiPrefix('***'), ***);
 */
import * as Hello from '@/Main/Controller/Hello';

import Config from '~/config';
import Router from 'koa-router';

export const Prefix = (path: string) => {
  const prefix = Config.prefix.replace(/\//g, '');
  const firstString = /^\//.test(path) ? '' : '/';
  return `/${prefix}${firstString}${path}`;
};

const Route = new Router();

Route.all(Prefix('/hello'), Hello.AllHello);

export default Route;
