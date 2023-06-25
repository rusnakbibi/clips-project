import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  ModalComponent,
  TabsContainerComponent,
  TabComponent
} from './components';


@NgModule({
  declarations: [
    ModalComponent,
    TabsContainerComponent,
    TabComponent
  ],
  exports: [
    ModalComponent,
    TabsContainerComponent,
    TabComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
