import { Routes } from '@angular/router';
import { Departments } from './pages/departments/departments';
import { Roles } from './pages/roles/roles';
import { User } from './pages/user/user';
import { Welcome } from './pages/welcome/welcome';
import { Admin } from './pages/admin/admin';
import { NotFound } from './pages/not-found/not-found';

export const routes: Routes = [
    { path:'', component: Welcome, title: 'Bienvenida' },
    { path:'manage-roles', component: Roles, title: 'Gestión de roles' },
    { path: 'manage-departments', component: Departments, title: 'Gestión de departamentos' },
    { path: 'manage-employees', component: User, title: 'Gestión de empleados' },
    { path: 'dashboard', component: Admin, title: 'Dashboard'},
    { path: '**', component: NotFound, title: '404 - No encontrado' }
];
