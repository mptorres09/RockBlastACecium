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
    this.lista = [];

    this.cargarLocalStore();
  }

  cargarLocalStore():void{
    try{
      this.totalsegundos = this.get("totalsegundos");
    }catch(e){
      console.log(e);
    }

    try{
      this.totalentidades = this.get("totalentidades");
    }catch(e){
      console.log(e);
    }

    try{
      this.lista = this.get("listaEntidades");
    }catch(e){
      console.log(e);
    }
  }

  set(key: string, data: any){
    try{
      localStorage.setItem(key, JSON.stringify(data) );
    }
    catch(e){
      console.log(e);
    }
  }

  get(key: string){
    try{
      return JSON.parse(localStorage.getItem(key));
    }
    catch(e){
      console.log(e);
    }
  }

  obtenerListaEntidades(){
  	return this.lista;
  }

  tick():number{
    this.totalsegundos++;
    this.set("totalsegundos", this.totalsegundos);
    return this.totalsegundos;
  }

  obtenerTotalSegundos():number{
    return this.totalsegundos;
  }

  crearEntidad(item: any): void{
    if(this.totalentidades == null) this.totalentidades = 0;
    if(this.lista == null) this.lista = new Array();

    this.totalentidades++;
    this.lista.push({
      index: this.totalentidades,
      nombre: item.nombre,
      color: item.color,
      tiempo:item.tiempo
    });

    this.set("listaEntidades", this.lista);
    this.set("totalentidades", this.totalentidades);
  }
}
