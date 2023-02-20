import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Habilidad } from '../model/habilidad';

@Injectable({
  providedIn: 'root',
})
export class HabilidadService {
  url = 'http://localhost:8080/habilidad';

  constructor(private http: HttpClient) {}

  public List(): Observable<Habilidad[]> {
    return this.http.get<Habilidad[]>(this.url + '/view');
  }

  public verHabilidad(id: number): Observable<Habilidad> {
    return this.http.get<Habilidad>(this.url + `/view/${id}`);
  }

  public agregarHabilidad(habilidad: Habilidad): Observable<any> {
    return this.http.post<any>(this.url + '/new', habilidad);
  }

  public editarHabilidad(habilidad: Habilidad): Observable<any> {
    return this.http.put<any>(this.url + `/edit`, habilidad);
  }

  public editHabilidad(id: number, habilidad: Habilidad): Observable<any> {
    return this.http.put<any>(this.url + `/editar/${id}`, habilidad);
  }

  public borrarHabilidad(id: number): Observable<any> {
    return this.http.delete<any>(this.url + `/delete/${id}`);
  }
}
