const colors = require('colors');
const fs = require('fs-extra');
const iconv = require('iconv-lite');
const innosetupCompiler = require('innosetup-compiler');
const BuildConfig = require('../../../builder-config');
const setupOptions = BuildConfig.setup;

fs.readFile(setupOptions.templateIssPath, null, (err, text) => {
  if (err) {
    console.error(err);
  }
  let str = iconv
    .decode(text, 'gbk')
    .replace(/_appName/g, setupOptions._appName)
    .replace(/_appZhName/g, setupOptions._appZhName)
    .replace(/_appVersion/g, setupOptions._appVersion)
    .replace(/_appPublisher/g, setupOptions._appPublisher)
    .replace(/_appURL/g, setupOptions._appURL)
    .replace(/_appOutputPath/g, setupOptions._appOutputPath)
    .replace(/_appRuntimePath/g, setupOptions._appRuntimePath)
    .replace(/_appResourcesPath/g, setupOptions._appResourcesPath)
    .replace(/_appId/g, setupOptions._appId);

  if (fs.existsSync(setupOptions._appOutputPath)) {
    // fs.removeSync(setupOptions._appOutputPath, { recursive: true });
    // fs.mkdirSync(setupOptions._appOutputPath);
  } else {
    fs.mkdirSync(setupOptions._appOutputPath);
  }
  fs.writeFile(setupOptions.temporaryIssPath, iconv.encode(str, 'gbk'), null, (err) => {
    if (err) {
      console.error(err);
    }
    innosetupCompiler(setupOptions.temporaryIssPath, { gui: false, verbose: true }, function (err) {
      if (err) {
        console.error(err);
        return;
      }
      if (fs.existsSync(setupOptions.temporaryIssPath)) {
        fs.unlinkSync(setupOptions.temporaryIssPath);
      }
      console.log('\n\n' + colors.green('build Done!'));
    });
  });
});
