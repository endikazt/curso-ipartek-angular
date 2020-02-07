import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

  productos = [{
		'id': 34,
		'nombre': 'cafe',
		'glutten': false,
		'precio': 1.46,
		'categoria': {
			'id': 1,
			'nombre': 'bebidas'
		},
		'historico': [{
				'fecha': '17/01/2020',
				'precio': 1.45
			},
			{
				'fecha': '01/12/2019',
				'precio': 1.40
			},
			{
				'fecha': '25/11/2019',
				'precio': 1.20
			}
		]
	},
	{	
		'id': 1,
		'nombre': 'leche',
		'glutten': false,
		'precio': 3.56,
		'categoria': {
			'id': 1,
			'nombre': 'bebidas'
		},
		'historico': [{
				'fecha': '17/01/2020',
				'precio': 3.45
			},
			{
				'fecha': '01/12/2019',
				'precio': 2.45
			},
			{
				'fecha': '25/11/2019',
				'precio': 3.00
			}
		]
	},
	{
		'id': 4,
		'nombre': 'galletas',
		'glutten': true,
		'precio': 4.6,
		'categoria': {
			'id': 1,
			'nombre': 'dulces'
		},
		'historico': [{
				'fecha': '17/01/2020',
				'precio': 4.5
			},
			{
				'fecha': '01/12/2019',
				'precio': 3.99
			},
			{
				'fecha': '25/11/2019',
				'precio': 4.09
			}
		]
	}
];

pSeleccionado = this.productos[0];

  // funciones

  selecionarProducto = function( producto ) {
    console.debug('hemos hecho click %o ', producto );
    this.pSeleccionado = producto;
  };

  constructor() { }

  ngOnInit() {
  }

}
