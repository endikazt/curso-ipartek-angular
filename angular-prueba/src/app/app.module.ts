import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BotonComponent } from './componentes/boton/boton.component';
import { PruebaComponent } from './componentes/prueba/prueba.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { ArraysComponent } from './paginas/arrays/arrays.component';
import { JuegoComponent } from './paginas/juego/juego.component';
import { ProductosComponent } from './paginas/productos/productos.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { PokemonsRestComponent } from './paginas/pokemons-rest/pokemons-rest.component';
import { EstilosComponent } from './paginas/estilos/estilos.component';
import { DirectivasComponent } from './paginas/directivas/directivas.component';
import { HelloDirective } from './directives/hello.directive';
import { SubrayarDirective } from './directives/subrayar.directive';
import { FiltrosComponent } from './paginas/filtros/filtros.component';
import { AnimalesPipe } from './pipes/animales.pipe';
import { RecetasComponent } from './paginas/recetas/recetas.component';
import { RecetaFiltroPipe } from './pipes/receta-filtro.pipe';
import { Error404Component } from './paginas/error404/error404.component';
import { SaludarComponent } from './paginas/saludar/saludar.component';
import { TareasComponent } from './paginas/tareas/tareas.component';
import { PrivadoComponent } from './paginas/privado/privado.component';
import { LoginComponent } from './paginas/login/login.component';
import { ComprasComponent } from './paginas/compras/compras.component';
import { DetalleComponent } from './paginas/compras/detalle/detalle.component';
import { CarritoComponent } from './paginas/compras/carrito/carrito.component';
import { ListadoComponent } from './paginas/compras/listado/listado.component';

@NgModule({
  declarations: [
    AppComponent,
    BotonComponent,
    PruebaComponent,
    InicioComponent,
    ArraysComponent,
    JuegoComponent,
    ProductosComponent,
    NavbarComponent,
    PokemonsRestComponent,
    EstilosComponent,
    DirectivasComponent,
    HelloDirective,
    SubrayarDirective,
    FiltrosComponent,
    AnimalesPipe,
    RecetasComponent,
    RecetaFiltroPipe,
    Error404Component,
    SaludarComponent,
    TareasComponent,
    PrivadoComponent,
    LoginComponent,
    ComprasComponent,
    DetalleComponent,
    CarritoComponent,
    ListadoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule, // Modulo para usar formularios
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
