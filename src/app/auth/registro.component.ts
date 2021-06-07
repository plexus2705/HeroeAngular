import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUsuario } from '../models/login-usuario';
import { NuevoUsuario } from '../models/nuevo-usuario';
import { AuthService } from '../service/auth.service';
import { TokenService } from '../service/token.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  fallo= false;
  mensaje ="";
  nuevoUsuario: NuevoUsuario = new NuevoUsuario("","","","",[]);
  nombreUsuario!: string;
  nombre!: string;
  email!: string;
  password!: string;
  roles: string[] = [];
  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {

  }


  onRegister(): void {
    this.nuevoUsuario = new NuevoUsuario(this.nombre, this.nombreUsuario, this.email, this.password,this.roles);
    this.authService.nuevo(this.nuevoUsuario).subscribe(
      data => {
        this.fallo = false;
        this.router.navigate(['/login']);
      },
      err => {
        this.fallo = true;
        this.mensaje = err.error;
       
       
      }
    );
  }

  getAdmin(e:any){
      if(e.target.checked)
      {
          
          this.roles.push("admin");
      }
  }

}
