import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  heroes: string[] = ['Heroe1','Heroe2','Heroe3','Heroe4','Heroe5'];
  heroeBorrado: string = '';

  borrarHeroe():void{
    this.heroes.shift();
  }

  borrarHeroeReturn(){
    this.heroeBorrado = this.heroes.shift() || '';
  }

}
