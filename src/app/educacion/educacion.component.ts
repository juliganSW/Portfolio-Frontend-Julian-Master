import { Component, OnInit } from '@angular/core';
import { Educacion } from '../model/educacion';
import { EducacionService } from '../services/educacion.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css'],
})
export class EducacionComponent implements OnInit {
  educacion: Educacion[] = [];

  constructor(private educacionService: EducacionService) {}

  ngOnInit(): void {
    this.cargarEducacion();
  }
  cargarEducacion(): void {
    this.educacionService.List().subscribe((data) => {
      this.educacion = data;
    });
  }
}
