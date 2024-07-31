import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-recommend',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './recommend.component.html',
  styleUrl: './recommend.component.css'
})
export class RecommendComponent {
  constructor(public router: Router) {}
  NavigateToRecommendation() {
    this.router.navigate(['/recommendation']);
  }
}
