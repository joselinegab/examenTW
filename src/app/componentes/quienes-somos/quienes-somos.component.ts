import { Component, OnInit } from '@angular/core';
import { QuienesSomosService } from '../../services/quienes-somos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quienes-somos',
  templateUrl: './quienes-somos.component.html',
  styleUrls: ['./quienes-somos.component.css']
})
export class QuienesSomosComponent implements OnInit {
  rutas:Ruta[]=[];

  constructor(private _rutasService:QuienesSomosService, private router:Router) 
  {
    
   }
   verRuta(idx:number){
    console.log(idx);
    
    
    this.router.navigate(['/ruta',idx])
      }
      ngOnInit(): void {
        this.rutas= this._rutasService.getRutas();
        console.log(this.rutas);
      }

}
