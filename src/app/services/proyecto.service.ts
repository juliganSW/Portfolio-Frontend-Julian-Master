import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Proyecto } from '../model/proyecto';

import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProyectoService {
  // editProyecto() {
  //   throw new Error('Method not implemented.');
  // }

  url: string = 'http://localhost:8080/proyecto';
  updateProyecto: any;

  constructor(private http: HttpClient) {}

  //public getProyecto(): Observable<Proyecto> {
  //  return this.http.get<Proyecto>(this.url + '/view/52');
  //}

  public List(): Observable<Proyecto[]> {
    return this.http.get<Proyecto[]>(this.url + '/view');
  }

  public verProyecto(id: number): Observable<Proyecto> {
    return this.http.get<Proyecto>(this.url + `/view/${id}`);
  }

  public agregarProyecto(proyecto: Proyecto): Observable<any> {
    return this.http.post<any>(this.url + '/new', proyecto);
  }

  public editarProyecto(proyecto: Proyecto): Observable<any> {
    return this.http.put<any>(this.url + '/edit', proyecto);
  }

  public editProyecto(id: number, proyecto: Proyecto): Observable<any> {
    return this.http.put<any>(this.url + `/editar/${id}`, proyecto);
  }

  public borrarProyecto(id: number): Observable<any> {
    return this.http.delete<any>(this.url + `/delete/${id}`);
  }
}
