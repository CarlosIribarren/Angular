# Angular5 (Udemy)
Angular 5 y TypeScript - Curso de introducción paso a paso

  - 1.- Instalar NodeJS
  - 2.- Instalar Angular5
  - 3.- Generar Proyecto base
  - 4.- Que es un componente en Angular?

## 1.- Instalar NodeJS
Desde la pagina de NodeJs, https://nodejs.org/es/, descargar e instalar la version LTS.
Para comprobar si esta instalado, ejecutar en la consola:
```
$ node --version
$ npm --version
```  
## 2.- Instalar Angular5
Angular CLI es una interface de line de comandos casi imprescindible para desarrollar con Angular, que permite:
  - Generar nuevos proyectos de Angular.
  - Generar un scaffolding basico de ficheros y directorios.
  - Prove muchos comandos para generar codigo, componentes, elementos.
  - Incluye WebPack, que pemrmite minimizar (mimificar) los fihceros del proyecto.
  - Usando WebPack + Angular CLI permite generar los builds.
  
Seguir los siguientes pasos para instalar Angular CLI:

Paso 1. Desinstalar los paquetes anteriores de Angular CLI
```
npm uninstall -g angular-cli
npm uninstall -g @angular/cli
```
Paso 2. Vaciar la caché del gestor de paquetes npm
```	
npm cache clean
```
Paso 3. Instalar la última versión de Angular CLI
```	
npm install -g @angular/cli@latest
```
Ahora ya tenemos actualizado Angular CLI y ya podemos generar un nuevo proyecto de Angular 5

## 3.- Generar Proyecto base
```
ng new NOMBRE_DEL_PROYECTO_ANGULAR5
cd NOMBRE_DEL_PROYECTO_ANGULAR5
ng serve
```
Puedes comprobar la versión de Angular que tienes dentro del fichero package.json, podrás comprobar que tienes la versión 5. En el caso de que te interese otra versión podrías modificar las versiones de tu fichero package.json y lanzar el comando npm update.

Con esto ya sabemos como actualizar Angular CLI para instalar Angular 5, como instalar el framework y como usar Angular CLI para generar un proyecto base.

Ahora tendremos disponible la webapp de Angular 5 en http://localhost:4200/

## 4.- Que es un componente en Angular?
Un componente es un trozo de aplicacion, que controla una vista y que hace algun tipo de accion.
Un componente puede ser grande, una pagina, o pequeño, un trozo de una pagina. 

Un componente tiene un decorador que permite definir atributos de ese componente.
```
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
```
Con el atributo "selector" se define el nombre del tag, que podra ir en el index.html. En este caso si miramos el fichero index.html, podremos observar como se utiliza el componente a traves del selector "app-root".
```
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>ProyectoBase</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
</head>
<body>
  <app-root></app-root>
</body>
</html>
```
Con el atributo "templateUrl" se asocia una vista, en la que se pueden hacer bindings, bucles con directivas de angular,...
Con el atributo "styleUrls" se asocia un hoja de estilos CSS.