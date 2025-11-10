import { Component, inject, OnInit } from '@angular/core';
import { DataTable } from '../../components/data-table/data-table';
import { serviceDepartments } from '../../services/departments';
import { serviceRoles } from '../../services/roles';
import { serviceUsers } from '../../services/users';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin',
  imports: [DataTable],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class Admin implements OnInit {
  private _serviceRoles = inject(serviceRoles);
  private _serviceUsers = inject(serviceUsers);
  private _serviceDepartments = inject(serviceDepartments);

  roleData: any[] = [];
  userData: any[] = [];
  departmentData: any[] = [];

  roleCount: string = '';
  departmentCount: string = '';
  userCount: string = '';

  selectedTable: string = 'users';
  tableData: any[] = [];

  bringData() {
    this._serviceRoles.searchRoles().subscribe({
      next: (res: any) => {
        this.roleData = res.data;
        this.roleCount = res.count;
        if (this.selectedTable === 'roles') this.tableData = [...this.roleData];
      },
      error: (res: any) => {
        Swal.fire('Error', res.error.msg, 'error');
      },
    });

    this._serviceUsers.searchUsers().subscribe({
      next: (res: any) => {
        this.userData = res.data;
        this.userCount = res.count;
        if (this.selectedTable === 'users') this.tableData = [...this.userData];
      },
      error: (res: any) => {
        Swal.fire('Error', res.error.msg, 'error');
      },
    });

    this._serviceDepartments.searchDepartments().subscribe({
      next: (res: any) => {
        this.departmentData = res.data;
        this.departmentCount = res.count;
        if (this.selectedTable === 'departments') this.tableData = [...this.departmentData];
      },
      error: (res: any) => {
        Swal.fire('Error', res.error.msg, 'error');
      },
    });
  }

  showTable(type: string) {
    this.selectedTable = type;
    if (type === 'users') this.tableData = [...this.userData];
    if (type === 'departments') this.tableData = [...this.departmentData];
    if (type === 'roles') this.tableData = [...this.roleData];
  }

  ngOnInit(): void {
    this.bringData();
  }
}
