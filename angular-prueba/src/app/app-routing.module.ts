import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JuegoComponent } from './paginas/juego/juego.component';
import { ProductosComponent } from './paginas/productos/productos.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { ArraysComponent } from './paginas/arrays/arrays.component';
import { PokemonsRestComponent } from './paginas/pokemons-rest/pokemons-rest.component';

/**
 * Definir las rutas de la app angular
 * El path debe coincidir con el [routerLink] del componente navbar
 */

const routes: Routes = [
  { path: '',            component: InicioComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'juego', component: JuegoComponent },
  { path: 'arrays', component: ArraysComponent },
  { path: 'pokemon-rest', component: PokemonsRestComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
