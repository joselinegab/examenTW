import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuienesSomosComponent } from './componentes/quienes-somos/quienes-somos.component';
import { BuscarRutasComponent } from './componentes/buscar-rutas/buscar-rutas.component';
import { RutasComponent } from './componentes/rutas/rutas.component';
import { HomeComponent } from './componentes/home/home.component';
import { NavbarComponent } from './componentes/shared/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    QuienesSomosComponent,
    BuscarRutasComponent,
    RutasComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
