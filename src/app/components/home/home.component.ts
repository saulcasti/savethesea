import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listadoEventosDescripcion:string[]=[
    "El ayuntamiento de Avilés, Asturias, ha organizado una batida para limpiar sus playas antes del Long Board Festival. Esta iniciativa intenta concienciar a los asistentes para que estos, reciclen los residuos durante el evento.",
    "Escuela en la playa de Vizcaya. Animamos a los colegios a contactar con nosotros para organizar talleres de concienciación ecológica.",
    "Programa de implantación de contenedores de reciclaje en las playas."
  ];

listadoEventosfotos:string[]=[
  "assets/img/Playa_de_Salinas_desde_Pinos_Altos.jpg",
  "assets/img/playas-de-vizcaya.jpg",
  "assets/img/gandia-valencia--575x323.jpg"
];

listadoEventosFechas:string[]=[
  "29/07/2018",
  "14/08/2018",
  "09/09/2018"
];

  constructor() { }

  ngOnInit() {
  }

}
