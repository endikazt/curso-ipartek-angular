import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { PrivadoComponent } from './paginas/privado/privado.component';
import { LoginComponent } from './paginas/login/login.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { Error404Component } from './paginas/error404/error404.component';
import { HttpClientModule } from '@angular/common/http';
import { PokemonsPipe } from './pipes/pokemons.pipe';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    PrivadoComponent,
    LoginComponent,
    NavbarComponent,
    Error404Component,
    PokemonsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, // Modulo para usar formularios
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
