import { Component, inject, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { serviceDepartments } from '../../services/departments';
import { serviceRoles } from '../../services/roles';
import { serviceUsers } from '../../services/users';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './data-table.html',
  styleUrl: './data-table.css',
})
export class DataTable {
  private _departmentService = inject(serviceDepartments);
  private _roleService = inject(serviceRoles);
  private _userService = inject(serviceUsers);

  @Input() data: any[] = [];
  @Input() type: string = '';
  @Output() updated = new EventEmitter<void>(); 

  removeUser(id: any) {
    Swal.fire({
      title: '¿Eliminar usuario?',
      text: 'Esta acción no se puede deshacer.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then(result => {
      if (result.isConfirmed) {
        this._userService.deleteUser(id).subscribe({
          next: (res: any) => {
            Swal.fire('Eliminado', res.msg, 'success').then(() => {
              this.updated.emit();
            });
          },
          error: (res: any) => {
            Swal.fire('Error', res.error.msg, 'error');
          }
        });
      }
    });
  }

  removeDepartment(id: any) {
    Swal.fire({
      title: '¿Eliminar departamento?',
      text: 'Esta acción no se puede deshacer.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then(result => {
      if (result.isConfirmed) {
        this._departmentService.deleteDepartment(id).subscribe({
          next: (res: any) => {
            Swal.fire('Eliminado', res.msg, 'success').then(() => {
              this.updated.emit();
            });
          },
          error: (res: any) => {
            Swal.fire('Error', res.error.msg, 'error');
          }
        });
      }
    });
  }

  removeRole(id: any) {
    Swal.fire({
      title: '¿Eliminar rol?',
      text: 'Esta acción no se puede deshacer.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then(result => {
      if (result.isConfirmed) {
        this._roleService.deleteRole(id).subscribe({
          next: (res: any) => {
            Swal.fire('Eliminado', res.msg, 'success').then(() => {
              this.updated.emit();
            });
          },
          error: (res: any) => {
            Swal.fire('Error', res.error.msg, 'error');
          }
        });
      }
    });
  }
}
