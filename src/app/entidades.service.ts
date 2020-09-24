import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EntidadesService {

  totalsegundos: number;
  totalentidades: number;
  lista:any[];

  constructor() {
    this.totalsegundos = 0;
    this.totalentidades = 0;

    this.lista = [
      {
        nombre:'circulo',
        color:'rojo',
        tiempo:'00'
      },
      {
        nombre:'cuadrado',
        color:'azul',
        tiempo:'02'
      }
    ]
    console.log('funcionando servicio');
  }

  obtenerListaEntidades(){
  	return this.lista;
  }

  tick():number{
    this.totalsegundos++;
    return this.totalsegundos;
  }

  crearEntidad(): void{
    this.lista.push({
      nombre:'cuadrado',
      color:'azul',
      tiempo:'02'
    });
  }
}
