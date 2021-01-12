const fs = require('fs-extra');
const shelljs = require('shelljs');
const path = require('path');

const cachePath = path.join(process.cwd(), 'cache');

if (!fs.existsSync(cachePath)) {
  try {
    fs.mkdirSync(cachePath);
    const cloneSourcePath = 'git clone https://gitee.com/xeajs/mirrors-nwjs-0.14.7.git';
    shelljs.exec(`${cloneSourcePath} ${cachePath}`);
    shelljs.rm('-rf', path.join(cachePath, '.git'));
  } catch (error) {}
}
