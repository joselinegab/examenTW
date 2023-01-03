import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransporteService {
//creacion de arreglo
  private ruta: transporte[]=[
    {
      ciudadOrigen: "Cuenca",
      cuidadDestino: "Manta" ,
      precioRuta: 37.00,
      descripcion: "Ruta de 5 horas de duración a través de la Sierra",
      tipos: "interno"
    },
    {
      ciudadOrigen: "Quito",
      cuidadDestino: "Guayaquil",
      precioRuta: 45.50,
      descripcion: "Ruta de 4 horas de duración a través de la cordillera de los Andes",
      tipos: "interno"
    },
    {
      ciudadOrigen: "Loja",
      cuidadDestino: "Esmeraldas",
      precioRuta: 50.00,
      descripcion: "Ruta de 6 horas de duración a través del Amazonas",
      tipos: "interno"
    },
    {
      ciudadOrigen: "Guayaquil",
      cuidadDestino: "Lima",
      precioRuta: 120.00,
      descripcion: "Ruta de transporte de 24 horas de duración a través de la costa del Pacífico",
      tipos: "externo"
    },

    {
      ciudadOrigen: "Quito",
      cuidadDestino: "El Oro",
      precioRuta: 20.00,
      descripcion: "Ruta de transporte de 9 horas de duración a través de la Panamericana",
      tipos: "interno"
    },
    {
      ciudadOrigen: "Cuenca",
      cuidadDestino: "Aguas verdes",
      precioRuta: 60.00,
      descripcion: "Ruta de transporte de 15 horas de duración a través de los Andes",
      tipos: "externo"
    },

   {
      ciudadOrigen: "Loja",
      cuidadDestino: "Imbabura",
      precioRuta: 30.00,
      descripcion: "Ruta de transporte de 10 horas de duración a través de los Andes",
      tipos: "interno"
    },
    {
      ciudadOrigen: "Cuenca",
      cuidadDestino: "Manta",
      precioRuta: 37.00,
      descripcion: "Ruta de 5 horas de duración a través de la Sierras",
      tipos: "interno"
    },
    {
      ciudadOrigen: "Loja",
      cuidadDestino: "Esmeraldas",
      precioRuta: 50.00,
      descripcion: "Ruta de 6 horas de duración a través del Amazonas",
      tipos: "interno"
    },
    {
      ciudadOrigen: "Quito",
      cuidadDestino: "Rio de Janeiro",
      precioRuta: 450.00,
      descripcion: "Ruta de transporte de 28 horas de duración a través de la Amazonía",
      tipos: "interno"
    },

  ];
  messageService: any;
  getTrasporte(){
    return this.ruta;
  }

  getTrasporteBuscar(idx:number){
    return this.ruta[idx];
    }

  getTrasporteFiltrado(tipo: string) {
      return this.ruta.filter(ruta => ruta.tipos === tipo);
    }

  constructor() {
    console.log("Servicio listo para usar..");
   }
}

export interface transporte{
  ciudadOrigen: string;
  cuidadDestino: string;
  precioRuta:number;
  descripcion:string;
  tipos:string
}
