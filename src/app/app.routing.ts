import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Componentes
import { DashboardComponent } from './pages/dashboard/dashboard.component';
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
import { RegistroComponent } from './pages/registro/registro.component';
import { AuthGuard } from '../app/services/authService';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  // { path: 'login', component: LoginComponent },
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

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
