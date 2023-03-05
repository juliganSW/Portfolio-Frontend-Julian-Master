import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion';

@Injectable({
  providedIn: 'root',
})
export class EducacionService {
  // editEducacion() {
  //   throw new Error('Method not implemented.');
  // }
  url = 'https://portfolio-backend-xube.onrender.com/educacion'
  updateEducacion:any;

  constructor(private http: HttpClient) {}
  public List(): Observable<Educacion[]> {
    return this.http.get<Educacion[]>(this.url + '/view');
  }

  public verEducacion(id: number): Observable<Educacion> {
    return this.http.get<Educacion>(this.url + `/view/${id}`);
  }

  public agregarEducacion(educacion: Educacion): Observable<any> {
    return this.http.post<any>(this.url + '/new', educacion);
  }

  public editarEducacion(educacion: Educacion): Observable<any> {
    return this.http.put<any>(this.url + '/edit', educacion);
  }

   public editEducacion(id: number, educacion: Educacion): Observable<any> {
     return this.http.put<any>(this.url + `/editar/${id}`, educacion);
   }

  public borrarEducacion(id: number): Observable<any> {
    return this.http.delete<any>(this.url + `/delete/${id}`);
  }
}
