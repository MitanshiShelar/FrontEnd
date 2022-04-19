import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { MainComponent } from './main/main.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MenSectionComponent } from './men-section/men-section.component';
import { WomenSectionComponent } from './women-section/women-section.component';
import { KidsSectionComponent } from './kids-section/kids-section.component';

const routes: Routes = [
  {path:"signin",component:SignInComponent},
  {path:"",component:MainComponent},
  {path:"signup",component:SignUpComponent},
  {path:"men-section",component:MenSectionComponent},
  {path:"women-section",component:WomenSectionComponent},
  {path:"kids-section",component:KidsSectionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
