import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Usuario } from '../../interfaces/login.interface';

@Component({
  selector: 'login-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  constructor(private servicio: LoginService){}

  public login():void {
    
    const usuario:Usuario = {
      user:"asdas",
      password:"asdas"
    };

    this.servicio.logApi(usuario)

  }
}
