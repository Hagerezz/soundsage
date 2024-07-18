import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(public router: Router) {}
  NavigateToRecommend() {
    this.router.navigate(['/recommend']);
  }
}
