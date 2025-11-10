import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { serviceDepartments } from '../../services/departments';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-departments',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './departments.html',
  styleUrl: './departments.css',
})
export class Departments {
  private _roleDepartment = inject(serviceDepartments);
  private _router = inject(Router);

  departmentForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    description: new FormControl(''),
  });

  handleSubmit() {

    if (this.departmentForm.valid) {
      const departmentFormsData = {
        name: this.departmentForm.value.name || '',
        description: this.departmentForm.value.description || ''
      }

      this._roleDepartment.createDepartment(departmentFormsData).subscribe({
        next: (res: any) => {
          Swal.fire({
            title: 'Departamento creado',
            icon: 'success',
            text: res.msg
          }).then(() => {
            this._router.navigate(['dashboard']);
          })
        },
        error: (res: any) => {
          Swal.fire({
            title: 'Error',
            icon: 'error',
            text: res.error.msg,
            confirmButtonText: 'Intenta nuevamente'
          })
        }
      })
    }
  }
}
