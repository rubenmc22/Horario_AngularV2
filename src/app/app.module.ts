import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

// Rutas
import { routing, appRoutingProviders } from './app.routing';

// Componentes
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/dashboard/home/home.component';
import { MateriasAddComponent } from './pages/dashboard/materias/agregar-materias/add-materias.component';
import { MateriasListComponent } from './pages/dashboard/materias/listado-materias/list-materias.component';
import { LoginComponent } from './pages/login/login.component';
import { HorariosComponent } from './pages/dashboard/horarios/horarios.component';
import { ProfesoresAddComponent } from './pages/dashboard/profesores/agregar-profesor/add-profesor.component';
import { ProfesoresListComponent } from './pages/dashboard/profesores/listado-profesores/list-profesores.component';
import { CargaAcademicaAddComponent } from './pages/dashboard/cursos/agregar-cargaAcademica/add-cargaAcademica.component';
import { CargaAcademicaListComponent } from './pages/dashboard/cursos/list-cargaAcademica/list-cargaAcademica.component';
import { CursoAddComponent } from './pages/dashboard/cursos/agregar-curso/add-curso.component';
import { CursoListComponent } from './pages/dashboard/cursos/list-curso/list-curso.component';
import { ModificacionUserComponent } from './pages/dashboard/administracion/modificacion_user/modificacion-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CursoService } from './services/cursoService';
import { ProfesorService } from './services/profesorService';
import { MateriaService } from './services/materiaService';
import { UserService } from './services/userService';
import { BloqueHorarioService } from './services/bloqueHorarioService';
import { AuthGuard } from '../app/services/authService';

const appRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
  { path: 'registro-user', component: RegistroComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'horarios', component: HorariosComponent, canActivate: [AuthGuard] },
  { path: 'add-profesor', component: ProfesoresAddComponent, canActivate: [AuthGuard] },
  { path: 'list-profesores', component: ProfesoresListComponent, canActivate: [AuthGuard] },
  { path: 'add-curso', component: CursoAddComponent, canActivate: [AuthGuard] },
  { path: 'list-cursos', component: CursoListComponent, canActivate: [AuthGuard] },
  { path: 'add-materia', component: MateriasAddComponent, canActivate: [AuthGuard] },
  { path: 'list-materias', component: MateriasListComponent, canActivate: [AuthGuard] },
  { path: 'add-cargaAcademica', component: CargaAcademicaAddComponent, canActivate: [AuthGuard] },
  { path: 'list-cargaAcademica', component: CargaAcademicaListComponent },
  { path: 'modificar_user', component: ModificacionUserComponent, canActivate: [AuthGuard] },
  // {path: '**', component: ErrorCompnent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MateriasAddComponent,
    MateriasListComponent,
    DashboardComponent,
    LoginComponent,
    HorariosComponent,
    ProfesoresAddComponent,
    ProfesoresListComponent,
    ModificacionUserComponent,
    CargaAcademicaAddComponent,
    CargaAcademicaListComponent,
    CursoAddComponent,
    CursoListComponent,
    RegistroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
    ),

  ],
  providers: [
    appRoutingProviders,
    CursoService,
    ProfesorService,
    MateriaService,
    UserService,
    BloqueHorarioService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
