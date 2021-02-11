# Generar un array en TypeScript
En el fichero "app.component.ts" generar un array:
  ```
  export class AppComponent {

    mis_notas = [{ id: 1, title: 'Nota 1', descripcion: 'Descripcion de la nota 1' },
    { id: 2, title: 'Nota 2', descripcion: 'Descripcion de la nota 2' },
    { id: 3, title: 'Nota 3', descripcion: 'Descripcion de la nota 3' },
    { id: 4, title: 'Nota 4', descripcion: 'Descripcion de la nota 1' }];

  }
  ```
# Hacer que se itere sobre el array y pinte una nota por cada elemeto
Se utiliza la directiva ngFor de angular para iterar sobre el array:
  ```
  *ngFor="let item of items"
  ```
Para cada elemento del del array, pinta un elemento "li":
El codigo html queda de la siguiente manera:
  
Ejermplo con bootstrap:
  ```
  <ul class="list-group">
    <li class="list-group-item"  *ngFor="let nota of mis_notas" >{{nota.id}}{{nota.title}}</li>
  </ul>
  ```

Ejemplo sin bootstrap:
  ```
    <ul>
      <li *ngFor="let nota of mis_notas">{{nota.id}} {{nota.title}}</li>
    </ul>
  ```
