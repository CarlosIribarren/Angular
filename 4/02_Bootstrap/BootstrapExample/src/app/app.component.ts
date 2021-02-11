import { Component } from '@angular/core';

// Modulos para el Modal
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { TemplateRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  // Definir una variable para mantener una referencia de nuestro modal.
  // Esto se usará para cerrar el modal.
  public modalRef: BsModalRef;

  // Para mostrar el modal, se necesita el Servicio ngx-bootstrap
  constructor(private modalService: BsModalService) { }

  // Cuando el usuario hace clic en el botón para abrir la ventana emergente,
  // guardamos la referencia de la plantilla y pasamos la referencia de la plantilla al modalService.
  public abrirModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
