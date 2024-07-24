import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrl: './recommendation.component.css'
})
export class RecommendationComponent {
  constructor(public router: Router) {}
  NavigateToRecommend() {
    this.router.navigate(['/recommend']);
  }
  NavigateToFavorite() {
    this.router.navigate(['/favourite']);
  }
}
