import { Component, OnInit } from '@angular/core';
import { PAGE } from '../../noticias';
import { NoticiasService } from 'src/app/services/noticias.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  //  noticias = PAGE.items.map(el => {
  //   return {
  //           id: el.id, 
  //           titulo: el.title,
  //           imagen : el.image, 
  //           fecha: el.publicationDate,
  //           textoCorto: el.summary,
  //           textoNoticia: el.text,
  //           };
  // });

  listaNoticias : any;

  constructor(private noticiaService : NoticiasService, 
              private router : Router) {

                this.listaNoticias = [];

               }

  ngOnInit() {

    this.cargarNoticias();

  }

  leerNoticia(id : string){

    this.router.navigate(['detalle', id]);

  }

  cargarNoticias(): void {

    this.noticiaService.getAll().subscribe(datos => {
       this.listaNoticias = datos;
      });
  }

}
