import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
        <h1> {{ titulo }}: <span> {{ numero}} </span> </h1>
        <h3> La base es {{ base }} </h3>
        
        <button (click)=" sumar() " > +1 </button>
        <button (click)=" restar() " > -1 </button>
        <br>
        <button (click)=" acumular(1) " > +1 con f.acum </button>
        <button (click)=" acumular(-1) " > -1 con f.acum </button>
        <br>
        <button (click)=" acumular( base ) " > sumar con f.acum con base {{base}} </button>
        <button (click)=" acumular( -base ) " > restar con f.acum con base {{base}} </button>
    `,
})
export class ContadorComponent{
    titulo: string = 'Contador App';
    numero: number = 0;
    base: number = 5;
  
    sumar(){
      this.numero += 1;
    }
    restar(){
      this.numero -= 1;
    }
  
    acumular( num: number ){
      this.numero += num;
    }
}