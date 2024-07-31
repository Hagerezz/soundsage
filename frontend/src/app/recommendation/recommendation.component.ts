import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-recommendation',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
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
