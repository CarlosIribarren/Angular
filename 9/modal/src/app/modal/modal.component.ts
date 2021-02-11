import { Component, OnInit,ViewEncapsulation, ViewChild} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  encapsulation:ViewEncapsulation.None,
  styleUrls: ['./modal.component.css']
})

export class ModalComponent implements OnInit {

  @ViewChild('contenido') contenidoElement;

  constructor(private modal:NgbModal) { }


  ngOnInit(): void {
  }
openSM(contenido){
  this.modal.open(contenido,{size:'sm'});
}
openLG(contenido){
  this.modal.open(contenido,{size:'lg'});
}
openXL(contenido){
  this.modal.open(contenido,{size:'xl'});
}
openCentrado(contenido){
  this.modal.open(contenido,{centered:true});
}
openScroll(contenido){
  this.modal.open(contenido,{scrollable:true});
}
openBackground(contenido){
  this.modal.open(contenido,{backdropClass:'azul'});
}
openWindow(contenido){
  this.modal.open(contenido,{windowClass:'oscuro'});
}

// Se obtiene el obj "elemento" utilizando
// @ViewChild('contenido') contenidoElement;
// Para ello se ha tenido que importar el modulo de :
// import { ViewChild} from '@angular/core';

openDesdeTypeScript(){
  this.modal.open(this.contenidoElement,{windowClass:'oscuro'});
}




}
