import { Genre } from "./genre";

export class GenreList {
  count: number;
  results: Genre[];

  constructor(obj?: any) {
    this.count = obj && obj.count || 0;
    this.results = obj && obj.results.map(elem => { return new Genre(elem); }) || [];
  }
}