import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { FormularioComponent } from './paginas/formulario/formulario.component';
import { DetalleComponent } from './paginas/detalle/detalle.component';


const routes: Routes = [
  { path: '',            component: InicioComponent },
  { path: 'formulario', component: FormularioComponent },
  { path: 'detalle/:pId', component: DetalleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
