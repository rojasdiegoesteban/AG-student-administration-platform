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
  maxDate: Date;
  minDate: Date;

  constructor(
    private _fb: FormBuilder, 
    public _dialog: MatDialogRef<UsersFormComponent>,
    @Inject(MAT_DIALOG_DATA) public user?: User
  ) {
    const currentYear = new Date().getFullYear();
    this.maxDate = new Date();
    this.minDate = new Date(currentYear - 100, 0, 1);

    this.userForm = this._fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      documentNumber: ['', Validators.required],
      dob: [, Validators.required],
      gender: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required]],
      education: ['', Validators.required],
    })

    if (this.user) {
      this.userForm.patchValue(this.user);
    }
  }

  onSubmit(): void {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
    } else {
      this._dialog.close(this.userForm.value);
    }
  }

}
