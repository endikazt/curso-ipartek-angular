import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'

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
    DirectivasComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule, // Modulo para usar formularios
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
