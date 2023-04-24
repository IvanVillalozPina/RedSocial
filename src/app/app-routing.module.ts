import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './components/body/body.component';
import { DirectivasComponent } from './components/directivas/directivas.component';
import { MateriasComponent } from './components/materias/materias.component';
import { PaisesComponent } from './components/paises/paises.component';
import { PaisesDetalleComponent } from './components/paises-detalle/paises-detalle.component';
import { NuevoUsuarioComponent } from './components/nuevo-usuario/nuevo-usuario.component';

const ROUTES: Routes = [
  { path: 'home', component: BodyComponent },
  { path: 'directivas', component: DirectivasComponent },
  { path: 'materias', component: MateriasComponent },
  { path: 'paises', component: PaisesComponent },
  { path: 'paises/detalle/:id', component: PaisesDetalleComponent },
  { path: 'nuevoUsuario', component: NuevoUsuarioComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
