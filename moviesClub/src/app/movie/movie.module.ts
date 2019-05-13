import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { PaginationComponent } from '../movie/pagination/pagination.component';
import { MovieListComponent } from '../movie/movie-list/movie-list.component';
import { SortMovieComponent } from '../movie/sort-movie/sort-movie.component';
import { MovieFormComponent } from '../movie/movie-form/movie-form.component';
import { MovieComponent } from '../movie/movie/movie.component';

import { MovieRoutingModule } from '../movie/movie-routing/movie-routing.module';

import { ServisService } from './service/servis.service';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule,
    MovieRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  declarations: [

    PaginationComponent,
    MovieListComponent,
    SortMovieComponent,
    MovieFormComponent,
    HomeComponent,
    MovieComponent

  ],

  providers: [ServisService],

})
export class MovieModule { }
