import { Component, OnInit } from '@angular/core';
import { Persona } from '../model/persona';
import { PersonaService } from '../services/persona.service';
import { PortfolioService } from '../servicios/portfolio.service';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
})
export class BannerComponent implements OnInit {
  persona:Persona=new Persona("", "","", "","","","","");
  //prueba. No es la forma correcta
  //nombre = 'Julian';
  //apellido = 'Piedrabuena '

  //Inicializar variables de instancia para almacenar los datos con los que trata el servicio
 //nombre:string='';
// apellido:string='';
 //saludo:string='';
// ocupacion:string='';


  //Inyectar el servicio para tener acceso en la clase a los métodos
  constructor(/*private portfolioService: PortfolioService*/ private personaService:PersonaService) {}

  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data=>{this.persona=data});
   // this.portfolioService.getDatos().subscribe(portfolio => {
      //console.log(portfolio);
      //definir informacion para mostrar
     // this.nombre= portfolio.nombre;
     // this.apellido= portfolio.apellido;
     // this.saludo= portfolio.saludo;
     // this.ocupacion= portfolio.ocupacion;
    };
  }

