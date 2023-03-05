import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Persona } from 'src/app/model/persona';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 loginform: FormGroup;
  email = '';
  password = '';
  //agregado
  persona: Persona = new Persona("", "", "", "", "", "", "", "");

  constructor(private formBuilder: FormBuilder, private autenticacionService: AutenticacionService, private router: Router) {
    this.loginform = this.formBuilder.group({
      email: [' ', [Validators.required, Validators.email]],
      password: [' ', [Validators.required, Validators.minLength(8)]],
    })
  }

  ngOnInit(): void {
   
  }

  get Email() {
    return this.loginform.get('email');
  }

  get Password() {
    return this.loginform.get('password');
  }

  get EmailValid() {
    return this.Email?.touched && !this.Email?.valid;
  }

  get PasswordValid() {
    return this.Password?.touched && !this.Password?.valid;
  }

  onEnviar(event: Event) {
    event.preventDefault;
    if (this.loginform.valid) {
      this.autenticacionService.loginPersona(JSON.stringify(this.loginform.value)).subscribe(data => {
        console.log("DATA: " + JSON.stringify(data));
        this.router.navigate(['/admin'])
        window.location.reload();
      }, error => {
        alert("error al iniciar sesion")
      })
      //this.router.navigate([''])
    } else {
      alert("Hay un error en el formulario")
    }

  }
 

}

  





