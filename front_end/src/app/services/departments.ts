import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Departments } from '../interfaces/departments';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})

export class serviceDepartments {
  private _httpClient = inject(HttpClient);
  private apiURL = environment.appURL;

  createDepartment(departmentToCreate: Departments) {
    return this._httpClient.post(`${this.apiURL}/departments`, departmentToCreate);
  };

  searchDepartments() {
    return this._httpClient.get(`${this.apiURL}/departments`);
  };

  updateDepartment(departmentToUpdate: Departments, id: string) {
    return this._httpClient.put(`${this.apiURL}/departments/${id}`, departmentToUpdate);
  };

  deleteDepartment(id: string) {
    return this._httpClient.delete(`${this.apiURL}/departments/${id}`);
  };
}
