/**
 * @Author yejiang1015
 * @Date 2020-12-18 12:27:00
 * @Last Modified by: yejiang1015
 * @Last Modified time: 2021-01-12 15:55:09
 * @Pre {优先加载 日志模块}
 * @Message 订阅软件相关信息
 */

export default () => {
  /**
   * @See https://github.com/nodejs/node/issues/4467
   * @Msg 监听未捕获的异常
   * @Msg 某些版本中可能不存在
   */
  process.on('uncaughtException', (err: Error) => {
    if (nw) nw.Window.get().show();
    if ($$.log) {
      $$.log.error((err || '').toString());
      $$.log.error(err.stack || '');
    }
  });

  /**
   * @See https://github.com/nodejs/node/issues/4467
   * @Msg 监听Promise没有被捕获的失败函数
   */
  process.on('unhandledRejection', (err: Error) => {
    if (nw) nw.Window.get().show();
    if ($$.log) {
      $$.log.error((err || '').toString());
      $$.log.error(err.stack || '');
    }
  });
};
