import { Router } from 'express';
import controller from './user.controller';

const userRouter = Router();

userRouter.post('/auth', controller.auth);
userRouter.post('/', controller.create);

export default userRouter;
