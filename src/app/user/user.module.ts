import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from "../shared/shared.module";

import { AuthModalComponent } from './auth-modal/auth-modal.component';

@NgModule({
  declarations: [
    AuthModalComponent
  ],
  exports: [AuthModalComponent],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class UserModule { }
