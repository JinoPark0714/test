import express from 'express';
import { UserService } from '../service/user.js';

const router = express.Router();

router.get('/', (request, response, next)=>{
  const userService = new UserService();
  response.send(`${userService.sayHello()}`);
});

export default router;