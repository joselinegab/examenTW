import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RutaComponent } from '../ruta/ruta.component';
import { Ruta, RutasService } from 'src/app/services/rutas.service';

@Component({
  selector: 'app-rutas',
  templateUrl: './rutas.component.html',
  styleUrls: ['./rutas.component.css']
})
export class RutasComponent implements OnInit {

  rutas:Ruta[]=[];

  constructor(private _rutasServicio:RutasService, private router:Router) 
  {
    
   }

  verRuta(idx:number){
console.log(idx);
this.router.navigate(['/ruta',idx])


  }
  ngOnInit(): void {
    this.rutas= this._rutasServicio.getRutas();
    console.log(this.rutas);
  }

}
