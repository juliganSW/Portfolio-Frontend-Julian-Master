import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Habilidad } from 'src/app/model/habilidad';
import { HabilidadService } from 'src/app/services/habilidad.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  form: FormGroup;
  habilidades: Habilidad[] = [];

  habilidad = "";
  progreso: any;
  logo = "";
  url = "";



  //inyectar el formbuilder en el constructor
  constructor(private formBuilder: FormBuilder, private habilidadService: HabilidadService,
    private router: Router) {
    //crear grupo de controles en el formulario
    this.form = this.formBuilder.group({
      id: [''],
      habilidad: ['', [Validators.required]],//es requerido 
      progreso: ['', [Validators.required, Validators.min(0), Validators.max(100)]],//es requerido
      logo: [''],
      url: [''],
    })
  }

  ngOnInit(): void {
    this.cargarHabilidad();
  }

  cargarHabilidad(): void {
    this.habilidadService.List().subscribe(
      data => {
        this.habilidades = data;
      });
  }

  //metodos para el formulario
  //declarar para las validaciones
  get Habilidad() {
    return this.form.get("habilidad");
  }

  get Progreso() {
    return this.form.get("progreso");
  }
  get Logo() {
    return this.form.get("logo")
  }

  get Url() {
    return this.form.get("url")
  }

  //Validaciones
  get HabilidadValid() {
    return this.Habilidad?.touched && !this.Habilidad.valid;
  }

  get ProgresoValid() {
    return this.Progreso?.touched && !this.Progreso.valid;
  }

 
  cargarDetalle(id: number) {
    this.habilidadService.verHabilidad(id).subscribe(
      {
        next: (data) => {
          this.form.setValue(data);
        },
        error: (e) => {
          console.error(e)
          alert("error al modificar")
        },
        complete: () => console.info('complete aqui')
      }
    )
  }
  

  onCreate() {
    console.log("Working")
    let hab = this.form.value;
    console.log()

    if (hab.id == '') {
      this.habilidadService.agregarHabilidad(hab).subscribe(
        data => {
          this.cargarHabilidad();
          this.form.reset();
        }
      )
    } else {
      this.habilidadService.editarHabilidad(hab).subscribe(
        data => {
          alert("Operacion exitosa");
          this.cargarHabilidad();
          this.form.reset();
        },error => {
          alert("Operacion exitosa");
          this.cargarHabilidad();
          this.form.reset();
        });
    }
  }
  borrar(id: number) {
    this.habilidadService.borrarHabilidad(id).subscribe(
      db => {
        alert("Eliminacion exitosa")
        this.cargarHabilidad()
      },
      error => {
        alert("Eliminacion exitosa")
        this.cargarHabilidad();
        this.form.reset();
      })
  }

 }



