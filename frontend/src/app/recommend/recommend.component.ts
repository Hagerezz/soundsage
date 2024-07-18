import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recommend',
  templateUrl: './recommend.component.html',
  styleUrl: './recommend.component.css'
})
export class RecommendComponent {
  constructor(public router: Router) {}
  NavigateToRecommendation() {
    this.router.navigate(['/recommendation']);
  }
}
