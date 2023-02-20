import { Component, OnInit } from '@angular/core';
import { Habilidad } from '../model/habilidad';
import { HabilidadService } from '../services/habilidad.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css'],
})
export class HabilidadesComponent implements OnInit {
  habilidades: Habilidad[] = [];
  constructor(private habilidadService: HabilidadService) {}

  ngOnInit(): void {
    this.cargarHabilidad();
  }

  cargarHabilidad(): void {
    this.habilidadService.List().subscribe((data) => {
      this.habilidades = data;
    });
  }
}
