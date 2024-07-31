import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  SignUpObj: SignUp;
  constructor(private http: HttpClient, private router: Router) {
    this.SignUpObj = new SignUp();
  }
  onSignUp() {
    this.http.post('http://localhost:8080/', this.SignUpObj).subscribe((res:any)=>{
      if(res.result) {
        alert("sign up success")
        this.router.navigate(['/login']);
      } else {
        alert(res.message)
      }
    })
  }
}

export class SignUp{
  name: string;
  email: string;
  password: string;
  constructor(){
    this.name = "";
    this.email = "";
    this.password = "";
  }
}
