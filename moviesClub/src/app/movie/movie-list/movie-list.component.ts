import { Component, OnInit } from '@angular/core';

import { ServisService } from '../service/servis.service';

import { Movie } from '../model/movie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

	private movies :Movie[];
	private count :number;

	private params = {
		sort: 'rating',
		sortDirection: 'desc',
		page: 1,
		pageSize: 6,
	}

  constructor(private servis :ServisService) { }

  ngOnInit() {
  	  	this.servis.getMovies(this.params).subscribe(res => {
  		this.movies = res.results;
  		this.count = res.count;
  		console.log(this.movies);
  		console.log(this.count);
  	})
  }

  refres(params? :any){
  	if(params){
  		this.params.pageSize = params.pageSize || this.params.pageSize;
  		this.params.page = params.page || this.params.page;
  		this.params.sort = params.sort || this.params.page;
  		this.params.sortDirection = params.sortDirection || this.params.sortDirection;
  	}

  	this.servis.getMovies(this.params).subscribe(res => {
  		this.movies = res.results;
  		this.count = res.count;
  		console.log(this.movies);
  		console.log(this.count);
  	})
  }

}
