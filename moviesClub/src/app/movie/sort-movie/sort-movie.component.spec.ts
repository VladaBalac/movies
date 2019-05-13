import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortMovieComponent } from './sort-movie.component';

describe('SortMovieComponent', () => {
  let component: SortMovieComponent;
  let fixture: ComponentFixture<SortMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortMovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
