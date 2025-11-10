import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { serviceRoles } from '../../services/roles';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-roles',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './roles.html',
  styleUrl: './roles.css',
})
export class Roles {
  private _roleSerive = inject(serviceRoles);
  private _router = inject(Router);

  roleForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    description: new FormControl(''),
  });

  handleSubmit(){

    if(this.roleForm.valid){
      const roleFormsData = {
        name: this.roleForm.value.name || '',
        description: this.roleForm.value.description || ''
      }

      this._roleSerive.createRole(roleFormsData).subscribe({
        next:(res: any)=>{
          Swal.fire({
            title: 'Role creado',
            icon: 'success',
            text: res.msg
          }).then(()=>{
            this._router.navigate(['dashboard']);
          })
        },
        error:(res: any)=>{
          Swal.fire({
            title:'Error',
            icon:'error',
            text:res.error.msg,
            confirmButtonText: 'Intenta nuevamente'
          })
        }
      })
    }
  }
}
