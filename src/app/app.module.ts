import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// Rutas
import { routing, appRoutingProviders } from './app.routing';

// Componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { UserService } from './services/userService'
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    MateriasAddComponent,
    MateriasListComponent,
    LoginComponent,
    HorariosComponent,
    ProfesoresAddComponent,
    ProfesoresListComponent,
    ModificacionUserComponent,
    CargaAcademicaAddComponent,
    CargaAcademicaListComponent,
    CursoAddComponent,
    CursoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing,
    HttpClientModule,
    FormsModule

  ],
  providers: [
    appRoutingProviders,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
