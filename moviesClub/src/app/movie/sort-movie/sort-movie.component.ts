import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sort-movie',
  templateUrl: './sort-movie.component.html',
  styleUrls: ['./sort-movie.component.css']
})
export class SortMovieComponent implements OnInit {

	sort :string = 'rating';
	sortDirection: string = "desc";
	@Output() javiSort = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }



  promeniSortDirection(){
  	this.sortDirection = this.sortDirection == 'asc' ? 'desc' : 'asc';
  	this.javiSort.emit({"sortDirection": this.sortDirection});
  }

    promenaSorta(){
  	this.javiSort.emit({"sort": this.sort});
  }

}
