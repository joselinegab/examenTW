import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { TransporteService } from 'src/app/service/transporte.service';

@Component({
  selector: 'app-detalle-rutas',
  templateUrl: './detalle-rutas.component.html',
  styleUrls: ['./detalle-rutas.component.css']
})
export class DetalleRutasComponent {
  //Arreglo
  rutaD:any={};
  index:number =0;

//recibir las rutas
constructor(private activateRoute:ActivatedRoute,
  private _rutasService:TransporteService,  private location: Location,
  private router:Router
  ) {

  this.activateRoute.params.subscribe(params=>{
    this.rutaD=_rutasService.getTrasporteBuscar(params['id']);
    console.log(this.rutaD);
  })
 }
 goBack(): void {
  this.location.back();
}

verRuta(){
  console.log(this.index);
  this.router.navigate(['/traporte',this.index])
}


}
