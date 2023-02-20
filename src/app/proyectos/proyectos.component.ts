import { Component, OnInit } from '@angular/core';
import { Proyecto } from '../model/proyecto';
import { ProyectoService } from '../services/proyecto.service';


@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
 
  proyectos:Proyecto[]=[];


  constructor( private proyectoService:ProyectoService ) { }
  

  ngOnInit(): void {
    this.cargarProyecto();
   };

  cargarProyecto():void{
    this.proyectoService.List().subscribe(data=>{this.proyectos=data});
    }

   
  }


