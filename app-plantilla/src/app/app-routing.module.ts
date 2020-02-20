import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BackofficeComponent } from './paginas/backoffice/backoffice.component';
import { InicioComponent } from './paginas/inicio/inicio.component';


const routes: Routes = [
  { path: '',            component: InicioComponent },
  { path: 'backoffice', component: BackofficeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
