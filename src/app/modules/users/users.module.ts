import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersFormComponent } from './components/users-form/users-form.component';
import { UsersTableComponent } from './components/users-table/users-table.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { UsersPageComponent } from './pages/users-page/users-page.component';



@NgModule({
  declarations: [
    UsersFormComponent,
    UsersTableComponent,
    UsersPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule
  ],
  exports: [
    UsersTableComponent,
    UsersPageComponent
  ]
})
export class UsersModule { }
