import {Component, OnInit, Renderer2} from '@angular/core';
import { Inject, AfterViewInit, ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, AfterViewInit  {

  // tslint:disable-next-line:variable-name

  constructor(@Inject(DOCUMENT) private document, private elementRef: ElementRef) {
  }

  ngOnInit(): void {
    const s = this.document.createElement('script');
    s.type = 'text/javascript';
    s.src = 'https://kit.fontawesome.com/a076d05399.js';
    // tslint:disable-next-line:variable-name
    const __this = this;
    // tslint:disable-next-line:only-arrow-functions typedef
    s.onload = function () { __this.afterScriptAdded(); };
    this.elementRef.nativeElement.appendChild(s);
  }
  // tslint:disable-next-line:typedef
  afterScriptAdded() {
    const params = {
      width: '350px',
      height: '420px',
    };
    if (typeof (window['functionFromExternalScript']) === 'function') {
      window['functionFromExternalScript'](params);
    }
  }

  ngAfterViewInit(): void {
  }

}
