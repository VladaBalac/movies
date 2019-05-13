import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';

// import 'rxjs/add/operator/map';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Movie } from '../model/movie';
import { MovieList } from '../model/movie-list';
import { Genre } from '../model/genre';

	const url = 'http://localhost:3000/api/movies';
	const url2 ='http://localhost:3000/api/genres';

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

	getMovie(id :number):Observable<Movie>{
		return this.http.get(url + "/" + id).pipe(map(res => new Movie(res)));
	}

	getGeners(){
		return this.http.get<Genre[]>(url2).pipe(map(res => {
		 let returnValue = new Array<Genre>();
		 for(var i = 0; i < res.length; i++){(gen => { returnValue.push( new Genre(res))})}
		 return returnValue}));
	}



}
