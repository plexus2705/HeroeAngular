import { Component, OnInit } from '@angular/core';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  islogged = false;
  nombreUsuario="";
  constructor(private tokenService: TokenService) { }

  ngOnInit(): void {
    if(this.tokenService.getToken() != ""){
      this.islogged = true;
      this.nombreUsuario = this.tokenService.getUserName();
    }else{
      this.islogged = false;
      this.nombreUsuario = "";
    }
  }

}
