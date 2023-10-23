import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UsersFormComponent } from '../../components/users-form/users-form.component';
import { User } from 'src/app/core/models/user-model';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent {

  // testUser: User = {
  //   firstName: 'Diego',
  //   lastName: 'Rojas',
  //   documentNumber: 31698332,
  //   email: 'rojasdie@yahoo.com',
  //   phoneNumber: 1162231168
  // }

  users: User[] = [
    {
      firstName: 'Diego',
      lastName: 'Rojas',
      documentNumber: 31698332,
      email: 'rojasdie@yahoo.com',
      phoneNumber: 1162231168
    }
  ]


  constructor(private matDialog: MatDialog) { }

  openUsersForm(): void {
    this.matDialog
      .open(UsersFormComponent)
      .afterClosed()
      .subscribe({
        next: (v) => {
          console.log('VALOR: ', v);
          if (!!v) {
            this.users = [
              ...this.users,
              {
                ...v
              },
            ];
          }
        },
      });
  }

}
