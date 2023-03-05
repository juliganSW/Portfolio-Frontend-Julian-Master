import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/services/educacion.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
  
})
export class EducationComponent implements OnInit {
  educacion: Educacion[] = [];
  form: FormGroup;

  institucion = '';
  inicio: any;
  fin: any;
  titulo: string;
  imagen = '';
  

  constructor(
    private formBuilder: FormBuilder, private educacionService: EducacionService, private router: Router) {
    this.form = this.formBuilder.group({
      id: [''],
      institucion: ['', [Validators.required]],
      inicio: [''],
      fin: [''],
      titulo: ['', [Validators.required]],
      imagen: [''],
    });
  }

  ngOnInit(): void {
    this.cargarEducacion();
    this.form.reset()
  }
  cargarEducacion(): void {
    this.educacionService.List().subscribe((data) => {
      this.educacion = data;
    });
  }

  get Institucion() {
    return this.form.get('institucion');
  }
  get Inicio() {
    return this.form.get('inicio');
  }
  get Fin() {
    return this.form.get('fin');
  }
  get Titulo() {
    return this.form.get('titulo');
  }
  get Imagen() {
    return this.form.get('imagen');
  }

  get InstitucionValid() {
    return this.Institucion?.touched && !this.Institucion.valid;
  }
  get TituloValid() {
    return this.Titulo?.touched && !this.Titulo.valid;
  }

  
  cargarDetalle(id: number) {
    this.educacionService.verEducacion(id).subscribe({
      next: (data) => {
        this.form.setValue(data);
      },
      error: (e) => {
        console.error(e);
        alert('error al modificar');
      },
      complete: () => console.info('complete aqui'),
    });
  }

  onCreate() {
    console.log('working');
    let ed = this.form.value;
    console.log();

    if (ed.id == '') {
      this.educacionService.agregarEducacion(ed).subscribe(data => {
        this.cargarEducacion();
        this.form.reset();
      }, error => {
        this.cargarEducacion();
        this.form.reset();
        
      });
    } else {
      this.educacionService.editarEducacion(ed).subscribe(data => {
        alert("Operacion exitosa");
        this.cargarEducacion();
        this.form.reset();
      },error => {
        alert("Operacion exitosa");
        this.cargarEducacion();
        this.form.reset();
    });
    }
  }

  borrar(id: number) {
    this.educacionService.borrarEducacion(id).subscribe(
      db => {
        alert("Eliminacion exitosa");
        this.cargarEducacion();
        this.form.reset();
        
      },error => {
        alert("Eliminacion exitosa");
        this.cargarEducacion();
        this.form.reset();
      }
    );
  }

 
}
