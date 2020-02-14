import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Fruta } from 'src/app/model/frutas.model';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {

  @Input() frutas: Array<Fruta>;
  @Output() pasameFrutaEvento = new EventEmitter();
 
  frutaSeleccionada: Fruta;



  constructor() {

      this.frutas = new Array<Fruta>();
      this.frutaSeleccionada = new Fruta();


  }

  ngOnInit() {
  }


  // Cuando se lance el evento click en la plantilla llamaremos a este método
  lanzar( event, fruta) {
      // Usamos el método emit
      console.debug('lanzar evento al padre');
      this.frutaSeleccionada = fruta;
      this.pasameFrutaEvento.emit( this.frutaSeleccionada );
  }


}
