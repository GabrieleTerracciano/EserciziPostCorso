import { Injectable } from '@angular/core';
import { User } from '../models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[] = [
    {
      id: 1,
      name: 'Franco',
      email: 'Fran@co.com',
      role: 'admin'
    },
    {
      id: 2,
      name: 'Gianna',
      email: 'Gian@na.com',
      role: 'user'
    },
    {
      id: 3,
      name: 'Giacomo',
      email: 'Giac@omo.com',
      role: 'user'
    },
    {
      id: 4,
      name: 'Anna',
      email: 'An@na.com',
      role: 'user'
    }
  ]

  constructor() { }

  getUsers() {
    return this.users;
  }

  getUser(id: number) {
    return this.users.find(user => user.id === id);
  }
}
