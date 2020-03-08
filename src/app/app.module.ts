import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// Rutas
import { routing, appRoutingProviders } from './app.routing';

// Componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/component.home';
import { MateriasAddComponent } from './pages/materias/agregar-materias/add-materias.component';
import { MateriasListComponent } from './pages/materias/listado-materias/list-materias.component';
import { LoginComponent } from './pages/login/login.component';
import { HorariosComponent } from './pages/horarios/horarios.component';
import { ProfesoresAddComponent } from './pages/profesores/agregar-profesor/add-profesor.component';
import { ProfesoresListComponent } from './pages/profesores/listado-profesores/list-profesores.component';
import { CargaAcademicaAddComponent } from './pages/cursos/agregar-cargaAcademica/add-cargaAcademica.component';
import { CargaAcademicaListComponent } from './pages/cursos/list-cargaAcademica/list-cargaAcademica.component';
import { CursoAddComponent } from './pages/cursos/agregar-curso/add-curso.component';
import { CursoListComponent } from './pages/cursos/list-curso/list-curso.component';
import { ModificacionUserComponent } from './pages/administracion/modificacion_user/modificacion-user.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
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
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
