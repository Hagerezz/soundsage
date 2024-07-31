import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  LoginObj: Login = new Login();
  constructor(public router: Router) {}
  NavigateToRecommend() {
    this.router.navigate(['/recommend']);
  }
}

export class Login{
  name: string;
  password: string;
  constructor(){
    this.name = "";
    this.password = "";
  }
}
