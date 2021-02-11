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

  constructor() { }

  ngOnInit(): void {
  }

}
