import express from 'express';
import { createRole, listRoles, updateRole, deleteRole } from '../controllers/role.controller.js';

export const roleRouter = express.Router();

roleRouter.get('/', listRoles );
roleRouter.post('/', createRole );
roleRouter.put('/:id', updateRole );
roleRouter.delete('/:id', deleteRole );
