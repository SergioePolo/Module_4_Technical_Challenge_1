import express from 'express';
import { createDepartment, listDepartment, updateDepartment, deleteDepartment } from '../controllers/department.controller.js';

export const departmentRouter = express.Router();

departmentRouter.get('/', listDepartment );
departmentRouter.post('/', createDepartment );
departmentRouter.put('/:id', updateDepartment );
departmentRouter.delete('/:id', deleteDepartment );
