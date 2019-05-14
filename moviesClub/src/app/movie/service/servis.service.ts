import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';

// import 'rxjs/add/operator/map';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Movie } from '../model/movie';
import { MovieList } from '../model/movie-list';
import { Genre } from '../model/genre';
import { GenreList } from '../model/genreList';

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

	addMovie(movie :Movie){
		return this.http.post<Movie>(url, movie).pipe(map(res => new Movie(res)));
	}

	editMovie(editMovie :Movie){
		return this.http.put<Movie>(url + "/" + editMovie._id, editMovie).pipe(map(res => new Movie(res)));
	}

	getGenres():Observable<GenreList>{
		return this.http.get(url2).pipe(map( res => new GenreList(res)));
	}

	addGenre(newGenre :Genre):Observable<Genre>{
		return this.http.post(url2, newGenre).pipe(map(res => new Genre(res)));
	}

	// getGeners(){
	// 	return this.http.get<Genre[]>(url2).pipe(map(res => {
	// 	 let returnValue = new Array<Genre>();
	// 	 for(var i = 0; i < res.length; i++){(gen =>  returnValue.push( new Genre(res)))}
	// 	 return returnValue}));
	// }



}
