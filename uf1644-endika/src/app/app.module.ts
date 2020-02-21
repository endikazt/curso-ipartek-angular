import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { FormularioComponent } from './paginas/formulario/formulario.component';
import { DetalleComponent } from './paginas/detalle/detalle.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    FormularioComponent,
    DetalleComponent,
    NavbarComponent
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
