import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { LoginComponent } from './login/login.component';
import { RecommendComponent } from './recommend/recommend.component';
import { RecommendationComponent } from './recommendation/recommendation.component';
import { FavouriteComponent } from './favourite/favourite.component';

const routes: Routes = [
  {path: '', component: FirstpageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'recommend', component: RecommendComponent},
  {path: 'recommendation', component: RecommendationComponent},
  {path: 'favourite', component: FavouriteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
