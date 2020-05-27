import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormularioRegistroComponent } from './components/formulario-registro/formulario-registro.component';

const routes: Routes = [
  {
    path: '',
    component: FormularioRegistroComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroRoutingModule {}
