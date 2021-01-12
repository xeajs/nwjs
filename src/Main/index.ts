import MountGlobal from '@/Global';

MountGlobal().then(() => {
  // require('./DataBase/index');
  require('./Application');
});
