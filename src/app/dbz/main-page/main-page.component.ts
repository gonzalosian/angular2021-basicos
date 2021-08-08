import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  constructor() {}

  ngOnInit(): void {}

  // get personajes(): Personaje[] {
  //   return this.dbzService.personajes;
  // }

  // addNewCharacter( personaje: Personaje ){
  //   this.personajes.push(personaje);
  // }

}