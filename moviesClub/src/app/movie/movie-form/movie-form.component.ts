import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { ServisService } from '../service/servis.service';

import { Movie } from '../model/movie';
import { Genre } from '../model/genre';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css']
})
export class MovieFormComponent implements OnInit {

	movie :Movie;
	formMovie :FormGroup;
	id: number;
	genres : Genre[];
	newGenre :Genre;
	genreMenu :boolean = false;

  constructor(private fb :FormBuilder, private r :Router, private route :ActivatedRoute, private servis :ServisService) {
  	this.makeForm();
  }

  makeForm(){
  	this.formMovie = this.fb.group({
  		'name': ["", Validators.required],
  		'description': ["", [Validators.required, Validators.minLength(30), Validators.maxLength(250)]],
  		'year': ["", [Validators.required, Validators.min(1800), Validators.max(2018)]],
  		'rating': "",
  		'duration': "",
  		'director': "",
  		'genre': ""
  		
  	});
  }

  ngOnInit() {
  	// let id: string = this.route.snapshot.paramMap.get('id');
  	// if(id){
  	// 	this.servis.getMovie(Number(id)).subscribe(res => {
  	// 		this.movie = res;
  	// 		this.formMovie.patchValue(this.movie);
  	// 		this.id = res._id;
  	// 		console.log(this.id);
  	// 	})
  	// }
  	// this.servis.getGeners().subscribe(res => this.genres = res);
  	// console.log(this.genres);

  	let id: string = this.route.snapshot.paramMap.get('id');
  	if(id){
  		this.servis.getMovie(Number(id)).subscribe(res => {
  			this.movie = res;
  			this.formMovie.patchValue(this.movie);
  			this.id = res._id;
  			console.log(this.id);
  		})
  	}
  	this.servis.getGenres().subscribe(res => this.genres = res.results);
  	console.log(this.genres);
  }

  comfirm(){
  	let submitMovie :Movie = new Movie(this.formMovie.value);
  	if(this.movie && this.movie._id){
  		submitMovie._id = this.movie._id;
  		this.servis.editMovie(submitMovie).subscribe(movie => {
  			this.formMovie.reset();
  			this.r.navigate(['movies']);
  		})
  	}else{
  		this.servis.addMovie(submitMovie).subscribe(movie => {
  			this.formMovie.reset();
  			this.r.navigate(['movies']);
  		})
  	}
  }

  saveGenre(){
  	this.servis.addGenre(this.newGenre).subscribe(res => {
  		this.genres.push(res);
  		this.formMovie.patchValue({"genre": res.name});
  		this.genreMenu = false;
  	})

  }

  openGenreMenu(){
  	this.genreMenu = !this.genreMenu;
  	if(this.genreMenu){
  		this.newGenre = new Genre();
  	}
  }

}
