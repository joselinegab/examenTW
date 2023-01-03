import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component';
import { RutasComponent } from './components/rutas/rutas.component';
import { BuscarRutasComponent } from './components/buscar-rutas/buscar-rutas.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { DetalleRutasComponent } from './components/detalle-rutas/detalle-rutas.component';

@NgModule({
  declarations: [
    AppComponent,
    QuienesSomosComponent,
    RutasComponent,
    BuscarRutasComponent,
    NavbarComponent,
    HomeComponent,
    DetalleRutasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
