import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NuevoUsuario } from '../models/nuevo-usuario';
import { Observable } from 'rxjs';
import { LoginUsuario } from '../models/login-usuario';
import { JwtDto } from '../models/jwt-dto';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authUrl ='http://localhost:8080/auth/';

  constructor(private httpClient: HttpClient) { }

  public nuevo(nuevoUsuario: NuevoUsuario): Observable<any>{
    
    return this.httpClient.post(this.authUrl+'nuevo', nuevoUsuario);
  } 

  public login (loginUsuario: LoginUsuario): Observable<JwtDto>{
    
    return this.httpClient.post<JwtDto>(`${this.authUrl}login`, loginUsuario);
  } 
}
