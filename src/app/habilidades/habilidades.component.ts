import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../servicios/portfolio.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {
  //Inicializar variables de instancia para almacenar los datos con los que trata el servicio

  constructor(private portfolioService: PortfolioService) { }
  habilidades:any=[];


  ngOnInit(): void {
    this.portfolioService.getDatos().subscribe(portfolio => {
      console.log(portfolio);
      //definir informacion para mostrar
      this.habilidades= portfolio.habilidades;
      
    });
  }

}
