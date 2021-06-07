import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NuevoUsuario } from '../models/nuevo-usuario';
import { Observable } from 'rxjs';
import { LoginUsuario } from '../models/login-usuario';
import { JwtDto } from '../models/jwt-dto';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authUrl = environment.authUrl;
  

  constructor(private httpClient: HttpClient) { }

  public nuevo(nuevoUsuario: NuevoUsuario): Observable<any>{
    
    return this.httpClient.post(this.authUrl+'nuevo', nuevoUsuario);
  } 

  public login (loginUsuario: LoginUsuario): Observable<JwtDto>{
    
    return this.httpClient.post<JwtDto>(`${this.authUrl}login`, loginUsuario);
  } 
  public refresh (jwtDto: JwtDto): Observable<JwtDto>{
    
    return this.httpClient.post<JwtDto>(`${this.authUrl}refresh`, jwtDto);
  } 
}
