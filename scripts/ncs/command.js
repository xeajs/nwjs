const Core = require('./core');
const path = require('path');
const shelljs = require('shelljs');
const webpack = require('webpack');
const builder = require('nw-builder');
const config = require('../../config');
const BuildConfig = require('../../builder-config');
const { EventEmitter } = require('events');
const childProcess = require('child_process');
const WebpackDevServer = require('webpack-dev-server');
const MainProcessWebpackConfig = require('./webpack/Main/webpack.config.js');
const RenderProcessWebpackConfig = require('./webpack/Render/webpack.config.js');

class Command extends EventEmitter {
  constructor() {
    super();
    this.AutoOpenApp = new Proxy(
      {
        _RenderProcessDone: false,
        _MainProcessDone: false
      },
      {
        set: (target, props, value) => {
          const isOk = Reflect.set(target, props, value);
          if (target._MainProcessDone && target._RenderProcessDone) {
            this.emit('openApp');
          }
          return isOk;
        }
      }
    );
  }

  /** Readme */
  childProcessExec(runPath) {
    const _childProcess = childProcess.exec(runPath);
    _childProcess.stdout.on('data', console.info);
    _childProcess.stdout.on('error', console.info);
    _childProcess.stderr.on('data', console.info);
    _childProcess.stderr.on('error', console.info);
  }

  /** Readme */
  async RenderProcess() {
    const compiler = webpack(RenderProcessWebpackConfig);
    if (Core.isPro()) return compiler.run(Core.RenderProcessPro);
    const userDevServer = config.devServer || {};
    const devServerOptions = {
      hot: true,
      open: false,
      hotOnly: true,
      noInfo: true,
      stats: 'errors-only',
      clientLogLevel: 'error',
      disableHostCheck: true,
      overlay: { errors: true, warnings: true },
      ...userDevServer
    };
    compiler.hooks &&
      compiler.hooks.done.tapAsync({ name: 'CompiledRenderProcessOnce' }, (compilation, callback) => {
        if (!this.AutoOpenApp._RenderProcessDone) this.AutoOpenApp._RenderProcessDone = true;
        callback();
      });
    new WebpackDevServer(compiler, devServerOptions).listen(config.port + 1);
  }

  /** Readme */
  async MainProcess() {
    const compiler = webpack(MainProcessWebpackConfig);
    if (Core.isPro()) return compiler.run(Core.MainProcessPro);
    const watchOptions = { ignored: /(node_modules|Render|package\.json)/ };
    compiler.hooks.done.tapAsync({ name: 'CompiledMainProcessOnce' }, (compilation, callback) => {
      if (!this.AutoOpenApp._MainProcessDone) this.AutoOpenApp._MainProcessDone = true;
      callback();
    });
    compiler.watch(watchOptions, Core.MainProcessDev);
  }

  /** Readme */
  build() {
    process.env.NODE_ENV = 'production';
    this.MainProcess();
    this.RenderProcess();
  }

  /** Readme */
  builder() {
    shelljs.cp('-R', 'public', 'dist/public');
    shelljs.cp('favicon.ico', 'dist/favicon.ico');
    const nw = new builder(BuildConfig.nw);
    nw.on('log', console.log);
    nw.build()
      .then(function () {
        console.log('\n');
        console.log('all done!');
        console.log('output path: ' + BuildConfig.nw.buildDir);
        childProcess.fork(path.join(process.cwd(), 'scripts/ncs/innoSetup/setup.js'));
      })
      .catch(function (error) {
        console.error(error);
        reject(error);
      });
  }

  /** Readme */
  start() {
    process.env.NODE_ENV = 'development';
    this.once('openApp', () => {
      this.app();
      if (config.tslint) this.childProcessExec(`tsc -w`);
    });
    this.MainProcess();
    this.RenderProcess();
  }

  /** Readme */
  help() {
    console.log(`
    Command:    node electron-cli-service

    Options:    [start, build, kill]
    `);
  }

  /** Readme */
  app() {
    const resolve = (...dir) => path.join(process.cwd(), 'cache/0.14.7-sdk', ...dir);
    const appName = resolve('win32/nw.exe');
    if (config.nodemon) {
      this.childProcessExec(`nodemon -e js,ts,tsx -w dist -w package.json -w index.js -w index.html --exec ${appName} . --inspect`);
    } else {
      this.childProcessExec(`${appName} . --inspect`);
    }
  }

  /** Extends */
  autoVersion() {
    require('../run/auto-version');
  }

  nwjsCache() {
    require('../run/nwjs-cache');
  }
}

module.exports = Command;
