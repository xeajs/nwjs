import MountGlobal from '@/Global';

MountGlobal().then(() => {
  require('./DataBase');
  require('./Application');
});
