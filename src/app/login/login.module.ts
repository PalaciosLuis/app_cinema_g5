import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioComponent } from './components/formulario/formulario.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule, FormsModule, FormularioComponent
  ],
  exports: [
    FormularioComponent
  ]
})
export class LoginModule { }
