import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MovieListComponent } from '../movie/movie-list/movie-list.component';
import { HomeComponent } from '../movie/home/home.component';

export const routes : Routes = [
{path: 'home', component: HomeComponent},
{ path: '',   redirectTo: '/home', pathMatch: 'full' }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],

  exports: [
  	RouterModule
  ],

  declarations: []
})
export class AppRoutingModule { }
