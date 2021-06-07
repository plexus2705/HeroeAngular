import { Component, OnInit } from '@angular/core';
import { Heroe } from 'src/app/models/heroe';
import { HeroeService } from 'src/app/service/heroe.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-lista-heroe',
  templateUrl: './lista-heroe.component.html',
  styleUrls: ['./lista-heroe.component.css']
})
export class ListaHeroeComponent implements OnInit {

  heroes: Heroe[] = [];
  isAdmin = false;
  fallo = false;
  mensaje = "";

  constructor(
    private heroeService: HeroeService,
    private tokenService: TokenService
  ) { }

  ngOnInit(): void {
    this.mensaje = "Heroes"
    this.cargarHeroes();
    this.isAdmin = this.tokenService.isAdmin();
  }

  cargarHeroes(): void {
    this.heroeService.lista().subscribe(
      data => {
        this.heroes = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  borrar(id: number) {
    this.heroeService.delete(id).subscribe(
      data => {
        this.fallo = false;
        this.mensaje ="Heroes: Se borro correctamente";

        this.cargarHeroes();
      },
      err => {
        this.fallo = true;
        this.mensaje ="Heroes: No se borro ";
      }
    );
  }

}
