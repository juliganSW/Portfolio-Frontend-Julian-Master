import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonaService } from 'src/app/services/persona.service';
import { Router } from '@angular/router';
import { Persona } from 'src/app/model/persona';
import { window } from 'rxjs';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
})
export class InfoComponent implements OnInit {
  form: FormGroup | any;

  persona: any;
  nombre = '';
  apellido = '';
  edad = '';
  titulo = '';
  acercademi = '';
  imagen = '';
  email = '';
  password = '';

  constructor(
    private personaService: PersonaService,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      id: [''],
      nombre: ['', [Validators.required]],
      apellido: ['',[Validators.required]],
      edad: [''],
      titulo: [''],
      acercademi: ['',[Validators.required]],
      imagen: [''],
      email: ['',[Validators.required]],
      password: ['',[Validators.required]],
    });
  }

  get Nombre() {
    return this.form.get('nombre');
  }
  get Apellido() {
    return this.form.get('apellido');
  }
  get Acercademi() {
    return this.form.get('acercademi');
  }
  get Email() {
    return this.form.get('email');
  }
  get Password() {
    return this.form.get('password');
  }

  get NombreValid() {
    return this.Nombre?.touched && !this.Nombre.valid;
  }
  get ApellidoValid() {
    return this.Apellido?.touched && !this.Apellido.valid;
  }
  get AcercademiValid() {
    return this.Acercademi?.touched && !this.Acercademi.valid;
  }
  get EmailValid(){
    return this.Email?.touched && !this.Email.valid;
  }
  get PasswordValid(){
    return this.Password?.touched && !this.Password.valid;
  }

  ngOnInit(): void {
    this.cargarPersona();
  }

  cargarPersona(): void {
    this.personaService.getPersona().subscribe((data) => {
      this.persona = data;
    });
  }

  cargarDetalle(id: 1) {
    this.personaService.verPersona(id).subscribe({
      next: (data) => {
        this.form.setValue(data);
      },
      error: (e) => {
        console.error(e);
        alert('error al modificar');
      },
      complete: () => console.info('completar aquí'),
    });
  }
  

  onEdit() {
    let per = this.form.value;
    this.personaService.editarPersona(per).subscribe(
      (data) => {
        alert('Persona editada');
        this.cargarPersona();
        this.form.reset();
      },
      (error) => {
        alert('Persona editada');
        this.cargarPersona();
        this.form.reset();
      }
    );
  }
}
