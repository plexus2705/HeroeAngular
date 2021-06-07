import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  islogged = false;
  isAdmin = false;

  constructor(private tokenService: TokenService) { }

  ngOnInit(): void {
    this.islogged = this.tokenService.isLogged();
    this.isAdmin = this.tokenService.isAdmin();
  }

  onLogOut(){
    this.tokenService.logOut();

  }

}
