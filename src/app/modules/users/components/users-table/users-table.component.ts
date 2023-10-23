import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/core/models/user-model';
import { UsersFormComponent } from '../users-form/users-form.component';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss']
})
export class UsersTableComponent {
  @Input()
  dataSource: User[] = [];

  displayedColumns = ['fullName', 'email', 'actions'];

}
