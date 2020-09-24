import { Component, OnInit } from '@angular/core';

//Servicios
import { EntidadesService } from './../entidades.service';

declare var Cesium;

@Component({
  selector: 'app-visor',
  templateUrl: './visor.component.html',
  styleUrls: ['./visor.component.css']
})
export class VisorComponent implements OnInit {

  constructor(public _servicio:EntidadesService) { 
  	//setInterval(() => _servicio.tick(), 1000);
  }

  ngOnInit(): void {
  	var viewer = new Cesium.Viewer("cesiumContainer",{imageryProvider:new Cesium.TileMapServiceImageryProvider({url:'assets/cesium/Assets/Textures/NaturalEarthII'}),baseLayerPicker:false,geocoder:false});

  	var czml = [
  	{
    	id: "document",
	    name: "CZML Geometries: Polygon",
	    version: "1.0",
  	},
  	{
    id: "poligono",
    name: "poligono",
    polygon: {
      positions: {
        cartographicDegrees: [
          -71.25,
          -32.5,
          0,
          -70.75,
          -32.5,
          0,
          -70.5,
          -32.75,
          0,
          -70.5,
          -33.25,
          0,
          -70.75,
          -33.5,
          0,
          -71.25,
          -33.5,
          0,
          -71.5,
          -33.25,
          0,
          -71.5,
          -32.75,
          0,
        ],
      },
      height: 0,
      extrudedHeight: 0,
      fill: false,
      outline: true,
      outlineColor: {
        rgba: [255, 255, 0, 255],
      },
    },
  }];

  	var dataSourcePromise = Cesium.CzmlDataSource.load(czml);
	viewer.dataSources.add(dataSourcePromise);
	viewer.zoomTo(dataSourcePromise);
  }

}
