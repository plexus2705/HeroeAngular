import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Heroe } from '../models/heroe';

@Injectable({
  providedIn: 'root'
})
export class HeroeService {

  heroeURL = 'http://localhost:8080/api/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Heroe[]> {
    return this.httpClient.get<Heroe[]>(this.heroeURL + 'heroes');
  }

  public detail(id: number): Observable<Heroe> {
    return this.httpClient.get<Heroe>(this.heroeURL + `heroe/${id}`);
  }


  public save(heroe: Heroe): Observable<any> {
    return this.httpClient.post<any>(this.heroeURL + 'saveHeroe', heroe);
  }

  public update(heroe: Heroe): Observable<any> {
    return this.httpClient.put<any>(this.heroeURL + `updateHero`, heroe);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.heroeURL + `deleteHeroe/${id}`);
  }
}
