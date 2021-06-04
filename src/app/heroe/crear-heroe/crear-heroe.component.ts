import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Heroe } from 'src/app/models/heroe';
import { HeroeService } from 'src/app/service/heroe.service';

@Component({
  selector: 'app-crear-heroe',
  templateUrl: './crear-heroe.component.html',
  styleUrls: ['./crear-heroe.component.css']
})
export class CrearHeroeComponent implements OnInit {

  nombre = '';
  fallo = false;
  mensaje = "";

  constructor(
    private heroeService: HeroeService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.mensaje = "Heroe";
  }

  onCreate(): void {
    const heroe = new Heroe(0, this.nombre);
    this.heroeService.save(heroe).subscribe(
      data => {
        this.mensaje = "Heroe creado";
        this.fallo = true;
        this.router.navigate(['/lista']);
      },
      err => {
        this.mensaje = "Heroe no creado";
        this.fallo = false;
      }
    );
  }
}
