import express from 'express';
import { UsersController } from '../controller/UsersController';

export const usersRouter = express.Router();

usersRouter.post("/signupListener", new UsersController().signupListener);
usersRouter.post("/signupAdmin", new UsersController().signupAdmin);
usersRouter.post("/signupBand", new UsersController().signupBand);
usersRouter.post("/login", new UsersController().login)

usersRouter.get("/allBands", new UsersController().getAllBands);