import { Component, OnInit } from '@angular/core';

//Servicios
import { EntidadesService } from './../entidades.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	
  constructor(public _servicio:EntidadesService) {
    setInterval(() => _servicio.tick(), 1000);
  }

  ngOnInit(): void {
  }

}
