import { Component, OnInit } from '@angular/core';

//Servicios
import { EntidadesService } from './../entidades.service';

@Component({
  selector: 'app-entidades',
  templateUrl: './entidades.component.html',
  styleUrls: ['./entidades.component.css']
})
export class EntidadesComponent implements OnInit {

  lista:any[] = []

  constructor(public _servicio:EntidadesService) {
  	this.lista = _servicio.obtenerListaEntidades();
  }

  ngOnInit(): void {
  }

}
