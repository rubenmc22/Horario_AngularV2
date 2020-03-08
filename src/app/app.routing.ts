import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Componentes
import { HomeComponent } from './pages/home/component.home';
import { LoginComponent } from './pages/login/login.component'
import { HorariosComponent } from './pages/horarios/horarios.component';
import { ProfesoresAddComponent } from './pages/profesores/agregar-profesor/add-profesor.component';
import { ProfesoresListComponent } from './pages/profesores/listado-profesores/list-profesores.component';
import { MateriasAddComponent } from './pages/materias/agregar-materias/add-materias.component';
import { MateriasListComponent } from './pages/materias/listado-materias/list-materias.component'
import { ModificacionUserComponent } from './pages/administracion/modificacion_user/modificacion-user.component';
import { CargaAcademicaAddComponent } from './pages/cursos/agregar-cargaAcademica/add-cargaAcademica.component';
import { CargaAcademicaListComponent } from './pages/cursos/list-cargaAcademica/list-cargaAcademica.component';
import { CursoAddComponent } from './pages/cursos/agregar-curso/add-curso.component';
import { CursoListComponent } from './pages/cursos/list-curso/list-curso.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
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
