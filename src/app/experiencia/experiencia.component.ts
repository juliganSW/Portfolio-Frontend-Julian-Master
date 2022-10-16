import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../servicios/portfolio.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  constructor(private portfolioService: PortfolioService) { }
  experiencias:any=[];

  ngOnInit(): void {
    this.portfolioService.getDatos().subscribe(portfolio => {
      console.log(portfolio);
      //definir informacion para mostrar
      this.experiencias= portfolio.experiencias;
      
    });
  }

}
