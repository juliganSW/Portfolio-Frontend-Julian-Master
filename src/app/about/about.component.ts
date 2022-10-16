import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../servicios/portfolio.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

 //Inicializar variables de instancia para almacenar los datos con los que trata el servicio
 descripcion:string='';
 img:any='';
 titulo:string='';

 //Inyectar el servicio para tener acceso en la clase a los métodos
  constructor(private portfolioService: PortfolioService) { }

  ngOnInit(): void {
    this.portfolioService.getDatos().subscribe(portfolio => {
      console.log(portfolio);
      //definir informacion para mostrar
      this.descripcion= portfolio.descripcion
      this.img=portfolio.img;
      this.titulo=portfolio.titulo;
     
    });
    
  }

}
