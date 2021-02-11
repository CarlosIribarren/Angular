import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  mis_notas = [{ id: 1, title: 'Nota 1', descripcion: 'Descripcion de la nota 1' },
  { id: 2, title: 'Nota 2', descripcion: 'Descripcion de la nota 2' },
  { id: 3, title: 'Nota 3', descripcion: 'Descripcion de la nota 3' },
  { id: 4, title: 'Nota 4', descripcion: 'Descripcion de la nota41' }];

}
