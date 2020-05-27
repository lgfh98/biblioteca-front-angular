import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RegistroRoutingModule } from './registro-routing.module';
import { FormularioRegistroComponent } from './components/formulario-registro/formulario-registro.component';

@NgModule({
  declarations: [FormularioRegistroComponent],
  imports: [
    CommonModule,
    RegistroRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class RegistroModule {}
