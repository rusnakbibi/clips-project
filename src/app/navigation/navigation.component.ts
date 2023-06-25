import { Component } from '@angular/core';
import { ModalService } from "../core/services";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  constructor(
    private modalService: ModalService,
  ) { }

  openModal(event: Event): void {
    event.preventDefault();

    this.modalService.toggleModal('auth');
  }
}
