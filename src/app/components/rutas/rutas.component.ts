import { Component } from '@angular/core';
import { transporte, TransporteService } from 'src/app/service/transporte.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rutas',
  templateUrl: './rutas.component.html',
  styleUrls: ['./rutas.component.css']
})
export class RutasComponent {
rutas:transporte[]=[];
filtro: string[] = ['todos', 'interno', 'externo'];


constructor(private _trasporte:TransporteService, private router:Router)
{

 }

 verRutas(idx:number){
console.log(idx);
this.router.navigate(['/detalle-rutas',idx])
 }

 ngOnInit(): void {
this.rutas= this._trasporte.getTrasporte();
  console.log(this.rutas);
}
filtrar() {
  this.filtro = this.filtro.filter((value, index, array) => {});



}
