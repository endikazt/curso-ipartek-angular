import { Component, OnInit } from '@angular/core';
import { TareasService } from 'src/app/services/tareas.service';
import { Tarea } from 'src/app/model/tarea';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.scss']
})
export class TareasComponent implements OnInit {

  tareas : Array<Tarea>;
  tituloNuevo : any;
  mensaje: string;

  constructor(private serviceTareas : TareasService) {
    console.trace('TareasComponent contructor');
    this.tareas = []; // inicialSizar el array

   } // TareasComponent constructor

  ngOnInit() {
    console.trace('TareasComponent ngOntInit');

    this.cargarTareas();

  } // TareasComponent ngOnInit

  editarEstado(tarea : Tarea) {

    console.debug('click %o', tarea);

    tarea.completada = !tarea.completada;

    this.serviceTareas.modificar(tarea).subscribe( data => this.cargarTareas());

  }

  eliminarTarea(tarea : Tarea) {

    console.debug('click %o', tarea);

    if(confirm('¿Estad seguro?')){

      console.trace('Confirmada eliminacion de ' + tarea.id);

      this.mensaje = 'Tarea ' + tarea.id + ' "' + tarea.titulo + '" eliminada';

      this.serviceTareas.eliminar(tarea.id).subscribe( data => this.cargarTareas());

    } else {

      console.trace('Cancelada eliminacion de ' + tarea.id);

    }

  }

  crearTarea() : void {

    console.debug('click crear tarea %o', this.tituloNuevo);

    let nuevaTarea = new Tarea();

    if(this.tituloNuevo.trim() === "") {

      console.trace("No hay nada escrito");

      alert("No puedes crear una tare vacia >:(");

    } else {

    nuevaTarea.titulo = this.tituloNuevo;

    console.debug(nuevaTarea);

    this.serviceTareas.crear<Tarea>(nuevaTarea).subscribe( data => {
      console.trace('Nueva tarea creada en json server %o . Se reinicia tituloNuevo', data);
      this.tituloNuevo = "";
      this.cargarTareas()});
    }

  }


  cargarTareas(): void {

    this.serviceTareas.listar().subscribe(datos => {
      console.debug('esto se ejecuta de manera asincrona');
       this.tareas = datos;
      });

  }

} // TareasComponent
