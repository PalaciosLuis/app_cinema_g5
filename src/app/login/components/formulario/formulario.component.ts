import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Usuario } from '../../interfaces/login.interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'login-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css',
  imports: [FormsModule],
  standalone: true
})
export class FormularioComponent {

  userObj: Usuario;

  constructor(private servicio: LoginService){
    this.userObj = {user:"", password:""};
  }

  public login():void {
    
    const usuario:Usuario = {
      user:"asdas",
      password:"asdas"
    };

    this.servicio.logApi(usuario)

  }
}
