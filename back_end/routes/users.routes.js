import express from 'express';
import { createUser, listUsers, updateUser, deleteUser } from '../controllers/user.controller.js';

export const userRouter = express.Router();

userRouter.get('/', listUsers);
userRouter.post('/', createUser);
userRouter.put('/:id', updateUser);
userRouter.delete('/:id', deleteUser);
