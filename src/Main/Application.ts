import { Listen, PublishRender } from '@/Main/Core';

import AutoService from '@/Main/Service';
import Koa from 'koa';
import Middleware from '@/Main/Middlewares/Middleware';
import Route from '@/Main/Route';
import bodyparser from 'koa-bodyparser';

const app = new Koa();

/** @publish render */
PublishRender(app);

/** @Listen */
Listen(app, () => AutoService());

app.use(Middleware());
app.use(bodyparser());
app.use(Route.routes());
app.use(Route.allowedMethods());
