import { Component, OnInit, inject } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

import { serviceUsers } from '../../services/users';
import { serviceDepartments } from '../../services/departments';
import { serviceRoles } from '../../services/roles';

interface Role {
  _id: number;
  name: string;
  description?: string;
}

interface Department {
  _id: number;
  name: string;
  description?: string;
}

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User implements OnInit {
  private _userService = inject(serviceUsers);
  private _roleService = inject(serviceRoles);
  private _departmentService = inject(serviceDepartments);
  private _router = inject(Router);

  roleData: Role[] = [];
  departmentData: Department[] = [];

  userForm = new FormGroup({
    code: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    last_name1: new FormControl('', [Validators.required]),
    last_name2: new FormControl('', [Validators.required]),
    roleId: new FormControl('', [Validators.required]),
    departmentId: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {
    this.bringData();
  }

  bringData() {
    this._departmentService.searchDepartments().subscribe({
      next: (res: any) => {
        this.departmentData = res.data as Department[];
      },
      error: (res: any) => {
        Swal.fire({
          title: 'Error',
          icon: 'error',
          text: res.error.msg,
          confirmButtonText: 'Intenta nuevamente',
        });
      },
    });

    this._roleService.searchRoles().subscribe({
      next: (res: any) => {
        this.roleData = res.data as Role[];
      },
      error: (res: any) => {
        Swal.fire({
          title: 'Error',
          icon: 'error',
          text: res.error.msg,
          confirmButtonText: 'Intenta nuevamente',
        });
      },
    });
  }

  handleSubmit() {
    if (this.userForm.valid) {
      
      const userFormData = {
        code: this.userForm.value.code || '',
        name: this.userForm.value.name || '',
        last_name1: this.userForm.value.last_name1 || '',
        last_name2: this.userForm.value.last_name2 || '',
        roleId: this.userForm.value.roleId || '',
        departmentId: this.userForm.value.departmentId || '',
      };
      this._userService.createUser(userFormData).subscribe({
        next: (res: any) => {
          Swal.fire({
            title: 'Usuario creado',
            icon: 'success',
            text: res.msg,
          }).then(() => {
            this._router.navigate(['dashboard']);
          });
        },
        error: (res: any) => {
          Swal.fire({
            title: 'Error',
            icon: 'error',
            text: res.error.error,
            confirmButtonText: 'Intenta nuevamente',
          });
        },
      });
    }
  }
}
