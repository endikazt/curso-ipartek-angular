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
  modoEdicion: boolean;

  constructor(private serviceTareas : TareasService) {
    console.trace('TareasComponent contructor');
    this.tareas = []; // inicialSizar el array
    this.tituloNuevo = "";
    this.mensaje = "";
    this.modoEdicion = false;

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

      this.serviceTareas.eliminar(tarea.id).subscribe( data => {
        
        this.mensaje = 'Tarea ' + tarea.id + ' "' + tarea.titulo + '" eliminada';
        
        this.cargarTareas()});

    } else {

      console.trace('Cancelada eliminacion de ' + tarea.id);

    }

  }

  crearTarea() : void {

    console.debug('click crear tarea %o', this.tituloNuevo);

    let nuevaTarea = new Tarea();

    if(this.tituloNuevo.trim() === "") {

      console.trace("No hay nada escrito");

       this.mensaje = "No puedes crear una tare vacia >:(";

    } else {

    this.mensaje = "";

    nuevaTarea.titulo = this.tituloNuevo;

    console.debug(nuevaTarea);

    this.serviceTareas.crear(nuevaTarea).subscribe( data => {
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

  cambiarTitulo(tarea: Tarea): void {
    console.debug('loose focus para cambiar titulo %o', tarea);
    this.serviceTareas.modificar(tarea).subscribe( () => this.cargarTareas() );

  }// cambiarTitulo

} // TareasComponent
