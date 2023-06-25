import { Component, OnDestroy, OnInit } from '@angular/core';
import { ModalService } from "src/app/core/services";

@Component({
  selector: 'app-auth-modal',
  templateUrl: './auth-modal.component.html',
  styleUrls: ['./auth-modal.component.scss']
})
export class AuthModalComponent implements OnInit, OnDestroy {

  constructor(
    private modalService: ModalService,
  ) { }


  ngOnInit(): void {
    this.modalService.register('auth');
  }

  ngOnDestroy(): void {
    this.modalService.unregister('auth');
  }

}
