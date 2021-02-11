import { Component, OnInit,ViewEncapsulation, ViewChild} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'modal-cookies',
  templateUrl: './modal-cookies.component.html',
  encapsulation:ViewEncapsulation.None,
  styleUrls: ['./modal-cookies.component.css']
})

export class ModalCookiesComponent implements OnInit {




  /***********************
   *** cookieStorage *****
   ***********************/
  cookieStorage = {
    getItem: (item) => {
        const cookies = document.cookie
            .split(';')
            .map(cookie => cookie.split('='))
            .reduce((acc, [key, value]) => ({ ...acc, [key.trim()]: value }), {});
        return cookies[item];
    },
    setItem: (item, value) => {
        document.cookie = `${item}=${value};`
    }
}

  /***********************
   *** Atributos *********
   ***********************/

  @ViewChild('modal_cookies') modalCookies;

  storageType = this.cookieStorage;
  consentPropertyName = 'cookies_consent';

  /***********************
   *** constructor *******
   ***********************/

  constructor(private modal:NgbModal) { }

  /***********************
   *** Init **************
   ***********************/

  ngOnInit(): void {

    if (this.shouldShowPopup()) {
      setTimeout(() => {
        this.openModalCookies();
      }, 500);
  }

  }

  /***********************
   *** Funciones *********
   ***********************/

  shouldShowPopup(){
    return !this.storageType.getItem(this.consentPropertyName);
  }

  saveToStorage(){
    return this.storageType.setItem(this.consentPropertyName, true);
  }

  aceptCookies(){
    this.saveToStorage();
    this.modal.dismissAll();
  }

  openModalCookies(){
    this.modal.open(this.modalCookies,{centered:true});
  }




}
