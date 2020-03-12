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


const appRoutes: Routes = [
  {path: '', component: LoginComponent},
  { path: 'dashboard', component: DashboardComponent },
 // { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'horarios', component: HorariosComponent },
  { path: 'add-profesor', component: ProfesoresAddComponent },
  { path: 'list-profesores', component: ProfesoresListComponent },
  { path: 'add-curso', component: CursoAddComponent },
  { path: 'list-cursos', component: CursoListComponent },
  { path: 'add-materia', component: MateriasAddComponent },
  { path: 'list-materias', component: MateriasListComponent },
  { path: 'add-cargaAcademica', component: CargaAcademicaAddComponent },
  { path: 'list-cargaAcademica', component: CargaAcademicaListComponent },
  { path: 'modificar_user', component: ModificacionUserComponent },
  // {path: '**', component: ErrorCompnent}
]

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
