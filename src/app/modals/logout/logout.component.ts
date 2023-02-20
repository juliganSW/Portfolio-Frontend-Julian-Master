import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css'],
})
export class LogoutComponent implements OnInit {
  modoEdit: any;
  persona: any;

  constructor(private router: Router, private personaService: PersonaService) {}

  ngOnInit(): void {
    this.personaService.getPersona().subscribe((data) => {
      this.persona = data;
    });
    if (sessionStorage.getItem('currentUser') == null) {
      this.modoEdit = false;
    } else if (sessionStorage.getItem('currentUser') == 'null') {
      this.modoEdit = false;
    }
  }
  cerrarSesion() {
    sessionStorage.setItem('currentUser', 'null');
    this.modoEdit = false;
    alert('Se ha cerrado la session');

    window.sessionStorage.removeItem;

    this.router.navigate(['/']);
    window.location.reload();
  }
}
