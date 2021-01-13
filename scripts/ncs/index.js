/**
 * @Message [Electron Cli Service]
 * @start 开始编译并启动开发环境客户端
 * @build 开始编译并构建打包客户端
 * @RenderProcess 开始编译 RenderProcess
 * @MainProcess 开始编译 MainProcess
 * @app   开发环境启动客户端
 */
const minimist = require('minimist');
const Command = require('./command');
const shelljs = require('shelljs');
const command = new Command();

const argvs = minimist(process.argv.slice(2))['_'].filter((item) => command[item] && typeof command[item] === 'function');

for (const argvItem of argvs) {
  command[argvItem]();
}

process.on('SIGINT', () => {
  shelljs.exec(`taskkill /f /t /im nw.exe`, { silent: true }, function () {
    shelljs.echo(`终止批处理操作吗(Y/N)?`);
    shelljs.exit();
  });
});
