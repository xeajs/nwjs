/**
 * @安装包名称 ${productName} Setup version.xxx
 * @安装默认目录 ${productName}
 */

const PackageJson = require('./package.json');
const path = require('path');

const productName = PackageJson.productName;

const resolve = (...dir) => path.resolve(__dirname, ...dir);

module.exports = {
  nw: {
    appName: productName,
    files: [
      resolve('package.json'),
      resolve('index.html'),
      resolve('favicon.ico'),
      resolve('icon.ico'),
      resolve('icon.png'),
      resolve('index.js'),
      resolve('dist/**')
    ],
    platforms: ['win32'], // ['osx64', 'win32', 'win64']
    version: '0.14.7',
    winIco: resolve('favicon.ico'),
    buildDir: resolve('output/nwjs-win32-unpacked'),
    cacheDir: resolve('cache'),
    buildType: 'default',
    zip: false,
    flavor: 'sdk',
    winVersionString: {
      CompanyName: 'Default_xxx_有限公司',
      FileDescription: productName,
      ProductName: productName,
      LegalCopyright: 'Copyright 2020',
      ProductVersion: PackageJson.version,
      OriginalFilename: `${productName}.exe`
    }
  },
  setup: {
    _appId: `com.xeajs.ncs.${PackageJson.name}.app`,
    _appName: productName,
    _appZhName: productName,
    _appVersion: PackageJson.version,
    _appPublisher: `${productName}, Inc.`,
    _appURL: 'http://localhost',
    _appOutputPath: resolve('output'),
    _appRuntimePath: resolve(`output/nwjs-win32-unpacked/${productName}/win32`),
    _appResourcesPath: resolve('scripts/ncs/InnoSetup/innosetup'),
    temporaryIssPath: resolve('output/temp.iss'),
    templateIssPath: resolve('scripts/ncs/InnoSetup/setup.iss')
  }
};
