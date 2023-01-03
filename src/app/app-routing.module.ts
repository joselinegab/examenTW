import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { BuscarRutasComponent } from './componentes/buscar-rutas/buscar-rutas.component';
import { RutasComponent } from './componentes/rutas/rutas.component';
import { QuienesSomosComponent } from './componentes/quienes-somos/quienes-somos.component';

const routes: Routes = [
  {path: 'buscar-rutas', component: BuscarRutasComponent},
  {path: 'rutas',component: RutasComponent},
  {path: 'quienes-somos',component: QuienesSomosComponent},

  {path: '**', pathMatch: 'full', redirectTo: 'quienes-somos'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
