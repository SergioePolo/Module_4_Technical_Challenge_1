import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Roles } from '../interfaces/roles';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class serviceRoles {
  private _httpClient = inject(HttpClient);
  private apiURL = environment.appURL;

  createRole(roleToCreate: Roles) {
    return this._httpClient.post(`${this.apiURL}/roles`, roleToCreate);
  };

  searchRoles() {
    return this._httpClient.get(`${this.apiURL}/roles`);
  };

  updateRole(roleToUpdate: Roles, id: string) {
    return this._httpClient.put(`${this.apiURL}/roles/${id}`, roleToUpdate);
  };

  deleteRole(id: string) {
    return this._httpClient.delete(`${this.apiURL}/roles/${id}`);
  };
}
