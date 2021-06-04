import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe } from 'src/app/models/heroe';
import { HeroeService } from 'src/app/service/heroe.service';

@Component({
  selector: 'app-editar-heroe',
  templateUrl: './editar-heroe.component.html',
  styleUrls: ['./editar-heroe.component.css']
})
export class EditarHeroeComponent implements OnInit {

  heroe: Heroe = new Heroe(0,"");
  fallo = false;
  mensaje = "";

  constructor(
    private heroeService: HeroeService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.heroeService.detail(id).subscribe(
      data => {
        this.heroe = data;
        this.fallo= false;
      },
      err => {
       
        this.router.navigate(['/']);
      }
    );
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.heroe.id = id;
    this.heroeService.update(this.heroe).subscribe(
      data => {
        this.fallo = false;      
        this.router.navigate(['/lista']);
      },
      err => {
        this.fallo = false;
        this.mensaje = "Fallo al actualizar";
      }
    );
  }

}
