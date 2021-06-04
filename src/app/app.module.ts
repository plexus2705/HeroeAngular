import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';  
import { Routes } from '@angular/router';
import { HttpClientModule , HttpClient } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login.component';
import { RegistroComponent } from './auth/registro.component';
import { CrearHeroeComponent } from './heroe/crear-heroe/crear-heroe.component';
import { DetalleHeroeComponent } from './heroe/detalle-heroe/detalle-heroe.component';
import { EditarHeroeComponent } from './heroe/editar-heroe/editar-heroe.component';
import { ListaHeroeComponent } from './heroe/lista-heroe/lista-heroe.component';
import { IndexComponent } from './index/index.component';
import { TokenService } from './service/token.service';
import { AuthService } from './service/auth.service';
import { MenuComponent } from './menu/menu.component';
import { interceptorProvider } from './interceptors/prod-interceptor.service';


const routes: Routes = [
  {path:"", component: IndexComponent},
  {path:"login", component: LoginComponent},
  {path:"registro", component: RegistroComponent},
  {path:"lista", component: ListaHeroeComponent},
  {path:"detalle/:id", component: DetalleHeroeComponent},
  {path:"nuevo", component: CrearHeroeComponent},
  {path:"editar/:id", component: EditarHeroeComponent},
  {path:"**", redirectTo:"" , pathMatch:'full'}
]
@NgModule({
  declarations: [
   
    AppComponent,
    LoginComponent,
    MenuComponent,
    ListaHeroeComponent,
    EditarHeroeComponent,
    DetalleHeroeComponent,
    CrearHeroeComponent,
    IndexComponent,
    RegistroComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule ,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    interceptorProvider,
    CommonModule,
    HttpClient,
    TokenService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
