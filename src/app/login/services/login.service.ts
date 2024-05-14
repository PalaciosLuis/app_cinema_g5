import { Injectable } from '@angular/core';
import { LoginModule } from '../login.module';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { LoginRespone, Usuario } from '../interfaces/login.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  apiUrl = "http://localhost:8080/user/login"
  private code:string="";

  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
  })

  public get getCode():string{
    return this.code;
  }

  public logApi(user:Usuario){
    this.http.post<LoginRespone>(this.apiUrl,
      JSON.stringify(user),{headers: this.headers})
    .subscribe(r => this.code = r.code)

    
  }

  constructor(private http:HttpClient) { }
}
