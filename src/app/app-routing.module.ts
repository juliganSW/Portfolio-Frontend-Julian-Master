import { NgModule } from '@angular/core';
import { ActivatedRoute, RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './modals/login/login.component';
import { GuardGuard } from './servicios/guard.guard';



const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'admin', component:AdminComponent ,canActivate:[GuardGuard] },
  { path: '', redirectTo:'inicio',pathMatch: 'full'},
 /* { path: '**', component: ErrorComponent },*/
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
