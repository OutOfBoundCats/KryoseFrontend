import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/security/auth.service';



@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})



export class AuthComponent implements OnInit {

  constructor(private MyAuthService: AuthService) { }

  ngOnInit(): void{
    this.MyAuthService.autoLogin();
  }

}
