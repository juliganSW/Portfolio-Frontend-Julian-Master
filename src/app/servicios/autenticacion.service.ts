import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AutenticacionService {
  url = 'https://portfolio-backend-xube.onrender.com/persona/autenticacion/inicio';
  currentUserSubject: BehaviorSubject<any>;

  constructor(private http: HttpClient) {
    console.log('el servicio de autenticacion está corriendo');
    this.currentUserSubject = new BehaviorSubject<any>(
      JSON.parse(sessionStorage.getItem('currentUser') || '{}')
    );
  }
  loginPersona(credenciales: any): Observable<any> {
    var httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.post(this.url, credenciales, httpOptions).pipe(
      map((data) => {
        sessionStorage.setItem('currentUser', JSON.stringify(data));
        this.currentUserSubject.next(data);
        return data;
      })
    );
  }

  //    IniciarSesion(credenciales:any): Observable<any>{
  //     return this.http.post(this.url,credenciales).pipe(map((data)=>
  //      {sessionStorage.setItem('currentUser',JSON.stringify(data));
  //      this.currentUserSubject.next(data);
  //      return data;
  //    }
  //     ))
  //  }
  get usuarioAutenticado() {
    return this.currentUserSubject.value;
  }
}
