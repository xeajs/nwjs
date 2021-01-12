/**
 * @Author yejiang1015
 * @Date 2021-01-04 16:45:23
 * @Last Modified by: yejiang1015
 * @Last Modified time: 2021-01-12 12:26:45
 * @Message 静态资源服务，部署生产环境下的渲染进程资源
 */

import Koa from 'koa';
import serveStatic from 'koa-static';

export const PublishRender = (app: Koa) => {
  /**
   * @Message 部署软件窗口代码
   * @Eg <script src="/assets/js/xxx.hash[8].js" />
   */
  app.use(serveStatic(__dirname));
};
