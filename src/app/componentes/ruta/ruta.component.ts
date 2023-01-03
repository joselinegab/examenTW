import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { RutasService } from 'src/app/services/rutas.service';

@Component({
  selector: 'app-ruta',
  templateUrl: './ruta.component.html',
  styleUrls: ['./ruta.component.css']
})
export class RutaComponent implements OnInit {
  ruta:any={};
  index:number =0;


  //Recibir parámetos por rutas
  constructor(private activateRoute:ActivatedRoute,
    private _rutasServicio:RutasService,  private location: Location,
    private router:Router
    ) {
      
    this.activateRoute.params.subscribe(params=>{
      this.ruta=_rutasServicio.getRuta(params['id']);
      console.log(this.ruta);
    })
   }
   goBack(): void {
    this.location.back();
  }

  verRuta(){
    console.log(this.index);
    this.router.navigate(['/ruta', this.index])
  }

  ngOnInit(): void {
  }

}
