import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-preguntas-frecuentes',
  templateUrl: './preguntas-frecuentes.component.html',
  styleUrls: ['./preguntas-frecuentes.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PreguntasFrecuentesComponent implements OnInit {
  ngOnInit(): void {
    console.log('Carga faq')
  }
}
