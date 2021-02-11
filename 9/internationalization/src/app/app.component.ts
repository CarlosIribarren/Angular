import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  languages = ['en', 'es', 'pt'];

  constructor(public translate: TranslateService){
    translate.addLangs(this.languages);
    translate.setDefaultLang('en');

    // si el idioma del browser no es minguno de nuestros idiomas, selecionar el ingles
    const browserLang = translate.getBrowserLang();
    translate.use( this.languages.find(elemento => elemento === browserLang) ? browserLang : 'en');
  }



  ejemploObtenerTraduccionDesdeComponente(){
    return this.translate.instant('PRUEBA1.TEXTO1')
  }


}
