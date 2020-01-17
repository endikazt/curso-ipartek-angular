import { Component } from '@angular/core';

// Componente principal que se encarga de arrancar la app

/**
 * 
 * SELECTOR: nombre de la etiquesta para inyectar componentes HTML
 * TEMPLATEURL: vista del HTML
 * styleUrl: estilos para la vista formato css
 * 
 */

@Component({
  selector: 'app-root', 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  //variable
  title = 'angular-prueba';

  productos = [{
		"id": 1,
    "nombre": "cafe",
    "gluten": false,
    "precio": 1.40,
    "imagen": "https://as.com/deporteyvida/imagenes/2018/02/16/portada/1518787733_123354_1518787790_noticia_normal.jpg",
    "categoria" : {

      "id": 1,
      "nombre": "bebidas"
      
    },
    "historico": [
      {
        "fecha" : "17/01/2020",
        "precio": 1.45
      },
      {
        "fecha" : "20/01/2020",
        "precio": 1.40
      },
      {
        "fecha" : "30/01/2020",
        "precio": 1.70
      }
    ]
	},
	{
		"id": 2,
    "nombre": "colacao",
    "gluten": true,
    "precio": 1.40,
    "imagen": "https://www.merca2.es/wp-content/uploads/2019/10/cola-cao.jpg",
    "categoria" : {

      "id": 1,
      "nombre": "bebidas"
      
    },
    "historico": [
      {
        "fecha" : "17/01/2020",
        "precio": 1.60
      },
      {
        "fecha" : "20/01/2020",
        "precio": 1.50
      },
      {
        "fecha" : "30/01/2020",
        "precio": 1.70
      }
    ]
	},
	{
		"id": 3,
    "nombre": "te",
    "gluten": false,
    "precio": 1.40,
    "imagen": "https://elegirhoy.com/uploads/fichas-eventos-imagenes/te-corazon.jpg",
    "categoria" : {

      "id": 1,
      "nombre": "bebidas"
      
    },
    "historico": [
      {
        "fecha" : "17/01/2020",
        "precio": 1.20
      },
      {
        "fecha" : "20/01/2020",
        "precio": 1.10
      },
      {
        "fecha" : "30/01/2020",
        "precio": 1.30
      }
    ]
  }];
  
  pSeleccionado = this.productos[0];

  seleccionarProducto = function( producto ){

    console.log("Hemos hecho click %o", producto);

    this.pSeleccionado = producto;

  }

}
