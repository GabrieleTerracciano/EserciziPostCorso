import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from './models/user.interface';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'd3http';

  sub!: Subscription;
  users: User[] | undefined;

  constructor(private usersSrv: UserService) {}

  ngOnInit(): void {
    this.recoveryUsers();
  }

  recoveryUsers() {
    this.sub = this.usersSrv.getUsers().subscribe((results) => {
      this.users = results;
      console.log(this.users);
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
