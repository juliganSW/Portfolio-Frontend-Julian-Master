import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/services/experiencia.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  form: FormGroup;
  experiencias: Experiencia[]=[];

  empresa = " ";
  puesto = " ";
  tareas = " ";
  inicio = " ";
  fin = " ";
  logo = " ";


  constructor(private formBuilder: FormBuilder, private experienciaService: ExperienciaService, private router: Router) {
    this.form = this.formBuilder.group({
      id: [''],
      empresa: ['', [Validators.required]],//es requerido 
      puesto: ['', [Validators.required]],//es requerido
      tareas: ['', [Validators.required]],// es requerido
      inicio: [''],
      fin: [''],
      logo: [''],

    })
  }

  ngOnInit(): void {
    this.cargarExperiencia();
  }

  cargarExperiencia(): void {
    this.experienciaService.List().subscribe(
      data => {
        this.experiencias = data;
      });
  }

  get Empresa() {
    return this.form.get('empresa');
  }

  get Puesto() {
    return this.form.get('puesto');

  }
  get Tareas() {
    return this.form.get('tareas')
  }

  //Validaciones
  get EmpresaValid() {
    return this.Empresa?.touched && !this.Empresa?.valid;
  }

  get PuestoValid() {
    return this.Puesto?.touched && !this.Puesto?.valid;
  }

  
  cargarDetalle(id: number) {
    this.experienciaService.verExperiencia(id).subscribe(
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
    let exp = this.form.value;
    console.log()

    if (exp.id == '') {
      this.experienciaService.agregarExperiencia(exp).subscribe(
        data => {
          this.cargarExperiencia();
          this.form.reset();
        }
      )
    } else {
      this.experienciaService.editarExperiencia(exp).subscribe(
        data => {
          alert("Operacion exitosa");
          this.cargarExperiencia();
          this.form.reset();
        },error => {
          alert("Operacion exitosa");
          this.cargarExperiencia();
          this.form.reset();
        });
    }
  }

  borrar(id: number) {
    this.experienciaService.borrarExperiencia(id).subscribe(
      db => {
        alert("Eliminacion exitosa")
        this.cargarExperiencia();
        this.form.reset();
      },
      error => {
        alert("Eliminacion exitosa")
        this.cargarExperiencia();
        this.form.reset();
      });
  }
}
