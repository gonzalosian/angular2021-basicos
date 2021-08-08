import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';

@Injectable({
    providedIn: "root",
})
export class DbzService {

    private _personajes: Personaje[] = [
        {
          nombre: 'Pingüino',
          poder: 100
        },
        {
          nombre: 'El Espantapájaros',
          poder: 150
        },
    ];

    get personajes(): Personaje[] {
        return [...this._personajes];
    }

    constructor(){}

    agregarPersonaje( personaje: Personaje ){
        this._personajes.push( personaje );
    }
}