import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

//Servicios
import { EntidadesService } from './entidades.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { VisorComponent } from './visor/visor.component';
import { EntidadesComponent } from './entidades/entidades.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { CesiumDirective } from './cesium.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VisorComponent,
    EntidadesComponent,
    SidenavComponent,
    CesiumDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [EntidadesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
