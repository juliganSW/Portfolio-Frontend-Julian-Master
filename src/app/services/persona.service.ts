import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona';

@Injectable({
  providedIn: 'root',
})
export class PersonaService {
 
  url = 'http://localhost:8080/persona';
  
  

  constructor(private http: HttpClient) {}

  public getPersona(): Observable<Persona> {
    return this.http.get<Persona>(this.url + '/view/1');
  }
  public List(): Observable<Persona[]> {
    return this.http.get<Persona[]>(this.url + '/view');
  }
  public agregarPersona(persona: Persona): Observable<any> {
    return this.http.post<any>(this.url + '/new', persona);
  }
 
  public verPersona(id: number): Observable<Persona> {
    return this.http.get<Persona>(this.url + `/view/${id}`);
  }

  public editarPersona(persona: Persona): Observable<any> {
    return this.http.put<any>(this.url + '/edit', persona);
  }

  public editPersona(id: number, persona: Persona): Observable<any> {
    return this.http.put<any>(this.url + `/editar/${id}`, persona);
  }

 
}
