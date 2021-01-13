import AutoService from '@/Main/Service';
import Koa from 'koa';
import { Listen } from '@/Main/Core';
import Middleware from '@/Main/Middlewares/Middleware';
import PublishFiles from 'koa-static';
import Route from '@/Main/Route';
import bodyparser from 'koa-bodyparser';

const app = new Koa();

/** @Listen */
Listen(app, () => AutoService());

/** @publish 部署软件窗口代码 <script src="/assets/js/xxx.hash[8].js" /> */
app.use(PublishFiles(__dirname));

app.use(Middleware());
app.use(bodyparser());
app.use(Route.routes());
app.use(Route.allowedMethods());
