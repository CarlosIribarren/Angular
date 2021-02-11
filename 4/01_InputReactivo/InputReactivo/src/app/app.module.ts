import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Da soporte a la propiedad ngModel en el campo de formulario
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 }