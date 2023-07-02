import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { provideNgxMask, NgxMaskDirective } from 'ngx-mask';

import {
  ModalComponent,
  TabsContainerComponent,
  TabComponent,
  InputComponent,
  AlertComponent
} from './components';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ModalComponent,
    TabsContainerComponent,
    TabComponent,
    InputComponent,
    AlertComponent
  ],
  exports: [
    ModalComponent,
    TabsContainerComponent,
    TabComponent,
    InputComponent,
    AlertComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgxMaskDirective,
  ],
  providers: [provideNgxMask()],
})
export class SharedModule { }
