import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  LoginObj: Login = new Login();
  constructor(private http: HttpClient, private router: Router) {
    this.LoginObj = new Login();
  }
  onLogin() {
    this.http.post('http://localhost:8080/', this.LoginObj).subscribe((res:any)=>{
      if(res.result) {
        alert("Log in success")
        this.router.navigate(['/recommendation']);
      } else {
        alert(res.message)
      }
    })
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
