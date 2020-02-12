import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { LoginComponent } from './paginas/login/login.component';
import { LoginGuard } from './guards/login.guard';
import { PrivadoComponent } from './paginas/privado/privado.component';
import { Error404Component } from './paginas/error404/error404.component';


const routes: Routes = [
  { path: '',            component: InicioComponent },
  { path: 'login', component: LoginComponent},

  //Vamos a proteger esta ruta con un GUARD

  { path: 'privado', component: PrivadoComponent, canActivate: [LoginGuard]},
  { path: '**', component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
