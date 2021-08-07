import { Component } from '@angular/core';

@Component({
    selector: 'app-heroe',
    templateUrl: './heroe.component.html'
})
export class HeroeComponent{
    titulo: string = 'Heroe';
    
    nombre: string = 'Gonzalo';
    edad: number = 33;

    get nombreCapitalizado(): string{
        return this.nombre.toUpperCase();
    }

    obtenerDatos():string{
        return `${this.nombre} - ${this.edad}`;
    }

    cambiarNombre():void{
        this.nombre = "Gonza"
    }
}