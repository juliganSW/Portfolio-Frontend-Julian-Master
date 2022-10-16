import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './modals/login/login.component';
import { RedesComponent } from './redes/redes.component';
import { BannerComponent } from './banner/banner.component';
import { AboutComponent } from './about/about.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { EducacionComponent } from './educacion/educacion.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { FooterComponent } from './footer/footer.component';
import { AdminComponent } from './admin/admin.component';
import { ErrorComponent } from './error/error.component';
import { InicioComponent } from './inicio/inicio.component';
import { NavegacionComponent } from './navadmin/navegacion.component';
import { LogoutComponent } from './modals/logout/logout.component';
import { BotonadminComponent } from './botonadmin/botonadmin.component';
import { ListgroupComponent } from './listgroup/listgroup.component';
import { SocialesComponent } from './modals/sociales/sociales.component';
import { BackgroundComponent } from './modals/background/background.component';
import { InfoComponent } from './modals/info/info.component';
import { ExperienceComponent } from './modals/experience/experience.component';
import { EducationComponent } from './modals/education/education.component';
import { SkillsComponent } from './modals/skills/skills.component';
import { ProjectsComponent } from './modals/projects/projects.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RedesComponent,
    BannerComponent,
    AboutComponent,
    ExperienciaComponent,
    EducacionComponent,
    HabilidadesComponent,
    ProyectosComponent,
    FooterComponent,
    AdminComponent,
    ErrorComponent,
    InicioComponent,
    NavegacionComponent,
    LogoutComponent,
    BotonadminComponent,
    ListgroupComponent,
    SocialesComponent,
    BackgroundComponent,
    InfoComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,
    ProjectsComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
