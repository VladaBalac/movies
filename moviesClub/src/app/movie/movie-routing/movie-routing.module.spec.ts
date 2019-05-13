import { MovieRoutingModule } from './movie-routing.module';

describe('MovieRoutingModule', () => {
  let movieRoutingModule: MovieRoutingModule;

  beforeEach(() => {
    movieRoutingModule = new MovieRoutingModule();
  });

  it('should create an instance', () => {
    expect(movieRoutingModule).toBeTruthy();
  });
});
