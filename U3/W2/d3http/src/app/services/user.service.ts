import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  apiURL: string = 'https://reqres.in/api/users';

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http
      .get<{ data: User[] }>(this.apiURL)
      .pipe(map((ris) => ris.data));
  }

  createUser(newUser: Partial<User>) {
    return this.http.post<User>(this.apiURL, newUser);
  }
  //In questo caso ho fatto il map nel service per filtrare già l'API in ris.data, ma non si fa sempre, in questo caso l'ho fatto per non fare il map ad ogni chiamata
  deleteUser(id: number) {
    return this.http.delete(`${this.apiURL}/${id}`);
  }
}
