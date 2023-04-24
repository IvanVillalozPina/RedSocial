import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DirectivasComponent } from './components/directivas/directivas.component';
import { BodyComponent } from './components/body/body.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { MateriasComponent } from './components/materias/materias.component';
import { MateriaComponent } from './components/materia/materia.component';
import { MateriasService } from './services/materias.service';
import { PaisesComponent } from './components/paises/paises.component';
import { PaisesTarjetaComponent } from './components/paises-tarjeta/paises-tarjeta.component';
import { PaisesDetalleComponent } from './components/paises-detalle/paises-detalle.component';
import { PaisesService } from './services/paises.service';
import { NuevoUsuarioComponent } from './components/nuevo-usuario/nuevo-usuario.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DirectivasComponent,
    BodyComponent,
    HeaderComponent,
    MateriasComponent,
    MateriaComponent,
    PaisesComponent,
    PaisesTarjetaComponent,
    PaisesDetalleComponent,
    NuevoUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports:[
    BodyComponent,
    DirectivasComponent
  ],
  providers: [
    MateriasService,
    PaisesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
