import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioComponent } from './components/formulario/formulario.component';




@NgModule({
  declarations: [
    FormularioComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FormularioComponent
  ]
})
export class LoginModule { }
