import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { AuthModalComponent } from './auth-modal/auth-modal.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AuthModalComponent,
    LoginComponent,
    RegisterComponent
  ],
  exports: [AuthModalComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
  ]
})
export class UserModule { }
