import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CareerComponent } from './careers/careers.component'

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'careers', component: CareerComponent },
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),

  ],
  declarations: [
    AppComponent,
    HomeComponent,
    CareerComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
