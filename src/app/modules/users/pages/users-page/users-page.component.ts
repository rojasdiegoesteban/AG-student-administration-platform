import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UsersFormComponent } from '../../components/users-form/users-form.component';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent {

  constructor(private matDialog: MatDialog){}

  operUsersForm(): void {
    this.matDialog.open(UsersFormComponent)
  }

}
