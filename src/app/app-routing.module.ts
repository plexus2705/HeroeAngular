import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login.component';
import { RegistroComponent } from './auth/registro.component';
import { ProdGuarsService as guard} from './guards/prod-guars.service';
import { CrearHeroeComponent } from './heroe/crear-heroe/crear-heroe.component';
import { DetalleHeroeComponent } from './heroe/detalle-heroe/detalle-heroe.component';
import { EditarHeroeComponent } from './heroe/editar-heroe/editar-heroe.component';
import { ListaHeroeComponent } from './heroe/lista-heroe/lista-heroe.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'lista', component: ListaHeroeComponent, canActivate: [guard], data:{expectedRol:['admin', 'user']}},
  {path: 'detalle/:id', component: DetalleHeroeComponent, canActivate: [guard], data:{expectedRol:['admin', 'user']}},
  {path: 'nuevo', component: CrearHeroeComponent, canActivate: [guard], data:{expectedRol:['admin']}},
  {path: 'editar/:id', component: EditarHeroeComponent, canActivate: [guard], data:{expectedRol:['admin']}},
  {path: '**', redirectTo: "", pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
