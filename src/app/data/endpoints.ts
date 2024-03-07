import { environment } from 'src/environments/environment';

export class ApiEndpoint {
  private static domain = environment.domain;

  /**
   * The data returned here in the configuration endpoint is designed to provide
   * some of the required information you'll need as you integrate our API.
   */
  static configurationDetails() {
    return `${this.domain}/configuration`;
  }

  /**
   * Get the list of official genres for movies.
   * @param language Sets a specific Language param.
   * @link https://developer.themoviedb.org/reference/genre-movie-list
   */
  static genreMovieList(language?: ApiLanguage): string {
    const url = `${this.domain}/genre/movie/list`;
    return language ? url.concat(`?language=${language}`) : url;
  }

  /**
   * If you specify the region parameter, the regional release date will be used
   * instead of the primary release date. The date returned will be the first date
   * based on your query (ie. if a with_release_type is specified). It's important to note the order of the release types that are used. Specifying 2|3 would return the limited theatrical release date as opposed to 3|2 which would return the theatrical date.
   * @param page Page to retrieve
   * @param sortBy Sorting param
   * @param language Language param
   */
  static discoverMovie(
    page: number = 1,
    sortBy?: ApiSortBy,
    language?: ApiLanguage
  ): string {
    let url = `${this.domain}/discover/movie?page=${page}`;

    if (sortBy) {
      url = url.concat(`&sort_by=${sortBy}`);
    }

    if (language) {
      url = url.concat(`&lannguage=${language}`);
    }

    return url;
  }
}

export const enum ApiLanguage {
  English = 'en',
  Spanish = 'es',
  French = 'fr',
}

// TODO List Sorting Category for Movie Discovert.
export const enum ApiSortBy {
  popularityDescend = 'popularity.desc',
}
