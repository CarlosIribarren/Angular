import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';

// ngBootstrap
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


// componentes
import { ModalCookiesComponent } from './modal-cookies/modal-cookies.component';



@NgModule({
  declarations: [
    AppComponent,
    ModalCookiesComponent

  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
