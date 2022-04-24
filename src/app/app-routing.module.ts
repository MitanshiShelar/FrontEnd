import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { MainComponent } from './main/main.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CartComponent } from './cart/cart.component';
import { CategoryComponent } from './category/category.component';

const routes: Routes = [
  {path:"signin",component:SignInComponent},
  {path:"",component:MainComponent},
  {path:"signup",component:SignUpComponent},
  {path:"cart",component:CartComponent},
  {path:"category/:id",component:CategoryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
