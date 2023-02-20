import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
 
  url='http://localhost:8080/experiencia'

  constructor(private http:HttpClient) {}
  public List(): Observable<Experiencia[]> {
    return this.http.get<Experiencia[]>(this.url + '/view');
    }
    
    public verExperiencia(id:number):Observable<Experiencia>{
      return this.http.get<Experiencia>(this.url +`/view/${id}`);
    }

    public agregarExperiencia(experiencia: Experiencia):Observable<any>{
      return this.http.post<any>(this.url + '/new', experiencia);
    }

    public editarExperiencia( experiencia: Experiencia):Observable<any>{
      return this.http.put<any>(this.url + `/edit`, experiencia);
    }

    public editExperiencia(id:number, experiencia: Experiencia):Observable<any>{
      return this.http.put<any>(this.url +`/editar/${id}`,experiencia );
    }

    public borrarExperiencia(id:number):Observable<any>{
      return this.http.delete<any>(this.url +`/delete/${id}`);
    }


}
