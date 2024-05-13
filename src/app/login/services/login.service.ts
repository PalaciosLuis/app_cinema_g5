import { Injectable } from '@angular/core';
import { LoginModule } from '../login.module';
import { HttpClient, HttpParams } from '@angular/common/http';
import { LoginRespone, Usuario } from '../interfaces/login.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  apiUrl = "http://localhost:8080/user/login"
  private code:string="";

  public get getCode():string{
    return this.code;
  }

  public async logApi(user:Usuario){
    await this.http.post<LoginRespone>(this.apiUrl,user)
    .subscribe(r => console.log(r.code))
  }

  constructor(private http:HttpClient) { }
}
