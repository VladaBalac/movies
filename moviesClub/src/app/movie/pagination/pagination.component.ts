import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit, OnChanges {

	@Input() pageSize :number;
	@Input() movieNumber :number;
	@Input() pageNumber: number;
	@Output() javiStranu = new EventEmitter();
	lastPage :number;

  constructor() { }

  ngOnInit() {
  	this.lastPage = Math.ceil(this.movieNumber / this.pageSize);
  }

  ngOnChanges(){
  	this.lastPage = Math.ceil(this.movieNumber / this.pageSize);
  }

  sentPage(page){
  	this.pageNumber = page;
  	this.javiStranu.emit({"page" : page});
  	console.log(this.pageNumber);
  }

}
