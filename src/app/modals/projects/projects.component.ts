import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/services/proyecto.service';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {

  form: FormGroup | any;

  proyectos: Proyecto[] = [];

  proyecto = "";
  descripcion = "";
  imagen = "";
 


  constructor(private formBuilder: FormBuilder, private proyectoService: ProyectoService, private router: Router) {
    this.form = this.formBuilder.group({
      id: [''],
      proyecto: ['', [Validators.required]], //es requerido
      descripcion: ['', [Validators.required]],
      imagen: [''],
     });
  }

  ngOnInit(): void {
    this.cargarProyecto();
  }

  cargarProyecto(): void {
    this.proyectoService.List().subscribe(data => {
      this.proyectos = data;
    });
  }
  get Proyecto() {
    return this.form.get("proyecto");
  }

  get Descripcion() {
    return this.form.get("descripcion");
  }

  get Imagen() {
    return this.form.get("imagen");
  }
 
  get ProyectoValid() {
    return this.Proyecto?.touched && !this.Proyecto.valid;
  }

  get DescripcionValid() {
    return this.Descripcion?.touched && !this.Descripcion.valid;
  }

  cargarDetalle(id: number) {
    this.proyectoService.verProyecto(id).subscribe(
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
    let pro = this.form.value;
    console.log()

    if (pro.id == '') {
      this.proyectoService.agregarProyecto(pro).subscribe(
        data => {
          this.ngOnInit();
          this.form.reset();
        }
      )
    } else {
      this.proyectoService.editarProyecto(pro).subscribe(
        data => {
          alert("Operacion exitosa");
          this.cargarProyecto();
          this.form.reset();
        },error => {
          alert("Operacion exitosa");
          this.cargarProyecto();
          this.form.reset();
        });
    }
  }

  borrar(id: number) {
    this.proyectoService.borrarProyecto(id).subscribe(
      db => {
        alert("Eliminacion exitosa")
        this.cargarProyecto();
        this.form.reset();
      },
      error => {
        alert("Eliminacion exitosa")
        this.cargarProyecto();
        this.form.reset();
      });
  }

 }
