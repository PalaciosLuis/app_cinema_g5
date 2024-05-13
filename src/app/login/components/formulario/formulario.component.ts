import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Usuario } from '../../interfaces/login.interface';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'login-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css',
  imports: [FormsModule, CommonModule],
  standalone: true
})
export class FormularioComponent {

  userObj: Usuario;

  constructor(private servicio: LoginService){
    this.userObj = {user:"", password:""};
  }

  public onLogin():void {
    this.servicio.logApi(this.userObj)
  }

  public getCode():string{
    return this.servicio.getCode
  }
}
