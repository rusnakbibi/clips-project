import { Component, Input, OnInit, ElementRef } from '@angular/core';


import { ModalService } from "src/app/core/services";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() modalID: string = '';

  constructor(
    protected modalService: ModalService,
    public el: ElementRef,
  ) { }
  ngOnInit(): void {
    document.body.appendChild(this.el.nativeElement);
  }


  closeModal(): void {
    this.modalService.toggleModal(this.modalID);
  }
}
