import { Injectable } from '@angular/core';
import { HttpMethod, HttpService } from './http.service';
import { ApiEndpoint, ApiLanguage } from '../data/endpoints';
import { Genre } from '../models/genre.i';
import { Movie } from '../models/movie.i';
import { MovieDetails } from '../models/movie-details.i';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private lastPageAccessed = 1;

  public movieList!: Movie[];
  public genreList!: Genre[];

  constructor(private httpService: HttpService) {}

  private async getMovies(genre?: number): Promise<Movie[]> {
    try {
      const response = await this.httpService.request(
        HttpMethod.get,
        ApiEndpoint.discoverMovie(
          this.lastPageAccessed,
          ApiLanguage.English,
          genre
        )
      );

      return response.data.results;
    } catch (error) {
      console.error('Error getting config', error);
      throw error;
    }
  }

  public async getInitialMovies(genre?: number) {
    this.lastPageAccessed = 1;
    this.movieList = await this.getMovies(genre);
  }

  public async getMoreMovies(genre?: number) {
    this.lastPageAccessed++;
    this.movieList = this.movieList.concat(await this.getMovies(genre));
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
      throw error;
    }
  }

  public async getMovie(id: number): Promise<MovieDetails> {
    try {
      const response = await this.httpService.request(
        HttpMethod.get,
        ApiEndpoint.movieDetails(id, ApiLanguage.English)
      );

      return response.data as MovieDetails;
    } catch (error) {
      console.error('Error getting genre list', error);
      throw error;
    }
  }
}
