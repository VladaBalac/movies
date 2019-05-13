import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MovieListComponent } from '../movie-list/movie-list.component';
import { MovieFormComponent } from '../movie-form/movie-form.component';

const movieRoutes : Routes = [
	{path: 'movies', 
	component: MovieListComponent, },

	// 	children: [
	// 	{
	// 		path: ':id', 
	// 		component: MovieFormComponent
	// 	}
	// ]

	{path: 'movies/:id', component: MovieFormComponent},
	{path: 'add', component: MovieFormComponent}



]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(movieRoutes)
  ],

  exports: [
  	RouterModule
  ],

  declarations: []
})
export class MovieRoutingModule { }
