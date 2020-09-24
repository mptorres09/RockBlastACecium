import { Component, OnInit } from '@angular/core';

//Servicios
import { EntidadesService } from './../entidades.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	
  cantidadEntidades:number;
  totalSegundos:number;

  constructor(public _servicio:EntidadesService) {
    
  }

  ngOnInit(): void {
  }

}
