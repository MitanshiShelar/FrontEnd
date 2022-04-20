import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MenSectionComponent } from './men-section/men-section.component';
import { WomenSectionComponent } from './women-section/women-section.component';
import { KidsSectionComponent } from './kids-section/kids-section.component';
import { AddCategoryComponent } from './add-category/add-category.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavbarComponent,
    SignInComponent,
    SignUpComponent,
    MenSectionComponent,
    WomenSectionComponent,
    KidsSectionComponent,
    AddCategoryComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
