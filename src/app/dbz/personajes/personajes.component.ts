import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  // @Input('personajesHijo') personajes: Personaje[] = [];
  
  constructor( private dbzService: DbzService ) { }
  
  ngOnInit(): void {
  }
  
  get personajes(){
    return this.dbzService.personajes;
  }
}
