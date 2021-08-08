import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  // @Output() onNewCharacter: EventEmitter<Personaje> = new EventEmitter();

  constructor( private dbzService: DbzService ) { }

  ngOnInit(): void {
  }

  agregar(){
    if( this.nuevo.nombre.trim().length===0 || this.nuevo.poder<=0 )
      return;
    
    // this.onNewCharacter.emit( this.nuevo );
    this.dbzService.agregarPersonaje( this.nuevo );

    this.inicializarNuevo();
  }

  inicializarNuevo(){
    this.nuevo = { nombre: '', poder: 0 };
  }

}
