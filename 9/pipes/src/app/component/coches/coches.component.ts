import { Component, OnInit } from '@angular/core';

import { Coche } from '../../../model/coche';

@Component({
  selector: 'app-coches',
  templateUrl: './coches.component.html',
  styleUrls: ['./coches.component.css']
})
export class CochesComponent implements OnInit {

  coche : Coche = {
    id : 1,
    nombre : "Coche1"
  };

  name = 'Sheldon';

  myDate = new Date();

  myArray = [1, 2, 3, 4, 5, 6, 7, 8];

  numero = 1.6789;

  myNum = 0.589;

  salary = 3500.5;

  nerd = {
    name: 'Sheldon',
    alias: 'Shelly',
    song: 'Soft Kitty',
    skills: ['eidetic memory', 'makes people nervous'],
    youtubeChannel: 'Fun With Flags',
    address: {
      street: 'Elm Street',
      number: 3,
      city: 'Pasadena'
    }
  };

  promiseValue = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('data X is here!');
    }, 3000);
  });



  constructor() { }

  ngOnInit(): void {
  }

}
