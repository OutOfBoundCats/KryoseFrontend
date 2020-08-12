import {Component, OnInit} from '@angular/core';
import {AuthService} from './services/security/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'KryoseFrontend';

  constructor() {
  }
  ngOnInit(): void {

  }
}
