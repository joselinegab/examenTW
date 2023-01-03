import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuienesSomosComponent } from './componentes/quienes-somos/quienes-somos.component';
import { BuscarRutasComponent } from './componentes/buscar-rutas/buscar-rutas.component';
import { RutasComponent } from './componentes/rutas/rutas.component';
import { HomeComponent } from './componentes/home/home.component';
import { NavbarComponent } from './componentes/shared/navbar/navbar.component';

//Services
import { QuienesSomosService } from './services/quienes-somos.service';
import { RutaComponent } from './componentes/ruta/ruta.component';

@NgModule({
  declarations: [
    AppComponent,
    QuienesSomosComponent,
    BuscarRutasComponent,
    RutasComponent,
    HomeComponent,
    NavbarComponent,
    RutaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    QuienesSomosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
