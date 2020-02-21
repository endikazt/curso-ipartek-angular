import { Component, OnInit } from '@angular/core';
import { NoticiasService } from 'src/app/services/noticias.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit {

  idNoticia : string;
  noticia : any;

  constructor(private route: ActivatedRoute, private noticiaService : NoticiasService) { 
    console.trace("DetalleComponente constructor");

    this.idNoticia = "";

    this.route.params.subscribe( params => {
      this.idNoticia = params['pId'];
    });

    this.noticia = "";

    this.noticiaService.getNoticia(this.idNoticia).subscribe(data => {
      this.noticia = data;
    });

  }

  ngOnInit() {
  }

}
