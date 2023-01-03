import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})

export class QuienesSomosService {
  private rutas:Ruta[]=[
    {
      ciudadOrigen: "Machala",
      ciudadDestino: "Buenos Aires",
      precio: 350.52,
      descrip: "Descripcion1",
      tipo: "Interno"
    },
    {
      ciudadOrigen: "Quito",
      ciudadDestino: "Cuenca",
      precio: 312.52,
      descrip: "Descripcion2",
      tipo: "Interno"
    },
    {
      ciudadOrigen: "Cuenca",
      ciudadDestino: "Manta",
      precio: 150.52,
      descrip: "Descripcion3",
      tipo: "Externo"
    },
    {
      ciudadOrigen: "Ambato",
      ciudadDestino: "Guayaquil",
      precio: 210.52,
      descrip: "Descripcion4",
      tipo: "Interno"
    },
    {
      ciudadOrigen: "Loja",
      ciudadDestino: "Portoviejo",
      precio: 250.80,
      descrip: "Descripcion5",
      tipo: "Externo"
    },
    {
      ciudadOrigen: "Machala",
      ciudadDestino: "Ibarra",
      precio: 512.52,
      descrip: "Descripcion6",
      tipo: "Externo"
    },
    {
      ciudadOrigen: "Machala",
      ciudadDestino: "Loja",
      precio: 8.51,
      descrip: "Descripcion7",
      tipo: "Externo"
    },
    {
      ciudadOrigen: "Quevedo",
      ciudadDestino: "Cuenca",
      precio: 260.92,
      descrip: "Descripcion8",
      tipo: "Interno"
    },
    {
      ciudadOrigen: "Babahoyo",
      ciudadDestino: "Tulcán",
      precio: 360.12,
      descrip: "Descripcion9",
      tipo: "Interno"
    },
    {
      ciudadOrigen: "Esmeraldas",
      ciudadDestino: "Milagro",
      precio: 420.60,
      descrip: "Descripcion10",
      tipo: "Externo"
    }
  ];messageService: any;
  ;
  
  //DEVUELVE EL ARREGLO
  getRutas(){
    return this.rutas;
  }
  
  getRuta(idx:number){
  return this.rutas[idx];
  }
  constructor() {
    console.log("Servicio listo para usar..");
   }
}
export interface Ruta{
  ciudadOrigen: string;
  ciudadDestino: string;
  precio: number;
  descrip: string;
  tipo: string;
}