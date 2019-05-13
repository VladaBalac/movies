import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Movie } from '../model/movie';
import { MovieList } from '../model/movie-list';
import { Genre } from '../model/genre';

	const url = 'http://localhost:3000/api/movies';

@Injectable({
  providedIn: 'root'
})
export class ServisService {



	  constructor(private http :HttpClient) { }

	getMovies(params? : any):Observable<MovieList>{
		let queryParams = {};
  	if(params){
  		queryParams = {
  			params : new HttpParams()
  				.set("sort", params.sort || "")
  				.set("sortDirection", params.sortDirection || "")
  				.set("page", params.page && params.page.toString() || "")
  				.set("pageSize", params.page && params.pageSize.toString() || "")
  		}
  	}
  	return this.http.get(url, queryParams).pipe(map(res =>  new MovieList(res)));
	}


}
