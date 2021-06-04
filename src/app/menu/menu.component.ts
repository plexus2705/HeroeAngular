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
  roles: string[] |undefined;
  isAdmin = false;

  constructor(private tokenService: TokenService, private router: Router) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.roles = this.tokenService.getAuthorities();
      this.roles.forEach(rol => {
        if (rol === 'ROLE_ADMIN') {
          this.isAdmin = true;
        }
      });
      this.islogged = true;
    }else{
      this.islogged = false;
    }
  }

  onLogOut(){
    this.tokenService.logOut();
    this.router.navigate(['/login']);
    //window.location.reload();
  }

}
