import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-recommendation',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, FormsModule],
  templateUrl: './recommendation.component.html',
  styleUrl: './recommendation.component.css'
})
export class RecommendationComponent {
  RecommendationObj: Recommendation;
  constructor(private http: HttpClient, private router: Router) {
    this.RecommendationObj = new Recommendation();
  }
  onRecommendation() {
    this.http.post('http://127.0.0.1:8080/recommendation', this.RecommendationObj).subscribe((res:any)=>{
      if(res.result) {
        alert("wait for the result")
      } else {
        alert(res.message)
      }
    })
  }
  NavigateToFavorite() {
    this.router.navigate(['/favourite']);
  }
}

export class Recommendation{
  genres: string;
  language: string;
  constructor() {
    this.genres = "";
    this.language = "";
  }
}
