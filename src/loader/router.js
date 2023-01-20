import baseRouter from '../controller/index.js';
import userRouter from '../controller/user.js';

const url = {
  base : '/',
  user : '/user',
};

export function setRouter(app){
  app.use(url.base, baseRouter);
  app.use(url.user, userRouter);
}
