import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/app/core/models/user-model';

@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.scss']
})
export class UsersFormComponent {
  userForm: FormGroup;

  constructor(
    private fb: FormBuilder, 
    public mdr: MatDialogRef<UsersFormComponent>,
    @Inject(MAT_DIALOG_DATA) public user?: User) {

    this.userForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      // documentNumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      // phoneNumber: ['', [Validators.required]],
    })

    if (this.user) {
      this.userForm.patchValue(this.user);
    }
  }

  onSubmit(): void {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
    } else {
      this.mdr.close(this.userForm.value);
    }
  }
  

}
