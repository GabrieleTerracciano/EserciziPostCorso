import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.interface';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users: User[] = [];

  constructor(private UserSrv: UserService) {}

  ngOnInit(): void {
    this.users = this.UserSrv.getUsers();
  }
}
