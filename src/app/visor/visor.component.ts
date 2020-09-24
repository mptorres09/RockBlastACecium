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

	viewer: any;
	poligonoPrincipal: any;
	itemActual: any;
	xActual: number;
	yActual: number;

    constructor(public _servicio:EntidadesService) { 
  		setInterval(() => this.actualizarTiempo(), 1000);
    }

    ngOnInit(): void {
	  	this.viewer = new Cesium.Viewer("cesiumContainer",{imageryProvider:new Cesium.TileMapServiceImageryProvider({url:'assets/cesium/Assets/Textures/NaturalEarthII'}),baseLayerPicker:false,geocoder:false});

	  	this.cargarPoligonoPrincipal(Cesium.Color.RED);
	  	this.xActual = -71.25;
	  	this.yActual = -32.5;

	  	this.generarNuevaEntidad();
		this.viewer.zoomTo(this.viewer.entities); 
  	}

    actualizarTiempo():void{
	  	var tiempoVisor = this._servicio.tick();

	  	if(tiempoVisor%2==0){
	  		this.itemActual.show = false;
	  		
	  		this.calcularNuevasCoordenadas();
	      	this.generarNuevaEntidad();
	    }
	}

  	generarNuevaEntidad():void{
  		var itemColor = Cesium.Color.fromRandom();

  		var opcion = Math.floor( (Math.random() * 6) + 1);
  		if(opcion == 1) this.dibujarCirculo(this.xActual,this.yActual,  itemColor);
  		if(opcion == 2) this.dibujarCilindro(this.xActual,this.yActual,  itemColor);
  		if(opcion == 3) this.dibujarLabel(this.xActual,this.yActual,  itemColor);
  		if(opcion == 4) this.dibujarCaja(this.xActual,this.yActual,  itemColor);
  		if(opcion == 5) this.dibujarElipse(this.xActual,this.yActual,  itemColor);
  		if(opcion == 6) this.dibujarMarcadorPunto(this.xActual,this.yActual,  itemColor);

  		this.actualizarColorPoligono(itemColor);
  	}

  	calcularNuevasCoordenadas():void{
		if(this.xActual == -71.25 &&  this.yActual==-32.5){
			this.xActual = -70.75;
		}
		else if(this.xActual == -70.75 &&  this.yActual==-32.5){
			this.xActual = -70.5;
            this.yActual = -32.75;
		}
		else if(this.xActual == -70.5 &&  this.yActual==-32.75){
            this.yActual = -33.25;
		}
		else if(this.xActual == -70.5 &&  this.yActual==-33.25){
            this.xActual = -70.75;
            this.yActual = -33.5;
		}
		else if(this.xActual == -70.75 &&  this.yActual==-33.5){
            this.xActual = -71.25;
		}
		else if(this.xActual == -71.25 &&  this.yActual==-33.5){
            this.xActual = -71.5;
            this.yActual = -33.25;
		}
		else if(this.xActual == -71.5 &&  this.yActual==-33.25){
            this.yActual = -32.75;
		}
		else if(this.xActual == -71.5 &&  this.yActual==-32.75){
            this.xActual = -71.25;
            this.yActual = -32.5;
		}
	}

    cargarPoligonoPrincipal(c: any): void{
  		this.poligonoPrincipal = this.viewer.entities.add({
	  		name: "Main polygon on surface",
	  		polygon: {
			    hierarchy: Cesium.Cartesian3.fromDegreesArray([
				    -71.25,
			        -32.5,
			        -70.75,
			        -32.5,
			        -70.5,
			        -32.75,
			        -70.5,
			        -33.25,
			        -70.75,
			        -33.5,
			        -71.25,
			        -33.5,
			        -71.5,
			        -33.25,
			        -71.5,
			        -32.75,
			    ]),
	    		fill: false,
    			outline: true,
    			outlineWidth: 30,
	    		outlineColor: c,
	  		},
		});
  	}

  	actualizarColorPoligono(c: any):void{
  		var alphaValor = Math.floor( (Math.random() * 5) + 3) / 10;
  		var colorTranslucido = Cesium.Color.fromAlpha(c, alphaValor);

  		this.poligonoPrincipal.polygon.outlineColor.setValue(colorTranslucido);
  	}

    dibujarCirculo(x: number,y: number,  c: any):void{
		this.itemActual = this.viewer.entities.add({
	    position: Cesium.Cartesian3.fromDegrees(x, y, 0),
	    name: "Circle at height with outline",
	  	ellipse: {
		    semiMinorAxis: 10000.0,
		    semiMajorAxis: 10000.0,
		    material: c,
		    outline: true, // height must be set for outline to display
		},
	});
  }

	dibujarCilindro(x: number,y: number,  c: any): void{
	  	this.itemActual = this.viewer.entities.add({
		  name: "Cylinder with black outline",
		  position: Cesium.Cartesian3.fromDegrees(x, y, 10000.0),
		  cylinder: {
		    length: 20000.0,
		    topRadius: 10000.0,
		    bottomRadius: 10000.0,
		    material: c.withAlpha(0.5),
		    outline: true,
		    outlineColor: Cesium.Color.DARK_GREEN,
		  },
		});
  	}

  	dibujarLabel(x: number,y: number,  c: any): void{
	  	this.itemActual = this.viewer.entities.add({
		    position: Cesium.Cartesian3.fromDegrees(x, y),
		    label: {
		      text: "RockBlast",
		      font: "24px Helvetica",
		      fillColor: c,
		      outlineColor: Cesium.Color.BLACK,
		      outlineWidth: 2,
		      style: Cesium.LabelStyle.FILL_AND_OUTLINE,
		    },
	    });
  	}

  	dibujarCaja(x: number,y: number,  c: any): void{
  		this.itemActual = this.viewer.entities.add({
		  	name: "Box with black outline",
		  	position: Cesium.Cartesian3.fromDegrees(x, y, 5000),
		  	box: {
		    	dimensions: new Cesium.Cartesian3(10000.0, 10000.0, 10000.0),
		    	material: c.withAlpha(0.5),
		    	outline: true,
		    	outlineColor: Cesium.Color.BLACK,
		  	},
		});
  	}

  	dibujarElipse(x: number,y: number,  c: any): void{
  		this.itemActual = this.viewer.entities.add({
		  	position: Cesium.Cartesian3.fromDegrees(x, y, 0),
		  	name: "Circle at height with outline",
		  	ellipse: {
		    	semiMinorAxis: 10000.0,
		    	semiMajorAxis: 20000.0,
		    	material: c,
		    	outline: true, // height must be set for outline to display
		  	},
		});
  	}

  	dibujarMarcadorPunto(x: number,y: number,  c: any): void{
  		var pinBuilder = new Cesium.PinBuilder();

  		this.itemActual = this.viewer.entities.add({
		  	name: "Blank pin",
		  	position: Cesium.Cartesian3.fromDegrees(x, y),
		  	billboard: {
		    	image: pinBuilder.fromColor(c, 48).toDataURL(),
		    	verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
		  	},
		});
  	}

  	dibujarModelo3D(x: number,y: number,  c: any): void{
  		var position = Cesium.Cartesian3.fromDegrees(x, y, 0);
	  	this.itemActual = this.viewer.entities.add({
		    name: "Modelo 3D",
		    position: position,
		    model: {
		      uri: "assets/cesium/SampleData/models/CesiumBalloon/CesiumBalloon.glb",
		    },
	  	});
  	}

}
