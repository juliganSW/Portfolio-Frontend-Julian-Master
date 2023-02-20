import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private http: HttpClient) { }
  url: string="http://miportfolioangular/app/";

// Método observable que devuelve los datos 
  getDatos( ): Observable <any> {
 // Se llama al JSON con su path ruta , o bien , en
//su lugar se puede poner una URL para traer datos de
//un JSON online
 return this.http.get(this.url+"persona");
}
}

