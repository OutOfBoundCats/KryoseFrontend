import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/security/auth.service';
import {Router} from '@angular/router';



@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})



export class AuthComponent implements OnInit {

  constructor(private MyAuthService: AuthService, private router: Router) { }

  ngOnInit(): void{
    this.MyAuthService.autoLogin();
  }

}
