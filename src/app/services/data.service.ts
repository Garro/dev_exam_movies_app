import { Injectable } from '@angular/core';
import { HttpMethod, HttpService } from './http.service';
import { ApiEndpoint, ApiLanguage } from '../data/endpoints';
import { Genre } from '../models/genre.i';
import { Movie } from '../models/movie.i';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public movieList: Movie[] = [];
  public lastPageAccessed = 0;

  public genreList: Genre[] = [];

  constructor(private httpService: HttpService) {}

  public async getMovies(page: number = 1) {
    try {
      const response = await this.httpService.request(
        HttpMethod.get,
        ApiEndpoint.discoverMovie(page, undefined, ApiLanguage.English)
      );

      this.movieList = response.data.results;
      this.lastPageAccessed = response.data.page;
    } catch (error) {
      console.error('Error getting config', error);
    }
  }

  public async getGenres() {
    try {
      const response = await this.httpService.request(
        HttpMethod.get,
        ApiEndpoint.genreMovieList(ApiLanguage.English)
      );

      this.genreList = response.data.genres;
    } catch (error) {
      console.error('Error getting genre list', error);
    }
  }
}
