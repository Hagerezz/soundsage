import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-firstpage',
  templateUrl: './firstpage.component.html',
  styleUrl: './firstpage.component.css'
})
export class FirstpageComponent {
  constructor(public router: Router) {}
  NavigateToLogin() {
    this.router.navigate(['/login']);
  }
}

