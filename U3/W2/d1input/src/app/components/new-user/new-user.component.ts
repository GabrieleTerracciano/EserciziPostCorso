import { Component } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/models/user.interface';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss'],
})
export class NewUserComponent {
  @Output() onUserCreated = new EventEmitter<User>();

  newName = '';
  newSurname = '';
  newEta = 0;
  newSex = '';

  onAddUser() {
    // new-user-components emette l'evento di creazione utente, che sarà ricevuto dal component padre (app component in questo caso)
    this.onUserCreated.emit({
      name: this.newName,
      surname: this.newSurname,
      eta: this.newEta,
      sex: this.newSex,
    });
  }
}
