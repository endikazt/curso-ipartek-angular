import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JuegoComponent } from './paginas/juego/juego.component';
import { ProductosComponent } from './paginas/productos/productos.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { ArraysComponent } from './paginas/arrays/arrays.component';
import { PokemonsRestComponent } from './paginas/pokemons-rest/pokemons-rest.component';
import { EstilosComponent } from './paginas/estilos/estilos.component';
import { DirectivasComponent } from './paginas/directivas/directivas.component';
import { FiltrosComponent } from './paginas/filtros/filtros.component';
import { RecetasComponent } from './paginas/recetas/recetas.component';
import { Error404Component } from './paginas/error404/error404.component';
import { SaludarComponent } from './paginas/saludar/saludar.component';
import { TareasComponent } from './paginas/tareas/tareas.component';
import { PrivadoComponent } from './paginas/privado/privado.component';
import { LoginGuard } from './guards/login.guard';
import { LoginComponent } from './paginas/login/login.component';
import { ComprasComponent } from './paginas/compras/compras.component';

/**
 * Definir las rutas de la app angular
 * El path debe coincidir con el [routerLink] del componente navbar
 */

const routes: Routes = [
  { path: '',            component: InicioComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'juego', component: JuegoComponent },
  { path: 'arrays', component: ArraysComponent },
  { path: 'pokemon-rest', component: PokemonsRestComponent },
  { path: 'estilos', component: EstilosComponent},
  { path: 'directivas', component: DirectivasComponent},
  { path: 'filtros', component: FiltrosComponent},
  { path: 'recetas', component: RecetasComponent},
  { path: 'tareas', component: TareasComponent},
  { path: 'saludar/:pNombre', component: SaludarComponent},
  { path: 'login', component: LoginComponent},
  { path: 'compras', component: ComprasComponent},

  //Vamos a proteger esta ruta con un GUARD

  { path: 'privado', component: PrivadoComponent, canActivate: [LoginGuard]},
  { path: '**', component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
