import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../interfaces/users';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})

export class serviceUsers {
  private _httpClient = inject(HttpClient);
  private apiURL = environment.appURL;

  createUser(userToCreate: Users) {
    return this._httpClient.post(`${this.apiURL}/users`, userToCreate);
  };

  searchUsers() {
    return this._httpClient.get(`${this.apiURL}/users`);
  };

  updateUser(userToUpdate: Users, id: string) {
    return this._httpClient.put(`${this.apiURL}/users/${id}`, userToUpdate);
  };

  deleteUser(id: string) {
    return this._httpClient.delete(`${this.apiURL}/users/${id}`);
  };
}
