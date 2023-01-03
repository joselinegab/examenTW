import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarRutasComponent } from './components/buscar-rutas/buscar-rutas.component';
import { DetalleRutasComponent } from './components/detalle-rutas/detalle-rutas.component';
import { HomeComponent } from './components/home/home.component';
import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component';
import { RutasComponent } from './components/rutas/rutas.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'quienes-somos', component: QuienesSomosComponent },
  { path: 'rutas', component: RutasComponent },
  { path: 'buscar-rutas', component: BuscarRutasComponent },
  {path: 'detalle-rutas/:id',component: DetalleRutasComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
