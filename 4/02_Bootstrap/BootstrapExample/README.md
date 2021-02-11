## Instalar la libreria de Bootstrap en el proyecto:
Instalar libreria de CSS solo:
```
  npm install bootstrap --save
```
Instalar libreria de JS solo:
```
  npm install ngx-bootstrap --save
```
Instalar libreria de CSS y JS:
```
  npm install bootstrap ngx-bootstrap --save
```
## Importar el CSS
Opcion 1: En el fichero .angular-cli.json:
```
    "styles": [
        "../node_modules/bootstrap/dist/css/bootstrap.min.css",
        "styles.scss"
    ]
```    
Opcion 2: Importar directamente en el fichero "src/style.css" o "src/style.scss":
```
    @import '~bootstrap/dist/css/bootstrap.min.css';
```

## Agregar los modulos necesarios
Agregar los modulos de ngx-bootstrap en el fichero "app.module.ts". 
Por ejemplo, supongamos que queremos usar los componentes Dropdown, Tooltip and Modal:

    import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
    import { TooltipModule } from 'ngx-bootstrap/tooltip';
    import { ModalModule } from 'ngx-bootstrap/modal';

    @NgModule({
    imports: [
        BrowserModule,
        BsDropdownModule.forRoot(),
        TooltipModule.forRoot(),
        ModalModule.forRoot()
    ],
    // ...
    })
    export class AppBootstrapModule {}

## DropDown
Para el componente DropDown, ngx-bootstrap proporciona algunas directivas:

  {1}:dropdown : Añadir esta directiva con el elemento class="dropdown".
  {2}:dropdownToggle : usar esta directiva en vez de class="dropdown-toggle" y data-toggle="dropdown" de Bootstrap.
  {3}:*dropdownMenu : Añadir esta directiva con el elemento class="dropdown".

```
    <div class="dropdown" dropdown> <!-- {1} -->
      <button dropdownToggle class="btn btn-secondary" type="button" id="dropdownMenuButton"
        aria-haspopup="true" aria-expanded="false"> <!-- {2} -->
        Componente DropDown
      </button>
      <div *dropdownMenu class="dropdown-menu"> <!-- {3} -->
        <li><a class="dropdown-item" href="#">Opcion 1</a></li>
        <li><a class="dropdown-item" href="#">Opcion 2</a></li>
        <li><a class="dropdown-item" href="#">Opcion 3</a></li>
      </div>
    </div>

```
## Tooltip
Para el componente Tooltip, ngx-bootstrap proporciona la directiva de tooltip:

  {1}: tooltip = Se utiliza esta directiva en vex de data-toggle="tooltip" title="titulo"

```
  <button type="button" class="btn btn-primary" data-placement="top" tooltip="Mensaje tooltip"> <!-- {1} -->
    Componente Tooltip
  </button>
```
## Modal
Se define el boton que abrira el modal. 
Se utiliza angular para asociar y responder al evento onClick() con el metodo "abrirModal(template)". Se para como parametro la plantilla ng definida mas abajo
```
  <button type="button" class="btn btn-info" (click)="abrirModal(template)">Componente Modal</button>
```
Se define una plantilla "ng-template" que contien el Modal:
```
    <ng-template #template>
      <div class="modal-header">
        <h4 class="modal-title pull-left">Titulo del Modal</h4>
        <button type="button" class="close pull-right" aria-label="Close" (click)="modalRef.hide()">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        Cuerpo del modal
      </div>
    </ng-template>
```
La plantilla definida en el HTML está siendo referenciada como una plantilla de variable local. Cuando el usuario hace clic en el botón, se llama al metodo "abrirModal()" que esta asociado al evento onClick() y se pasa como parametro la referencia de la plantilla. 

Se puede tener tantos modales como se necesite, simplemente hay que dar diferentes nombres a las plantillas locales definidas en el HTML.

Se define el metodo "abrirModal()" para arir el Modal, para ello agregar código TypeScript en nuestro fichero "app.component.ts":
```
  // Modulos para el Modal
  import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
  import { TemplateRef } from '@angular/core';

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
```
Dentro del metodo "abrirModal()":

  - Se llama al metodo "show(template)" del objeto "modalService" para lanzar/abrir el Modal. 
    Se pasa como para parametro la referencia del modal que tiene que mostrar.

  - Se guarda la referencia de la plantilla en la variable "modalRef".
    La variable "modalRef" se utiliza para llamar al metodo nativo hide() de JS cuando el usuario hace click en el boton de cerrar del Modal. Este evento esta definido con angular.
    (click)="modalRef.hide()"
