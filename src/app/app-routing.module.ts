import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarRutasComponent } from './componentes/buscar-rutas/buscar-rutas.component';
import { HomeComponent } from './componentes/home/home.component';
import { QuienesSomosComponent } from './componentes/quienes-somos/quienes-somos.component';
import { RutasComponent } from './componentes/rutas/rutas.component';
import { RutaComponent } from './componentes/ruta/ruta.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'quienes-somos', component: QuienesSomosComponent },
  { path: 'rutas', component: RutasComponent },
  { path: 'ruta', component: RutaComponent },
  { path: 'buscar-rutas', component: BuscarRutasComponent },
  {path: '**', pathMatch: 'full', redirectTo: 'home'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }